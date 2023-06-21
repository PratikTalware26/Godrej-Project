import React from "react";
import "./Navbar.css";
import mainLogo from "../assets/logo_godrej_properties.png"

const Navbar = () => {
  return (
    <div className="nav-cont">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="mainLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#location">
                Location
              </a>
              <a className="nav-link" href="#price">
                Best Price
              </a>
              <a className="nav-link" href="#amenities">
                Amenities
              </a>
              <a className="nav-link" href="#floorplans">
                Floor Plans
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
