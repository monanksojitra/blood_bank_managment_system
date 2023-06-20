import React from "react";
import "../css/tabel.css";
import "../css/main.css";
import { List } from "reactstrap";
import List_json from "../../../blood_list.json";

const List_of_bb = () => {
  return (
    // <div className="card-body">
    //   <table id="datatablesSimple" className="table">
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>E_Id</th>
    //         <th>City</th>
    //         <th>Age</th>
    //         <th>Blood Group</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
    <div className="container p-2">
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <div className="position-relative">
          <span className="position-absolute search">
            <i className="fa fa-search" />
          </span>
          <input
            className="form-control w-100"
            placeholder="Search by order#, name..."
          />
        </div>
        <div className="px-2">
          <span>
            Filters <i className="fa fa-angle-down" />
          </span>
          <i className="fa fa-ellipsis-h ms-3" />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-responsive table-borderless">
          <thead>
            <tr className="bg-light">
              <th scope="col" >
                Name
              </th>
              <th scope="col">
                IDE
              </th>
              <th scope="col">
                City
              </th>
              <th scope="col">
                Quantity
              </th>
              <th scope="col" width=" %">
                Date
              </th>
              <th scope="col" className="text-end">
                <span>Blood Group</span>
              </th>
              <th scope="col">
                Status
              </th>
              <th scope="col">
                Age
              </th>
              <th scope="col">
                Occupation
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(List_json).map((key, i) => (
              <tr key={i} className="mb-2">
                <td>
                  <img
                    src={"https://i.pravatar.cc/150?img=" + key}
                    width={25}
                    className="rounded-circle"
                  />{" "}
                  {List_json[key].name}
                </td>
                <td>{List_json[key].phone}</td>
                <td> {List_json[key].city}</td>
                <td className="text-center ">
                  <span className="fw-bolder"> {List_json[key].quantity}</span>{" "}
                  <i className="fa-solid fa-droplet fa-sm ms-1" />
                </td>
                <td className="text-center ">{List_json[key].donationDate}</td>
                <td className="text-center ">{List_json[key].bloodGroup}</td>
                <td className="text-center ">
                  <i className="fa fa-check-circle-o green" />
                  <span className="ms-1">{List_json[key].donationStatus}</span>
                </td>
                <td className="text-center ">{List_json[key].age}</td>
                <td className="text-center ">{List_json[key].occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List_of_bb;
