import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img className="activator" alt={props.name} src={props.image}></img>  
              <div className="card-body">
                <p class="card-title" style={{ textAlign: "center" }}>{props.name}</p>
              </div>
              <div class="card-content" style={{ textAlign: "center" }}>
              <br></br>
                <p style={{ textAlign: "center" }}>{`$${props.price}`}</p>
                <br></br>
                <a class="waves-effect waves-light btn-small" style={{ textAlign: "center" }}>ADD TO CART</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;