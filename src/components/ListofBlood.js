import React from "react";
import Navbar from "./Navbar";
import blood from "../img/find-blood.jpg"
const ListofBlood = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center">
        <img src={blood} width={150} />
        <h1 className="my-auto mx-3 text-capitalize">Find Your requirement</h1>
        </div>
        <div className=" text-center bg-body-tertiary rounded-3 row p-3">
          <div className="input-group col-md-8 mx-auto m-4">
            <button
              className="btn btn-outline-danger dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blood Group
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  A+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  A-
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  B+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  B-
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  AB+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  AB-
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  O+
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  O-
                </a>
              </li>
            </ul>
            <input
              type="text"
              className="form-control "
              aria-label="Text input with dropdown button"
              placeholder="Enter a City Name  Ex. Rajkot "
            />

            <button className="btn btn-outline-primary px-3" type="button">
              Search
            </button>
          </div>
        </div>
        <ul className="list-group my-3">
          <li className="list-group-item d-flex justify-content-around fw-medium text-capitalize">
            <span>Index</span>
            <span>Ragistreson No.</span>
            <span>Blood Bank Name</span>
            <span>City Name</span>
            <span>Active</span>
            <span>Contact Number</span>
            <span>Action</span>
          </li>

          <li className="list-group-item d-flex justify-content-around text-capitalize mt-2">
            <span>1</span>
            <span>HAJE2B3J3N3</span>
            <span>BMC Blood Bank</span>
            <span>rajkot</span>
            <span>yes</span>
            <span>+91 88776 99887</span>
            <span></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListofBlood;
