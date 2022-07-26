import React from "react";
import BlogCard from "../components/Cards/BlogCard";
import Carousel from "../components/Carousel";
import MeetParents from "../components/MeetParents";
// import Clyde4 from "../images/clyde4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* <Carousel /> */}
      <div className="headerCard row">
        <div className="col headerImage">
          {/* <img src={Clyde4} className="clydeImage" alt="Clyde" /> */}
          <Carousel />
        </div>

        <div className="col headerTxt p-4 w-75 d-block m-auto">
          <h1 className="block-center lh-lg display-2"> Hello & Welcome, Friends!</h1>
          <h2 className="lh-sm display-6">
            Come explore how to live my lifestyle- and trust me, you want to. Get a
            deeper dive into the brain of Clyde (this is very exclusive stuff)! You won't
            regret it.
          </h2>
          <h3 className="lh-lg">Need more of me? Follow me on Tik Tok and Instagram!</h3>
          <button className="btn btn-secondary" >Explore</button>
        </div>
      </div>
      <BlogCard />
      <MeetParents />
    </div>
  );
}

export default Home;
