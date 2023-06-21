import React from "react";
import Navbar from "./Navbar";

const BloodForm = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <>
      <Navbar />
      <section className="h-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 modal-body px-5 py-3 pt-0">
                  <div className="modal-header border-bottom-0">
                    <h1 className="fw-bold mb-0 fs-3">
                      Blood Registration Form
                    </h1>
                  </div>
                  <form className="row g-2">
                    <div className="col-6">
                      <label htmlFor="inputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="ex. John Doe"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="ex. example@example.com"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        placeholder="ex. +91 77665 77665"
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
                        placeholder="ex. 1234 Main St"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="ex. Rajkot"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputState"
                        placeholder="ex. Gujarat"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="ex. 360005"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputBloodGroup" className="form-label">
                        Blood Group
                      </label>
                      <select
                        className="form-select"
                        id="inputBloodGroup"
                        aria-label="Select Blood Group"
                      >
                        {bloodGroups.map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputGender" className="form-label">
                        Gender
                      </label>
                      <select
                        className="form-select"
                        id="inputGender"
                        aria-label="Select Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputDateOfBirth" className="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputDateOfBirth"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputWeight" className="form-label">
                        Weight
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputWeight"
                        placeholder="ex. 60"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputLastDonation" className="form-label">
                        Last Blood Donation Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputLastDonation"
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="inputDonationOption"
                        className="form-label"
                      >
                        Donation Option
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputDonationOption"
                        placeholder="ex. Hospital, Camp"
                      />
                    </div>
                    <div className="col-12 mt-5 mb-3">
                      <button type="submit" className="btn btn-danger w-25">
                        Register
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

export default BloodForm;
