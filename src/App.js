import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Bloodbanks from "./components/Bloodbanks";
import Donateblood from "./components/Donateblood";
import Login from "./components/Login";
import Register from "./components/Register";
import Requestblood from "./components/Requestblood";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Donateblood" exact element={<Donateblood />} />
          <Route path="/Requestblood" exact element={<Requestblood />} />
          <Route path="/Bloodbanks" exact element={<Bloodbanks />} />
          <Route path="/Register" exact element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;