import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Raktamoksha</h6>
            <p className="fs-6">
              We are dedicated to promoting voluntary blood donation and
              providing safe and reliable blood to those in need. Your support
              and donations are greatly appreciated in helping us achieve our
              mission.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/Blood_Bank_Live_Site" className="text-reset">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reset">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reset">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-reset">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="registers" className="text-reset">
                  Donating Blood
                </Link>
              </li>
              <li>
                <Link to="registers" className="text-reset">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link to="/findDonor" className="text-reset">
                  Blood Banks
                </Link>
              </li>
              <li>
                <Link o="/findDonor" className="text-reset">
                  Search Blood
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home me-3" /> Rajkot, Gujarat, 36005
              </li>
              <li>
                <i className="fas fa-envelope me-3" /> raktamoksha@gmail.com
              </li>
              <li>
                <i className="fas fa-phone me-3" /> +91 88776 55443
              </li>
              <li>
                <i className="fas fa-print me-3" /> +91 88776 99887
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Raktamoksha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
