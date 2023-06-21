import React from "react";
import "./css/main.css";
import Footer from "../../components/Footer";
import Main_nav from "./Main_nav";
import Side_nav from "./Side_nav";
const Error_500 = () => {
  return (
    <>
      <Main_nav />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Side_nav />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mt-4">
                <img
                  className="mb-4 img-error"
                  src="https://img.freepik.com/free-vector/500-internal-server-error-concept-illustration_114360-5572.jpg?w=2000"
                  alt="Error 404"
                />
                <h1 className="display-1">500</h1>
                <p className="lead">Internal Server Error</p>
                <a href="index.html">
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

export default Error_500;
