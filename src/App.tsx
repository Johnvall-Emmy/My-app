import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Rough from "./components/Rough/Rough";

function App() {
  return (
    <>
      <div>
        {/* <Navbar />
        <Herosection /> */}
        <Rough />
        <Header />
      </div>
    </>
  );
}

export default App;
