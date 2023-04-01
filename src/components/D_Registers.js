import React from 'react'
import Navbar from './Navbar'

const D_Registers = () => {
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
                      Welcome to Raktamoksha Donar Registration Form

                    </h1>
                  </div>
                  <form className="row g-2">
                    <div className="col-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Donar Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="ex. jone dero"
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
                        placeholder="ex. abcd@gamil.com"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Phone No.
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="ex. +91 77665 77665"
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
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="inputAddress2" className="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
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
                        placeholder="Rajkot"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Gujrat"
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
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Blood Group
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="360 005"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Gender
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Othor">Othor</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputZip"
                        placeholder="360 005"
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Weight
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputZip"
                        placeholder="57Kg"
                      />
                    </div>

                    <div className="col-1 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                    <div className="col-1 m-3">
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
  )
}

export default D_Registers
