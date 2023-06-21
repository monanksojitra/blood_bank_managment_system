import React from 'react'

import { Link } from "react-router-dom";
import Acc_panel from './Acc_panel';
const Main_nav = () => {
  return (
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
      <Acc_panel />
    </nav>
  );
}

export default Main_nav
