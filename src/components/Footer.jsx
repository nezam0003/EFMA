import React from "react";
import logo from "../images/logo/logo1.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-1">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>

            <div className="col-10  mx-auto  col-md-9">
              <div className="text-center">
                &copy; 1991-2020 , John A Doukas. Maintained by Anoop Reddy
                Ananthula
              </div>
              <div className="d-flex justify-content-center text-center">
                <a
                  href="https://www.google.com"
                  className="text-decoration-none"
                >
                  Subscribe
                </a>
                /
                <a
                  href="https://www.google.com"
                  className="text-decoration-none"
                >
                  Unsubscribe
                </a>
              </div>
            </div>
            <div className="col-10 mx-auto col-sm-2 ">
              <div className="d-flex justify-content-end">
                <a
                  className="text-decoration-none"
                  href="https://www.facebook.com"
                >
                  <FaFacebook className="fs-2 mx-3" />
                </a>
                <a
                  className="text-decoration-none"
                  href="https://www.facebook.com"
                >
                  <FaInstagram className="fs-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
