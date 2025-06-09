import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Herosection from "../../components/Hero/Hero";
import Rough from "../../components/Rough/Rough";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <Herosection />  */}
      <Rough />
      <Header />
      <Footer />
    </div>
  );
};

export default Homepage;
