import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-1.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="mx-2"
              height={35}
              alt="MDB Logo"
              loading="lazy"
            />
            <small className="text-danger-emphasis">Raktamoksha</small>
          </Link>
        </div>

        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarRightAlignExample"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className=" dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link className="dropdown-item " to="/donar_reg">
                            For Donate
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/requer_reg">
                            For Request
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Bank_reg">
                            For Blood Bank
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className=" dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        For Blood
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <Link className="nav-link" to="/Donateblood">
                            Donate blood
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/Requestblood">
                            Request blood
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
