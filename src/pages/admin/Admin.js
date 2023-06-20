import React from "react";
import "./css/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import List_of_bb from "./Info/list_of_bb";
import { Link } from "react-router-dom";
import ApexChart from "./BloodQuantityChart ";
import ApexChart_2 from "./Bar_char";
const Admin = () => {
  return (
    <div>
      <>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand*/}
          <Link className="navbar-brand ps-3" to="/admin">
            Raktamoksha Admin
          </Link>

          {/* Sidebar Toggle*/}

          {/* Navbar Search*/}
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
          {/* Navbar*/}
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core</div>
                  <Link to="/admin" className="nav-link">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-tachometer-alt" />
                    </div>
                    Dashboard
                  </Link>

                  <div className="sb-sidenav-menu-heading">Interface</div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-columns" />
                    </div>
                    Layouts
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down" />
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="/layou_static">
                        Static Navigation
                      </Link>
                      <a className="nav-link" href="layout-sidenav-light.html">
                        Light Sidenav
                      </a>
                    </nav>
                  </div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePages"
                    aria-expanded="false"
                    aria-controls="collapsePages"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-book-open" />
                    </div>
                    Pages
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down" />
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="collapsePages"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav
                      className="sb-sidenav-menu-nested nav accordion"
                      id="sidenavAccordionPages"
                    >
                      <a
                        className="nav-link collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#pagesCollapseAuth"
                        aria-expanded="false"
                        aria-controls="pagesCollapseAuth"
                      >
                        Authentication
                        <div className="sb-sidenav-collapse-arrow">
                          <i className="fas fa-angle-down" />
                        </div>
                      </a>
                      <div
                        className="collapse"
                        id="pagesCollapseAuth"
                        aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordionPages"
                      >
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="login.html">
                            Login
                          </a>
                          <a className="nav-link" href="register.html">
                            Register
                          </a>
                          <a className="nav-link" href="password.html">
                            Forgot Password
                          </a>
                        </nav>
                      </div>
                      <a
                        className="nav-link collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#pagesCollapseError"
                        aria-expanded="false"
                        aria-controls="pagesCollapseError"
                      >
                        Error
                        <div className="sb-sidenav-collapse-arrow">
                          <i className="fas fa-angle-down" />
                        </div>
                      </a>
                      <div
                        className="collapse"
                        id="pagesCollapseError"
                        aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordionPages"
                      >
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="401.html">
                            401 Page
                          </a>
                          <a className="nav-link" href="404.html">
                            404 Page
                          </a>
                          <a className="nav-link" href="500.html">
                            500 Page
                          </a>
                        </nav>
                      </div>
                    </nav>
                  </div>
                  <div className="sb-sidenav-menu-heading">Addons</div>
                  <a className="nav-link" href="charts.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-chart-area" />
                    </div>
                    Charts
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Tables
                  </a>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard Of RST Hospital</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Wellcome Admin</li>
                </ol>
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">Primary Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">Warning Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">Success Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                      <div className="card-body">Danger Card</div>
                      <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div className="small text-white">
                          <i className="fas fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-area me-1" />
                        <ApexChart />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card mb-4">
                      <div className="card-header">
                        <i className="fas fa-chart-bar me-1" />
                        <ApexChart_2 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table me-1" />
                    DataTable Example
                  </div>
                  <List_of_bb />
                </div>
              </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright © Your Website 2023
                  </div>
                  <div>
                    <a href="#">Privacy Policy</a>·
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    </div>
  );
};

export default Admin;
