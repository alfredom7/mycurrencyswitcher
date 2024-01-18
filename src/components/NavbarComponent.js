import React from "react";
import logo from "../assets/images/logo.png";
const NavbarComponent = () => {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg  cs-navbar"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fas fa-exchange-alt"></i> MyCurrencySwitcher
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
          <span className="navbar-text">by Alfredo Medina</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
