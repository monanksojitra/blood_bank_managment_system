import React from "react";

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
                <a href="#!" className="text-reset">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-reset">
                  Donating Blood
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Request Blood
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Blood Banks
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Search Blood
                </a>
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
