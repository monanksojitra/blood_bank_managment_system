import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery_2 from "../components/Gallery_2";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Top from "../components/Top";

const Home = () => {
  return (
    <>
      <Navbar />
      <Top />
      <Hero />
      <Gallery />
      <Gallery_2 />
      <Footer />
    </>
  );
};

export default Home;
