import React, { useState } from "react";
import Navbar from "./Navbar";

const BB_Registerson = () => {
  const [bankname, setBankName] = useState("");
  const [registrantNumber, setRegistrantNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Here you can send the form data to your backend for processing
    console.log({
      bankname,
      registrantNumber,
      email,
      password,
      phoneNumber,
      address,
    });

    // Reset the form after submission
    setBankName("");
    setRegistrantNumber("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setAddress("");
  }
  return (
    <>
      <Navbar />
      {/* <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="row jumbotron box8 ">
            <div className="col-sm-12 mx-t3 mb-4">
              <h2 className="text-center text-info">Register</h2>
            </div>
            <div className=" row mx-auto ">
            <div className="col-sm-6  ">
            <div className="col-sm-10 ">
              <label htmlFor="name-f">Blood Bank Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your blood bank name."
                required=""
                value={bankname} onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            <div className="col-sm-10 ">
              <label htmlFor="name-l">Registreson No. *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Registreson no"
                required=""
                value={registrantNumber} onChange={(e) => setRegistrantNumber(e.target.value)}
              />
            </div>

            <div className="col-sm-10 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email."
                required=""
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-sm-10 ">
              <label htmlFor="State">City</label>
              <input
                type="address"
                className="form-control"
                id="State"
                placeholder="Enter your City name."
                required=""
                value={city} onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-sm-10 ">
              <label htmlFor="State">State</label>
              <input
                type="address"
                className="form-control"
                placeholder="Enter your state name."
                required=""
                value={state} onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="col-sm-5 ">
              <label htmlFor="zip">Postal-Code</label>
              <input
                type="zip"
                className="form-control"
                id="zip"
                placeholder="Postal-Code."
                required=""
                value={postcode} onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            </div>
            <div className="col-sm-6 ">
            <div className="col-sm-10 ">
              <label htmlFor="State">Address</label>
              <input
                type="address"
                className="form-control"
                id="State"
                placeholder="Enter your Address."
                required=""
                value={address} onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="col-sm-10 ">
              <label htmlFor="tel">Phone</label>
              <input
                type="phone"
                className="form-control"
                id="tel"
                placeholder="Enter Your Phone Number."
                required=""
                value={phoneNumber} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-sm-10 ">
              <label htmlFor="tel">Telephone</label>
              <input
                type="phone"
                className="form-control"
                id="tel"
                placeholder="Enter Your Telephone Number."
                required=""
                value={telephone} onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="col-sm-10 ">
              <label htmlFor="pass">Password</label>
              <input
                type="Password"
                className="form-control"
                id="pass"
                placeholder="Enter your password."
                required=""
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-sm-10 ">
              <label htmlFor="pass2">Confirm Password</label>
              <input
                type="Password"
                name="cnf-password"
                className="form-control"
                id="pass2"
                placeholder="Re-enter your password."
                required=""
                value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            </div>
            </div>
            <div className="col-sm-12  mb-0">
              <button className="btn btn-primary float-right">Submit</button>
            </div>
          </div>
        </form>
      </div> */}
      <section className="h-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 modal-body px-5 py-3 pt-0">
                  <div className="modal-header border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-3">
                      Welcome to Raktamoksha Blood Bank Registration Form!
                    </h1>
                  </div>
                  <form className="row g-2" onSubmit={handleSubmit}>
                    <div className="col-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Blood Bank Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="ex. Nreurat Blood Bank"
                        value={bankname}
                        onChange={(e) => setBankName(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Registreson No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="ex. TRY6646HFJF8"
                        value={registrantNumber}
                        onChange={(e) => setRegistrantNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="ex. exampal@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Rajkot"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Gujrat"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="360 005"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                      />
                    </div>

                    <div className="col-md-1 mt-5">
                      <button type="submit" className="btn btn-primary ">
                        Sign in
                      </button>
                    </div>
                    <div className="col-1 mt-5 mx-3">
                      <button type="submit" className="btn btn-danger">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BB_Registerson;
