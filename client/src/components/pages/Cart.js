import React from "react";
import { Container, Col, Row } from "../Grid";

function Cart() {
  return (
    <div>
      <h1 style={{textAlign: "center", color: "white"}}>Shopping Cart</h1>
    <Container>
      <Row>
      <Col size="md-12">
      <a style={{ color: "teal" }} href="./Shop">← Continue Shopping</a>
      </Col>
      </Row>
      <Row>
        <Col size="md-3">
        My Cart
        </Col>
        <Col size="md-3">
          Price
        </Col>
        <Col size="md-3">
          Quantity
        </Col>
        <Col size="md-3">
          Total
        </Col>
      </Row>
      <hr style={{ backgroundColor: "white" }}></hr>
    </Container>
    </div>
  );
}

export default Cart;