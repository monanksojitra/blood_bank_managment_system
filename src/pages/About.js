import React from "react";
import Navbar from "../components/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/Footer";
const About = () => {
  let founder = [
    {
      name: "Monank Sojitra ",
      pos: "CEO",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
    },
    {
      name: "Sandip Dabhi ",
      pos: "CTO",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
    },
    {
      name: "Ashish Ziniya",
      pos: "CFO",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
    },
    {
      name: "Anil Chauhan",
      pos: "CMO",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Note: Blood Bank Project Inc. is a team of passionate Computer
                Engineering students from GEC Rajkot. Their goal is to
                revolutionize the blood management and accessibility using
                cutting-edge technology. Their comprehensive platform connects
                blood donors, recipients, and healthcare organizations,
                providing real-time information and ensuring efficient
                utilization of blood resources. With a commitment to user
                experience and security, they strive to make blood donation a
                fundamental right for all. Join their mission and help save
                lives.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
              <h2 className="font-weight-light">Work Experience</h2>
              <p className="font-italic text-muted">
                The team at Blood Bank Project Inc. comprises Computer
                Engineering students from GEC Rajkot who have gained extensive
                work experience throughout their academic journey. Through their
                involvement in programming competitions, hackathons, and
                collaborative projects, they have sharpened their technical
                skills and developed a strong problem-solving mindset.
              </p>
              <p className="font-italic text-muted mb-4">
                Their work experience includes internships and practical
                training programs, which have provided them with industry
                exposure and insights into professional software development
                practices. They have also actively engaged in research and
                development activities focused on healthcare technology, leading
                them to create the innovative Blood Bank Project Inc.
              </p>

              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary" />
              <h2 className="font-weight-light">Further Improve</h2>
              <p className="font-italic text-muted ">
                Expand partnerships with blood banks and healthcare
                organizations.
              </p>
              <p className="font-italic text-muted ">
                Enhance data analytics for optimized inventory management.
              </p>

              <p className="font-italic text-muted ">
                Introduce donor rewards and incentives to encourage regular
                donations.
              </p>

              <p className="font-italic text-muted mb-4">
                Develop a mobile application for easy access and engagement.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py -5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
            <div className="row text-center">
          {founder.map((value, i) =>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={value.img}
                    alt=""
                    width={100}
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">{value.name}</h5>
                  <span className="small text-uppercase text-muted">
                    {value.pos} - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i class="fa-brands fa-square-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
          )}
            </div>
        </div>
      </div>
      <footer className="bg-light">
        {/* <div className="container text-center">
          <p className="font-italic text-muted mb-0">
            © Copyrights Raktamoksha All rights reserved.
          </p>
        </div> */}
        <Footer/>
      </footer>
    </>
  );
};

export default About;
