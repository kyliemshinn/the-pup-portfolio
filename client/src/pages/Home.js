import React from "react";
import clyde1 from "../images/clyde1.jpg";
import clyde2 from "../images/clyde2.jpg";
import clyde3 from "../images/clyde3.jpg";
import clyde4 from "../images/clyde4.jpg";
import clyde5 from "../images/clyde5.jpg";
import Carousel from "../components/Carousel";

import "../styles/Home.css";

function Home() {
  const clyde = [clyde1, clyde2, clyde3, clyde4, clyde5];
  return (
    <div className="home">
      <h1>Hello i am clyde</h1>
      <Carousel />
    </div>
  );
}

export default Home;
