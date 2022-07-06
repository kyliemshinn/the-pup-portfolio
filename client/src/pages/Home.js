import React from "react";
// import Carousel from "../components/Carousel";
import BlogCard from "../components/Cards/BlogCard";
import MeetParents from "../components/MeetParents";
import Clyde4 from "../images/clyde4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* <Carousel /> */}
      <div className="headerCard row">
        <div className="col headerImage">
          <img src={Clyde4} className="clydeImage" alt="Clyde" />
        </div>

        <div className="col headerTxt p-4 w-75">
          <h3 >
            Hello & Welcome! My name is Clyde. This is a page dedicated to
            helping my fellow dog friends
          </h3>
          <h3 >
            with just about anything you can think of related DOG. Get a deeper
            dive into my brain!
          </h3>
          <h3 >
            Come along the journey with me and explore what it means to be THE
            Clyde Lewis. You won't regret it.
          </h3>
        </div>
      </div>
      <BlogCard />
      <MeetParents />
    </div>
  );
}

export default Home;
