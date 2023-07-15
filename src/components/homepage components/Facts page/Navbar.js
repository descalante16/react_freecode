import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
          <div className="d-flex justify-content-start">
          <Link className="" to="/">
            <img src="/logo512.png" width={45} alt="Logo" className='ms-3 m-1' />
            </Link>
            <h3 className="fs-3 text-info mb-0 ms-2 m-2">ReactFacts</h3>
          </div>
          <h4 className="ms-auto text-white fs-5 m-3 me-4 ">React Course - Project 1</h4>
        </nav>
      </div>
    );
};

export default Navbar;