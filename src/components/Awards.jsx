import React from "react";
import img1 from "../images/conference/1.png";
import img2 from "../images/conference/2.jpg";
import img3 from "../images/conference/3.png";
import img4 from "../images/conference/4.png";
import img5 from "../images/conference/5.png";
import img6 from "../images/conference/6.jpeg";
import img7 from "../images/conference/7.png";
import img8 from "../images/conference/8.png";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const Awards = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h4 className="text-center text-danger text-capitalize pb-3">
                Conference Award Sponsors
              </h4>
              <div className="underline"></div>
            </div>
          </div>
          <div className="container">
            <div className="row  pt-5">
              {allImages.map((item, index) => {
                return (
                  <>
                    <div
                      className="col-sm-4 col-md-3 mb-3 border border-light"
                      key={index}
                    >
                      <img className="img-fluid" src={item} alt="photoss" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
