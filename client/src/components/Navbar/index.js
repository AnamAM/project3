import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark black">
      <div>
      {/* <Link className="navbar-brand" to="/">
        OAS
      </Link> */}
        <ul className="navbar-nav" id="nav-mobile" >
        {/* this className could go in this ul tag above... className="right hide-on-med-and-down" */}
        <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link light"}
              >
              OAS
            </Link>
          </li>
        <li className="nav-item">
            <Link
              to="/booking"
              className={window.location.pathname === "/booking" ? "nav-link active" : "nav-link"}
            >
              Book Services
            </Link>
          </li>
          <li className="nav-item right-side">
            <Link
              to="/"
              className={ 
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shop"
              className={window.location.pathname === "/shop" ? "nav-link active" : "nav-link"}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
            
    )
}

export default Navbar;