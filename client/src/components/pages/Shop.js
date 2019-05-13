import React from "react";
import Card from "../Card";
import { Container, Col, Row } from "../Grid";
import products from "../../products.json"
import image1 from "../../images/product1.png"
import image2 from "../../images/product2.png"
import image3 from "../../images/product3.png"
import image4 from "../../images/product4.png"


function Shop() {
  return (
    <div>
    <Container fluid>
      <h1 style={{ textAlign: "center", color: "white"}}>Shop Our Products</h1>
    <Row>
      <Col size="md-3">
      <Card 
        name={products[0].name}
        image={image1}
        description={products[0].description}
      />
      </Col>
      <Col size="md-3">
      <Card 
        name={products[1].name}
        image={image2}
        description={products[1].description}
      />
      </Col>
      <Col size="md-3">
      <Card 
        name={products[2].name}
        image={image3}
        description={products[2].description}
      />
      </Col>
      <Col size="md-3">
      <Card 
        name={products[3].name}
        image={image4}
        description={products[3].description}
      />
      </Col>
    </Row>
      </Container>
      </div>
  );
}
export default Shop;