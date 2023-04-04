import React from "react";
import camps from "../bloodevent.json";
const Gallery_2 = () => {
  return (
    <>
      <div className="album my-5">
        <div className=" text-center  rounded-3">
          <h2 className="pb-2 border-bottom">Blood Bank Camps </h2>
        </div>
      </div>

      <div className="container my-5">
        {camps.map((event, index) => {
          return (
            <div
              key={event.id}
              className="row mb-5 pb-0 pe-lg-0 d-flex align-items-center rounded-3 border shadow-lg "
            >
              <div className="col-lg-7 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold  text-body-emphasis">
                  {event.titel}
                </h1>
                <p className="lead mt-3 fs-6">{event.description}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <a
                    href={event.fullurl}
                    type="button"
                    className="btn btn-primary btn-sm px-2 me-md-2 fw-bold"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden rounded-4 shadow-lg">
                <img
                  className="rounded-lg-3 "
                  src={event.url}
                  alt=""
                  width={420}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery_2;
