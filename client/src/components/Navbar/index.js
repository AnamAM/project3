import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark black">
      <div>
        <ul className="navbar-nav" id="nav-mobile" >
          <li className="nav-item nav">
            <Link
              to="/admin"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
            >
              OAS
            </Link>
          </li>
        <li className="nav-item nav">
            <Link
          
              to="/staff"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/staff" ? "nav-link active" : "nav-link"}
            >
              STAFF
            </Link>
          </li>
          <li className="nav-item nav right-side">
            <Link
          
              to="/"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item nav">
            <Link
          
              to="/booking"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/booking" ? "nav-link active" : "nav-link"}
            >
              BOOK SERVICES
            </Link>
          </li>
          <li className="nav-item nav">
            <Link
          
              to="/shop"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/shop" ? "nav-link active" : "nav-link"}
            >
              SHOP
            </Link>
          </li>
          {/* <li className="nav-item nav">
            <Link
          
              to="/contact"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              CONTACT
            </Link>
          </li> */}
          <li className="nav-item nav">
            <Link
          
              to="/cart"
              style={{ fontSize: "18px"}}
              className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
            >
              CART
            </Link>
          </li>
         {/* <i className="material-icons cart">shopping_cart</i> */}
        </ul>
      </div>
    </nav>
            
    )
}

export default Navbar;