import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import clyde1 from "../images/clyde1.jpg";
import clyde2 from "../images/clyde2.jpg";
import clyde3 from "../images/clyde3.jpg";
import clyde4 from "../images/clyde4.jpg";
import clyde5 from "../images/clyde5.jpg";

const clyde = [clyde1, clyde2, clyde3, clyde4, clyde5];

const Carousel = () => {
  return (
    <div>
      <div>
        <SimpleImageSlider
          width="45vw"
          height="70vh"
          loop={true}
          autoPlay={true}
          showBullets={false}
          images={clyde}
          overflow="hidden"
          className="slider"
          // style={{ margin: "0 auto", height: "auto" }}
        />
      </div>
    </div>
  );
};
export default Carousel;
