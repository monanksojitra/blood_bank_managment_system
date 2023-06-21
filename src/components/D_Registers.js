import React from "react";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <section className="h-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
                  <div className="modal-header border-bottom-0">
                    <h1 className="fw-bold m-4 fs-3">
                      Welcome to Raktamoksha Registration Forms
                    </h1>
                  </div>
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 modal-body px-5 py-3 pt-0">
                  <ul className="nav nav-tabs mt-3" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="donor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#donor"
                        type="button"
                        role="tab"
                        aria-controls="donor"
                        aria-selected="true"
                      >
                        Blood Donor Registration
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="request-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#request"
                        type="button"
                        role="tab"
                        aria-controls="request"
                        aria-selected="false"
                      >
                        Blood Request Registration
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="bank-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#bank"
                        type="button"
                        role="tab"
                        aria-controls="bank"
                        aria-selected="false"
                      >
                        Blood Bank Registration
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-4">
                    <div
                      className="tab-pane fade show active"
                      id="donor"
                      role="tabpanel"
                      aria-labelledby="donor-tab"
                    >
                      <form className="row g-2">
                        <div className="col-6">
                          <label htmlFor="bankName" className="form-label">
                            Blood Bank Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="bankName"
                            placeholder="ex. XYZ Blood Bank"
                          />
                        </div>
                        {/* Other fields for blood bank registration */}
                        <div className="col-6">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="ex. John Doe"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="ex. example@example.com"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="phone" className="form-label">
                            Phone No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="ex. +91 77665 77665"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="ex. 1234 Main St"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="ex. Rajkot"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="ex. Gujarat"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="ex. 360005"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="licenseNumber" className="form-label">
                            License Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="licenseNumber"
                            placeholder="ex. ABC123"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="bloodBankType" className="form-label">
                            Blood Bank Type
                          </label>
                          <select className="form-select" id="bloodBankType">
                            <option value="">Select Type</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="establishedYear"
                            className="form-label"
                          >
                            Established Year
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="establishedYear"
                            placeholder="ex. 2005"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonName"
                            className="form-label"
                          >
                            Contact Person Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactPersonName"
                            placeholder="ex. Jane Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonPhone"
                            className="form-label"
                          >
                            Contact Person Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contactPersonPhone"
                            placeholder="ex. +91 77665 77665"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonEmail"
                            className="form-label"
                          >
                            Contact Person Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="contactPersonEmail"
                            placeholder="ex. jane@example.com"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="servicesOffered"
                            className="form-label"
                          >
                            Services Offered
                          </label>
                          <select
                            className="form-select"
                            id="servicesOffered"
                            multiple
                            size="3"
                          >
                            <option value="Service 1">Service 1</option>
                            <option value="Service 2">Service 2</option>
                            <option value="Service 3">Service 3</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="workingHours" className="form-label">
                            Working Hours
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="workingHours"
                            placeholder="ex. 9 AM - 5 PM"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="additionalInformation"
                            className="form-label"
                          >
                            Additional Information
                          </label>
                          <textarea
                            className="form-control"
                            id="additionalInformation"
                            rows="3"
                            placeholder="Enter additional information..."
                          ></textarea>
                        </div>
                        <div className="col-12 mt-5">
                          <button type="submit" className="btn btn-primary">
                            Sign Up
                          </button>
                          <button type="reset" className="btn btn-danger ms-3">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="request"
                      role="tabpanel"
                      aria-labelledby="request-tab"
                    >
                      <form className="row g-2">
                        <div className="col-6">
                          <label htmlFor="requesterName" className="form-label">
                            Requester Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requesterName"
                            placeholder="ex. Jane Smith"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            htmlFor="requesterEmail"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="requesterEmail"
                            placeholder="ex. example@example.com"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            htmlFor="requesterPhone"
                            className="form-label"
                          >
                            Phone No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="requesterPhone"
                            placeholder="ex. +91 77665 77665"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            htmlFor="requesterAddress"
                            className="form-label"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requesterAddress"
                            placeholder="ex. 1234 Main St"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="requesterCity" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requesterCity"
                            placeholder="ex. Rajkot"
                          />
                        </div>
                        <div className="col-md-4">
                          <label
                            htmlFor="requesterState"
                            className="form-label"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requesterState"
                            placeholder="ex. Gujarat"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="requesterZip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requesterZip"
                            placeholder="ex. 360005"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requesterBloodGroup"
                            className="form-label"
                          >
                            Blood Group
                          </label>
                          <select
                            className="form-select"
                            id="requesterBloodGroup"
                            aria-label="Select Blood Group"
                          >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requesterGender"
                            className="form-label"
                          >
                            Gender
                          </label>
                          <select
                            className="form-select"
                            id="requesterGender"
                            aria-label="Select Gender"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requesterDateOfBirth"
                            className="form-label"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="requesterDateOfBirth"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requesterWeight"
                            className="form-label"
                          >
                            Weight
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="requesterWeight"
                            placeholder="ex. 60"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requesterLastDonation"
                            className="form-label"
                          >
                            Last Blood Donation Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="requesterLastDonation"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="requestDescription"
                            className="form-label"
                          >
                            Request Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requestDescription"
                            placeholder="ex. Urgently need blood for surgery"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="hospitalName" className="form-label">
                            Hospital/Clinic Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="hospitalName"
                            placeholder="ex. City Hospital"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="hospitalAddress"
                            className="form-label"
                          >
                            Hospital/Clinic Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="hospitalAddress"
                            placeholder="ex. 5678 Hospital Rd"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactPerson" className="form-label">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactPerson"
                            placeholder="ex. John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonPhone"
                            className="form-label"
                          >
                            Contact Person's Phone No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contactPersonPhone"
                            placeholder="ex. +91 98765 43210"
                          />
                        </div>
                        <div className="col-1 mt-3">
                          <button type="submit" className="btn btn-primary">
                            Sign Up
                          </button>
                        </div>
                        <div className="col-1 m-3">
                          <button type="reset" className="btn btn-danger">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="bank"
                      role="tabpanel"
                      aria-labelledby="bank-tab"
                    >
                      <form className="row g-2">
                        <div className="col-6">
                          <label htmlFor="bankName" className="form-label">
                            Blood Bank Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="bankName"
                            placeholder="ex. XYZ Blood Bank"
                          />
                        </div>
                        {/* Other fields for blood bank registration */}
                        <div className="col-6">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="ex. John Doe"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="ex. example@example.com"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="phone" className="form-label">
                            Phone No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="ex. +91 77665 77665"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="ex. 1234 Main St"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="ex. Rajkot"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="ex. Gujarat"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="ex. 360005"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="licenseNumber" className="form-label">
                            License Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="licenseNumber"
                            placeholder="ex. ABC123"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="bloodBankType" className="form-label">
                            Blood Bank Type
                          </label>
                          <select className="form-select" id="bloodBankType">
                            <option value="">Select Type</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="establishedYear"
                            className="form-label"
                          >
                            Established Year
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="establishedYear"
                            placeholder="ex. 2005"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonName"
                            className="form-label"
                          >
                            Contact Person Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactPersonName"
                            placeholder="ex. Jane Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonPhone"
                            className="form-label"
                          >
                            Contact Person Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contactPersonPhone"
                            placeholder="ex. +91 77665 77665"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="contactPersonEmail"
                            className="form-label"
                          >
                            Contact Person Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="contactPersonEmail"
                            placeholder="ex. jane@example.com"
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="servicesOffered"
                            className="form-label"
                          >
                            Services Offered
                          </label>
                          <select
                            className="form-select"
                            id="servicesOffered"
                            multiple
                            size="3"
                          >
                            <option value="Service 1">Service 1</option>
                            <option value="Service 2">Service 2</option>
                            <option value="Service 3">Service 3</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="workingHours" className="form-label">
                            Working Hours
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="workingHours"
                            placeholder="ex. 9 AM - 5 PM"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="additionalInformation"
                            className="form-label"
                          >
                            Additional Information
                          </label>
                          <textarea
                            className="form-control"
                            id="additionalInformation"
                            rows="3"
                            placeholder="Enter additional information..."
                          ></textarea>
                        </div>
                        <div className="col-12 mt-5">
                          <button type="submit" className="btn btn-primary">
                            Sign Up
                          </button>
                          <button type="reset" className="btn btn-danger ms-3">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="login"
                      role="tabpanel"
                      aria-labelledby="login-tab"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
