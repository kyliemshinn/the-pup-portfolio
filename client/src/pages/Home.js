import React from "react";
import Carousel from "../components/Carousel";
import BlogCard from "../components/Cards/BlogCard";
import "../styles/Home.css";
import MeetParents from "../components/MeetParents";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <BlogCard />
      <MeetParents />
    </div>
  );
}

export default Home;
