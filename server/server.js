const path = require("path");
const express = require('express');
const db = require('./config/connection');
const { authMiddleware } = require("./utils/auth");

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware, introspection: true, playground: true});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/*', function(req, res) {
  console.log("Hitting wildcard route!");
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  // Update Express.js to use Apollo server features
  server.applyMiddleware({ app });
};

db.once('open', () => { // Start the database connection
  app.listen(PORT, () => { // Start the Express server
    console.log(`Adventure book server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

startApolloServer(typeDefs, resolvers); // Start the Apollo server