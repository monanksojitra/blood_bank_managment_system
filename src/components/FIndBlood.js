import React from "react";
import blood from "../img/find-blood.jpg";
import { Link } from "react-router-dom";
const FIndBlood = () => {
  return (
    <div className="container my-2">
      <div className=" text-center bg-body-tertiary rounded-3 ">
        <img src={blood} width={200}  />
        <h1 className="text-body-emphasis">Find a Blood</h1>
        <p className="col-lg-7 mx-auto fs-5 text-muted">
          " Be a hero - donate blood and help ensure that someone in need
          receives the life-saving treatment they require "
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Link
          to="findDonor"
            className="btn btn-danger btn-lg px-4 rounded-pill"
            type="button"
          >
            Find Donor
          </Link>
          <Link
          to="findDonor"
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            Find Blood Bank
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FIndBlood;
