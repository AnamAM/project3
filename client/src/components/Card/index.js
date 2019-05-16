import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img className="activator" alt={props.name} src={props.image}></img>  
              <div className="card-body">
                <p className="card-title" style={{ textAlign: "center", color: "white" }}>{props.name}</p>
                <br></br>
              </div>
              <div className="card-content" style={{ textAlign: "center" }}>
              <br></br>
                <p style={{ textAlign: "center", color: "white" }}>{`$${props.price}`}</p>
                <p style={{ textAlign: "center" }}>{props.description}</p>
                <br></br>
                <a className="waves-effect waves-light btn-small" style={{ textAlign: "center" }}>ADD TO CART</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;