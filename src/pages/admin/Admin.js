import React, { useState } from "react";
import "./css/main.css";
// import "./css/admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import List_of_bb from "./Info/list_of_bb";
import { Link } from "react-router-dom";
import ApexChart from "./BloodQuantityChart ";
import ApexChart_2 from "./Bar_char";
import Footer from "../../components/Footer";
import Card_blood from "./Card_blood";
import Acc_panel from "./Acc_panel";
import Side_nav from "./Side_nav";
import Main_nav from "./Main_nav";
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., send a request to the server)
    // Replace this with your actual login implementation

    if (username === "admin@admin.com" && password === "admin") {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setIsLoggedIn(false);
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginError(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          {/* Section: Design Block */}
          <section className="background-radial-gradient overflow-hidden">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
              }}
            />
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
              <div className="row gx-lg-5 align-items-center mb-5">
                <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                  <h1
                    className="my-5 display-5 fw-bold ls-tight"
                    style={{ color: "hsl(218, 81%, 95%)" }}
                  >
                    The best offer <br />
                    <span style={{ color: "hsl(218, 81%, 75%)" }}>
                      for your business
                    </span>
                  </h1>
                  <p
                    className="mb-4 opacity-70"
                    style={{ color: "hsl(218, 81%, 85%)" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus, expedita iusto veniam atque, magni tempora
                    mollitia dolorum consequatur nulla, neque debitis eos
                    reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                  </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                  <div
                    id="radius-shape-1"
                    className="position-absolute rounded-circle shadow-5-strong"
                  />
                  <div
                    id="radius-shape-2"
                    className="position-absolute shadow-5-strong"
                  />
                  <div className="card bg-glass">
                    <div className="card-body px-4 py-5 px-md-5">
                      <form onSubmit={handleLogin}>
                        {/* 2 column grid layout with text inputs for the first and last names */}

                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>
                        {/* Checkbox */}

                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                        {/* Register buttons */}
                        <div className="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-github" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </>
      ) : (
        <div className="">
          <Main_nav />
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Side_nav />
            </div>
            <div id="layoutSidenav_content">
              <main>
                <div className="container-fluid px-4">
                  <h1 className="mt-4">Dashboard Of RST Hospital</h1>
                  <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Wellcome Admin</li>
                  </ol>
                  <Card_blood />
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
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
