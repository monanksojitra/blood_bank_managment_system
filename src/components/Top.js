import React from "react";
import banner from "../img/main-banner.png";

const Top = () => {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img
          src={banner}
          className="me-2 w-100"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Top;
