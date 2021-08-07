import React from "react";
import img1 from "../images/person/1.jpg";
import img2 from "../images/person/2.jpg";
import img3 from "../images/person/3.jpg";

const faculties = [
  {
    id: 1,
    name: "Professor Jay R. Ritter",
    title: "Keynote Speaker",
    subtitle: "Warrington College of Business",
    img: img1,
  },
  {
    id: 2,
    name: "Prof.Phil Holmes",
    title: "President",
    subtitle: "University of Leeds, UK",
    img: img2,
  },
  {
    id: 3,
    name: "Prof.Andrew Marshall",
    title: "Program Co-Chairs",
    subtitle: "University of Strathclyde, Glasgow",
    img: img3,
  },
];

const Faculty = () => {
  return (
    <>
      <section className=" py-5">
        <div className="container">
          <div className="row">
            {faculties.map((faculty) => {
              const { id, name, title, subtitle, img } = faculty;
              return (
                <>
                  <div
                    key={id}
                    className="col-10 mx-auto mx-md-0  mb-3  col-sm-6 col-md-4"
                  >
                    <div className="card shadow h-100">
                      <div className="card-header bg-white text-center">
                        {title}
                      </div>
                      <img
                        src={img}
                        alt={name}
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body text-center">
                        <a
                          href="https://www.google.com"
                          className="card-title text-danger text-decoration-none"
                        >
                          {name}
                        </a>
                        <h6 className="card-subtitle my-1 text-muted">
                          {subtitle}
                        </h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
