import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Bloodbanks from "./components/Bloodbanks";
import Donateblood from "./components/Donateblood";
import Login from "./components/Login";
import Register from "./components/Register";
import Requestblood from "./components/Requestblood";
import Home from "./pages/Home";
import BB_Registerson from "./components/BB_Registerson";
import D_Registers from "./components/D_Registers";
import ListofBlood from "./components/ListofBlood";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Donateblood" exact element={<Donateblood />} />
          <Route path="/Requestblood" exact element={<Requestblood />} />
          <Route path="/Bloodbanks" exact element={<Bloodbanks />} />
          <Route path="/donar_reg" exact element={<D_Registers/>} />
          <Route path="/requer_reg" exact element={<Register />} />
          <Route path="/Bank_reg" exact element={<BB_Registerson />} />
          <Route path="/findDonor" exact element={<ListofBlood />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
