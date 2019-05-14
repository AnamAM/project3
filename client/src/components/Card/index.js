import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div className="card" {...props}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt={props.name} src={props.image}></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right"></i></span>
          {/* <p><a href="#">This is a link</a></p> */}
        </div>
        <div className="card-reveal" style={{ opacity: "0.5"}}>
          <span className="card-title grey-text text-darken-4" style={{ fontSize: "16pt" }}>Product Description:<i className="material-icons right">close</i></span>
          <p>{props.description}</p>
        </div>
      </div>
      <label for="spinner">Quantity:</label><input id="spinner" type="number" min="1" max="5"/>
      {props.children}
    </div>
  )
}

export default Card;
