import React from "react";
import Sliders from "./Sliders";

const Services = () => {
  return (
    <>
      <section className=" services py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mx-md-0 col-lg-6">
              <div className="row">
                <div className="col-10 mx-auto mx-md-0 col-sm-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0">
                      <a href="https://www.google.com">Paper Submissions</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">Program Committee</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        Special Sessions and Events
                      </a>
                    </li>
                    <l className="list-group-item border-0 " i>
                      <a href="https://www.google.com">Registration</a>
                    </l>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">Program Matrix</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">Accepted Papers</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">Detailed Program</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        EFM Doctoral Students Seminar
                      </a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">2021 Recruitment Fair</a>
                    </li>
                  </ul>
                </div>
                <div className="col-10 mx-auto mx-md-0 col-sm-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0">
                      <a href="https://www.google.com">
                        Exhibitors Registration Form
                      </a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        WHARTON-WRDS EFMA AWARD
                      </a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">L.LANG Award</a>
                    </li>
                    <l className="list-group-item border-0 " i>
                      <a href="https://www.google.com">GARP Award</a>
                    </l>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        EFMA Capital Markets Award
                      </a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">PhD Award</a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        EFM Classification Codes
                      </a>
                    </li>
                    <li className="list-group-item border-0 ">
                      <a href="https://www.google.com">
                        World Scientific Publishing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto mx-md-0 col-lg-6">
              <Sliders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
