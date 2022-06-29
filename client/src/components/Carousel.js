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
        <div className="carousel">
        <SimpleImageSlider
          width="100vw"
          height="70vh"
          loop= {true}
          autoPlay= {true}
          showBullets={false}
          images={clyde}
          className="slider"
          style={{ margin: '0 auto', height: 'auto' }}
        />
      </div>
    )
}
 export default Carousel;