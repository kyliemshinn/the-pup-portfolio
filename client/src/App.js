// import './App.css';
import React from 'react';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    // const client = new ApolloClient({
    //     uri: '/graphql',
    //     cache: new InMemoryCache(),
    //   });
  return (
    <Router forceRefresh={true}>
    <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
