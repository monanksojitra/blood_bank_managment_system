import React from "react";
import "../components/css/form.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <section className="h-100" style={{ backgroundColor: "#9A616D" }}>
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
                          <span
                            className="input-group-text w-25 bg-light"
                            id="basic-addon1"
                          >
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
                          <span
                            className="input-group-text w-25 bg-light"
                            id="basic-addon1"
                          >
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
      </section> */}
      <>
        <section className="login">
          <div className="login_box">
            <div className="left">
              <div className="top_link">
                <Link to="/Blood_Bank_Live_Site">
                  <img
                    src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                    alt=""
                  />
                  Return home
                </Link>
              </div>
              <div className="contact">
                <form action="">
                  <h3>SIGN IN</h3>
                  <input type="text" placeholder="USERNAME" />
                  <input type="text" placeholder="PASSWORD" />
                  <button className="submit">LET'S GO</button>
                </form>
              </div>
            </div>
            <div className="right">
              <div className="right-text">
                <h2>Raktamoksha</h2>
                <h6 className="ml-5">
                  blood donation and providing safe and reliable blood to those
                  in need
                </h6>
              </div>
              <div className="right-inductor">
                <img
                  src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Login;
