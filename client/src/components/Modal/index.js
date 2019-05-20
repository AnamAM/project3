import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          }
          else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-6 text-center text-capitalize" style={{ backgroundColor: "white", paddingBottom: "15px" }}
                      id="modal"
                    >
                      <h5 className="text-black" style={{ fontFamily: "Roboto Condensed"}}>Item Added To Cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-black" style={{ fontFamily: "Roboto Condensed"}}>Price : ${price}</h5>
                      <Link to="/shop">
                        <button className="waves-effect waves-light btn-small"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          ← Continue Shopping
                        </button>
                      </Link>
                      <br></br>
                      <Link to="/cart">
                        <button className="waves-effect waves-light btn-small"
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;