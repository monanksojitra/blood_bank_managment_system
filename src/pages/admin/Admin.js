import React from "react";
import "./css/main.css";
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
  return (
    <div>
      <>
      <Main_nav/>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
           <Side_nav/>
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
      </>
    </div>
  );
};

export default Admin;
