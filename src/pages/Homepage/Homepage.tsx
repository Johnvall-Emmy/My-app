import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Herosection from "../../components/Hero/Hero";
import Rough from "../../components/Rough/Rough";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main section/Main";
import Events from "../../components/Rough/Events";
import FetchAllData from "../../components/Footer/FetchData/FetchAllData";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Herosection />  */}
      {/* <Rough /> */}
      {/* <Header />
      <Footer />  */}
      <Events />
      <Main />
      <FetchAllData />
    </div>
  );
};

export default Homepage;
