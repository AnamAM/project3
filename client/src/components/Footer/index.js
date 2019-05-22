import React from "react";


function Footer() {
  return (
    <div>
      <footer className="page-footer" style={{ backgroundColor: "teal" }}>
        <div className="container">
          <div className="row">
            <div className="col l12 s12" style={{ textAlign: "center" }}>
              <h5 className="white-text text-uppercase">Follow Us</h5>
              <div className="grey-text text-lighten-4">
                <a href="https://www.facebook.com/OPTIMUMAUTOSTYLING/"><i style={{ fontSize: "36pt", color: "white" }} className="fab fa-facebook-square"></i></a>{" "}
                <a href="https://www.instagram.com/optimumautostyling/"><i style={{ fontSize: "36pt", color: "white", marginLeft: "40px", marginRight: "40px" }} className="fab fa-instagram"></i></a>{" "}
                <a href="https://www.instagram.com/optimumautostyling/"><i style={{ fontSize: "36pt", color: "white" }} className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-copyright" style={{ textAlign: "center" }}>
            <div className="container">
           Copyright © 2019 Anu&Ashu
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
