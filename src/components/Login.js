import React from "react";

import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="h-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 ">
                  <div className="col-md-6 col-lg-5 d-none d-md-block ">
                    <img
                      src="https://img.freepik.com/free-photo/world-blood-donor-day-creative-collage_23-2149378367.jpg?w=360&t=st=1680187563~exp=1680188163~hmac=2c47852bb488651a231d908d5ce51bb3cfbf9b4602a157c0fdec387490ae024a"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="w-50">
                    <div className=" p-5 pb-4">
                      <h1 className="fw-bold mb-0 fs-3">
                        Welcome to Raktamoksha:)
                      </h1>
                    </div>
                    <div className="modal-body">
                      <form className="">
                        <div className="dropdown  mb-3">
                          <button
                            className="dropdown-toggle form-control rounded-3"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Role Of User
                          </button>
                          <ul className="dropdown-menu dropdown-menu-dark w-100">
                            <li>
                              <a className="dropdown-item" href="#">
                                Blood Doner
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Blood Consumer
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Blood Bank Admin
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="input-group mb-3">
  <span className="input-group-text w-25 bg-light" id="basic-addon1">
    Email 
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Ex . abcd@email.com"
    aria-label="Email"
    aria-describedby="basic-addon1"
  />
</div>
                        <div className="input-group mb-3">
  <span className="input-group-text w-25 bg-light" id="basic-addon1">
    Password
  </span>
  <input
    type="text"
    className="form-control"
    placeholder="Ex. asdf1234"
    aria-label="Password"
    aria-describedby="basic-addon1"
  />
</div>


                        <button
                          className="w-100 mb-2 btn btn-lg rounded-3 text-light "
                          type="submit"
                          style={{ backgroundColor: "#9A616D" }}
                        >
                          Sign up
                        </button>
                        <small className="text-body-secondary">
                          By clicking Sign up, you agree to the terms of use.
                        </small>
                        <hr className="my-3" />

                        <button
                          className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3"
                          type="submit"
                        >
                          Sign up with Gmail
                        </button>
                        <button
                          className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                          type="submit"
                        >
                          <svg className="bi me-1" width={16} height={16}>
                            <use xlinkHref="#github" />
                          </svg>
                          Sign up with Phone No.
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
