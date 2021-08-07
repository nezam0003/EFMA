import React from "react";
import logo1 from "../images/logo/logosample3.png";
import logo2 from "../images/logo/efma.jpg";

const TopHeader = () => {
  return (
    <>
      <header className="bg-light">
        <div className="container">
          <div className="row  pt-3">
            <div className="col-md-8">
              <img src={logo1} alt="img1" className="img-fluid" />
            </div>
            <div className="col-4 mx-auto col-sm-3  mx-md-0 py-2 col-md-4 text-end">
              <a className="navbar-brand" href="https://www.google.com">
                <img src={logo2} alt="img1" className="img-fluid logo " />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
