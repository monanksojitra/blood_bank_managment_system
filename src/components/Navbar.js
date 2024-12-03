import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/Blood_Bank_Live_Site">
          <img
            src={logo}
            className="mx-2"
            height={40}
            alt="MDB Logo"
            loading="lazy"
          />
          <small className="text-danger-emphasis h5">Raktamoksha</small>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <strong>
                <Link className="nav-link" to="/Blood_Bank_Live_Site">
                  Home
                </Link>
              </strong>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/registers">
                Register
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/blood"
                id="bloodDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Blood
              </Link>
              <ul className="dropdown-menu" aria-labelledby="bloodDropdown">
                <li>
                  <Link className="dropdown-item" to="/donate_blood">
                    Donate Blood
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/request_blood">
                    Request Blood
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
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
  );
};

export default Navbar;
