import React from "react";
import "./style.css";
import { Row } from "../Grid";

function Card(props) {
  return (
    <div>
      {/* <div className="row">
        <div className="col">
          <div className="card flip-card">
            <div className="card-image flip-card-inner">
              <img className="activator" alt={props.name} src={props.image}></img>  
              <div className="card-body flip-card-front">
                <p className="card-title" style={{ textAlign: "center", color: "white", marginBottom: "85px"}}>{props.name}</p>
              <div className="card-content flip-card-back">
                <p className="card-price" style={{ textAlign: "center", color: "white", marginBottom: "10px", marginTop: "7px"}}>{`$${props.price}`}</p>
                <p style={{ textAlign: "center" }}>{props.description}</p>
                <a className="waves-effect waves-light btn-small" style={{ textAlign: "center", marginTop: "2px"}}>ADD TO CART</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Row>
      <div id="f1_container">
        <div id="f1_card" class="shadow">
          <div className="front face">
            <img className="activator" alt={props.name} src={props.image} />
          </div>
          <div class="back face center">
            <p>{props.description}</p>
          </div>
        </div>
        <br></br>
            <p style={{ textAlign: "center", fontSize: "18pt"}}>{`$${props.price}`}</p>
            
            <button className="waves-effect waves-light btn-small button" style={{ marginTop: "2px", marginLeft: "90px"}}>ADD TO CART</button>
      </div>
      </Row>



    </div>
  )
}

export default Card;