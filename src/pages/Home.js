import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery_2 from "../components/Gallery_2";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import FIndBlood from "../components/FIndBlood";

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
