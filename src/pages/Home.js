import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery_2 from "../components/Gallery_2";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import FIndBlood from "../components/FIndBlood";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Top />
      <FIndBlood />
      <Hero />
      <Gallery />
      <Gallery_2 />
      <Footer />
    </>
  );
};

export default Home;
