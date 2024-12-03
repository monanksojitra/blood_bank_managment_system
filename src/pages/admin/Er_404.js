import React from "react";
import "./css/main.css";
import Side_nav from "./Side_nav";
import Main_nav from "./Main_nav";
import Footer from "../../components/Footer";

const Error_404 = () => {
  return (
    <>
      <Main_nav />

      {/* Updated layout */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Side_nav />
        </div>

        {/* Updated content layout */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mt-4">
                {/* Updated image */}
                <img
                  className="mb-4 img-error"
                  src="https://t3.ftcdn.net/jpg/04/48/35/42/240_F_448354204_33yPB12jtqzD31robpa85NoPctJ2thRd.jpg"
                  alt="Error 404"
                />
                {/* Updated heading */}
                <h1 className="display-4">404 - Page Not Found</h1>
                <p className="lead">
                  Oops! The requested URL was not found on this server.
                </p>
                {/* Updated button */}
                <a href="index.html" className="btn btn-primary">
                  <i className="fas fa-arrow-left me-1" />
                  Return to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error_404;
