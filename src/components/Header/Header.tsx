import React from "react";
import "./Header.css";
import logoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar-section-div">
        <div>
          <img src={logoImg} alt="logo" />
        </div>
        <ul className="navbar-link-display">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button>202-555-0188</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
