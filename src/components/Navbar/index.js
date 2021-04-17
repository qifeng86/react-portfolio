import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <li className="text-sm-center">
        <NavLink
          exact
          to="/"
          className="nav-link"
        >
          About
          </NavLink>
      </li>
      <li className="text-sm-center">
        <NavLink
          to="/portfolio"
          className="nav-link"
        >
          Portfolio
          </NavLink>
      </li>
      <a
        className="nav-link"
        href={require("../assets/images/qi-feng-resume.pdf")}
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/resume-cv.PNG")}
          alt=""
          height="25"
          width="25"
        />
      </a>
      <a
        className="nav-link"
        href="https://github.com/qifeng86"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/GitHub-icon.png")}
          alt=""
          height="25"
          width="25"
        />
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/qifeng2021"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/linkedin.png")}
          alt=""
          height="25"
          width="25"
        />
      </a>
    </nav >
  );
}

export default Navbar;
