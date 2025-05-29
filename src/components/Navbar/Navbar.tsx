import React from "react";
import "./Navbar.css";
import Rough from "../Rough/Rough";

const Navbar = () => {
  const title = "Nigeria is my country";
  console.log(title);
  return (
    <div>
      
      <h1 className="fh">{title}</h1>
      <p
        style={{
          color: "green",
          backgroundColor: "purple",
          fontSize: "32px",
          height: "20vh",
        }}
      >
        Welcome
      </p>
      <h2 className="sam">Samsung</h2>
    </div>
  );
};

export default Navbar;
