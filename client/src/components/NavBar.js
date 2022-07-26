import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-placeholder-image.png";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navBar">
        <img src={Logo} alt="Logo" height="150px" width="150px" />
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="navLink" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="navLink" >Profile</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/" className="navLink" >About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navLink" >Meet The Parents</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
