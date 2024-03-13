import React from 'react';
import "../styles/Navbar.css";


function Navbar() {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom">
      <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="FrancisWilkinson.pdf">
                Resume 
              </a>
            </li>
            <li className="nav-item social d-flex justify-content-center">
            <a className="mx-2 nav-link" href="https://www.linkedin.com/in/francis-wilkinson/"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item nav-link social d-flex justify-content-center">
            <a className="mx-2" href="https://github.com/franciswilkinson"><i className="fab fa-github"></i></a>
            </li>
          </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
