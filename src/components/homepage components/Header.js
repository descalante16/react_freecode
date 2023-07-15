import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="/logo512.png" width={45} alt="Logo" className='ms-3'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item fs-5">
                <Link to="/facts" className="nav-link">
                  Facts
                </Link>
              </li>
              <li className="nav-item fs-5">
              <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item fs-5">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
