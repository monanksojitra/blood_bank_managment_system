import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Bloodbanks from "./components/Bloodbanks";
import Login from "./components/Login";
import Requestblood from "./components/Requestblood";
import Home from "./pages/Home";
import D_Registers from "./components/D_Registers";
import ListofBlood from "./components/ListofBlood";
import About from "./pages/About";
import Admin from "./pages/admin/Admin";
import Layou_static from "./pages/admin/layout-static";
import Layout_sidenav_light from "./pages/admin/layout-sidenav-light";
import Login_admin from "./pages/admin/login";
import Password_admin from "./pages/admin/password";
import Register_admin from "./pages/admin/register";
import Error_401 from "./pages/admin/Er_401";
import Error_404 from "./pages/admin/Er_404";
import Error_500 from "./pages/admin/Er_500";
import Charts from "./pages/admin/charts";
import Table_admin from "./pages/admin/tables";
import BloodForm from "./components/Donateblood";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Blood_Bank_Live_Site" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/donate_blood" exact element={<BloodForm />} />
          <Route path="/request_blood" exact element={<Requestblood />} />
          {/* <Route path="/Bloodbanks" exact element={<Bloodbanks />} /> */}
          <Route path="/registers" exact element={<D_Registers />} />
          <Route path="/findDonor" exact element={<ListofBlood />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/layou_static" exact element={<Layou_static />} />
          <Route path="/login_admin" exact element={<Login_admin />} />
          <Route path="/password_admin" exact element={<Password_admin />} />
          <Route path="/register_admin" exact element={<Register_admin />} />
          <Route
            path="/layout_sidenav_light"
            exact
            element={<Layout_sidenav_light />}
          />
          <Route path="/errer_401" exact element={<Error_401 />} />
          <Route path="/errer_404" exact element={<Error_404 />} />
          <Route path="/errer_500" exact element={<Error_500 />} />
          <Route path="/charts" exact element={<Charts />} />
          <Route path="/table_admin" exact element={<Table_admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
