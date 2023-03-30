import React from "react";
import hero from "../img/blood-1.jpg";
const Hero = () => {
  return (
    <div className="container col-xxl-8 px-2 g-5">
      <div className="row flex-lg-row-reverse align-items-center">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={hero}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-6 fw-bold fs-2 text-body-emphasis mb-3">
            Be a Lifesaver: Donate Blood and Give the Gift of Life :)
          </h1>
          <p className="lead fs-5">
            Donating blood is a simple act of kindness that can make a huge
            difference in someone's life. Every year, millions of people require
            blood transfusions for various medical conditions, such as cancer
            treatments, surgeries, and blood disorders. By donating blood, you
            can help save lives and give the gift of life to those in need.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 me-md-2"
            >
              Donate
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
