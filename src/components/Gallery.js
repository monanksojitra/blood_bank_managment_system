import React from "react";
import camp from "../camp.json";
const Gallery = () => {
  console.log(camp);
  return (
    <div className="album bg-body-tertiary">
      <div className="p-4 text-center bg-body-tertiary rounded-3">
        <h2 className="pb-2 border-bottom">Image Gallery</h2>
      </div>
      {/* 
      <div className="container h-75">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {camp.map((event) => {
            return (
              <div className="card shadow-sm" key={event.id}>
                <div className="col">
                  <img className="w-100  mt-3" src={event.url} height={210} />
                  <h2 className="mx-3 mt-3 fs-5 w-100">{event.titel}</h2>
                  <div className="card-body pt-0">
                    <p className="card-text">{event.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href={event.fullurl}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {camp.map((event) => {
              return (
                <div className="col" key={event.id}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={event.url}
                      className="bd-placeholder-img card-img-top h-75"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text h5">{event.titel}</p>
                      <span className=" text card-text fw-light">
                        {event.description}
                      </span>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            href={event.fullurl}
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
