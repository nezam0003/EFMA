import React from "react";
import Carousel from "react-elastic-carousel";

import img1 from "../images/service/1.jpg";
import img2 from "../images/service/2.jpg";
import img3 from "../images/service/3.jpg";
import img4 from "../images/service/4.jpg";
import img5 from "../images/service/5.jpg";
import img6 from "../images/service/6.jpg";

const sliderItems = [img1, img2, img3, img4, img5, img6];

const Sliders = () => {
  return (
    <>
      <Carousel
        itemsToShow={1}
        isRTL={true}
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={1500}
      >
        {sliderItems.map((item, index) => {
          return <img className="img-fluid" src={item} alt="img" key={index} />;
        })}
      </Carousel>
    </>
  );
};

export default Sliders;
