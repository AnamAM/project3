import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            description,
            price,
            name,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                {/* <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{name}</h1>
                </div> */}
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="products" />
                </div>
                {/* product description */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-light">
                  <h1 style={{ fontFamily: "Oswald", letterSpacing: ".2em" }}>{name}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Created by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-white" style={{ fontFamily: "Oswald", letterSpacing: ".2em"}}>
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p style={{ fontFamily: "Roboto Condensed", letterSpacing: ".1em", fontSize: "22pt" }}className=" mt-4 mb-1 text-muted">
                    Description: 
                  </p>
                  <p className="text-muted" style={{ fontFamily: "News Cycle", letterSpacing: ".1em" }}>{description}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/shop">
                      <button className="waves-effect waves-light btn-small">BACK TO PRODUCTS</button>
                    </Link>
                    <button className="waves-effect waves-light btn-small" style={{ marginLeft: "20px"}}
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "IN CART" : "ADD TO CART"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}