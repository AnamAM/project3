import React, { Component } from "react";
export default class CartItem extends Component {
  render() {
    const { id, name, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center text-light">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="products"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product:</span> {name}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price:</span> ${price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div>
              <button
                className="btn-small"
                style={{ marginRight: "3px" }}
                onClick={() => {
                  return decrement(id);
                }}
              >
                -
              </button>
              <button
                style={{ marginRight: "3px" }}
                className="btn-small">{count}</button>
              <button
                className="btn-small"
                onClick={() => {
                  return increment(id);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className=" cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total: ${total} </strong>
        </div>
      </div>
    );
  }
}