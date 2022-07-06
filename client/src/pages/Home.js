import React from "react";
import Carousel from "../components/Carousel";
import BlogCard from "../components/Cards/BlogCard";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* <Carousel /> */}
      <BlogCard />
    </div>
  );
}

export default Home;
