import React from "react";
const NavbarComponent = () => {
  return (
    <nav className="navbar  navbar-expand-lg  cs-navbar" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fas fa-exchange-alt"></i> MyCurrencySwitcher
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
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
