import React from "react";
import "./css/main.css";
import Footer from "../../components/Footer";
import Main_nav from "./Main_nav";
import Side_nav from "./Side_nav";

const Error_401 = () => {
  return (
    <>
      <Main_nav />

      {/* Modified layout */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Side_nav />
        </div>

        {/* Updated content layout */}
        <div id="layoutSidenav_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  {/* Updated heading */}
                  <img
                    className="mb-4 img-error"
                    src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg"
                    alt="Error 404"
                  />
                  <h1 className="display-4">401 - Unauthorized</h1>
                  <p className="lead">Access to this resource is denied.</p>
                  <p>Please log in to access the content.</p>
                  {/* Updated button */}
                  <a href="index.html" className="btn btn-primary">
                    <i className="fas fa-arrow-left me-1" />
                    Return to Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Updated footer */}
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  {/* Updated copyright */}
                  &copy; Your Website {new Date().getFullYear()}
                </div>
                <div>
                  <a href="#">Privacy Policy</a> ·{" "}
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Error_401;
