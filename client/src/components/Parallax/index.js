import React from "react";
import "./style.css";
import hwy from "../../images/hwy.png";
import lineup from "../../images/lineup.png";


function Parallax() {
    return (
        <div>

<div className="parallax-container"></div>
    <div className="parallax">
    <img src={lineup} alt="lineup" />
    </div>

  <div className="section white">
    <div className="row container">
      <h2 className="header">Parallax</h2>
      <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <div className="parallax-container"></div>
    <div className="parallax">
    <img src={hwy} alt="hwy" />
    </div>
        </div>
    );
}
      export default Parallax;