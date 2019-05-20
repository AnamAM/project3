import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CartTotals extends Component {
  render() {
    const {
      subTotal,
      shiphandle,
      total,
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container text-light">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-light"> subtotal :</span>{" "}
                  <strong>$ {subTotal} </strong>
                </h5>
                <h5>
                  <span className="text-light"> shipping/handling fees :</span>{" "}
                  <strong>$ {shiphandle} </strong>
                </h5>
                <h5>
                  <span className="text-light"> total :</span>{" "}
                  <strong>$ {total} </strong>
                </h5>
                <br></br>
                <button className="waves-effect waves-light btn-small">Checkout{' '}<i class="fas fa-credit-card"></i></button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}