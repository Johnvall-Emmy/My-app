import React from "react";
import "./Header.css";
import logoImg from "../../assets/logo.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { SiLegacygames } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const Aboutus = () => {
    navigate("/about");
  };
  return (
    <div>
      <nav className="navbar-section-div">
        <div>
          <img src={logoImg} alt="logo" />
          <TiSocialLinkedin className="linkedin" />
        </div>
        <ul className="navbar-link-display">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <MdAccountCircle
              style={{ color: "yellowgreen", fontSize: "55px" }}
            />
            <SiLegacygames style={{ color: "yellow", fontSize: "55px" }} />
            <p>
              {" "}
              <a href="/Login">Login</a>
            </p>
            <IoMdMenu />
            <p>
              {" "}
              <a href="/Register">
                <FaRegRegistered />
              </a>
            </p>
            <p onClick={Aboutus}> About Us</p>
            <button>202-555-0188</button>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Header;
