import React, { Component } from "react";
import Card from "../../Card";
import { Container, Col, Row } from "../../Grid";
import productsAPI from "../../../utils/productsAPI";
import "./style.css";
// import products from "../../products.json"
// import image1 from "../../images/product1.png"
// import image2 from "../../images/product2.png"
// import image3 from "../../images/product3.png"


class Shop extends Component {
  state = {
    products: [],
    name: "",
    price: "",
    quantity: "",
    description: ""
  };


  componentDidMount() {
    this.loadProducts();
    // M.FormSelect.init(document.querySelectorAll('select'));
    productsAPI.getProducts()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(error => console.log(error));
  }

  loadProducts = () => {
    productsAPI.getProducts()
      .then(res =>
        this.setState({ products: res.data, name: "", price: "", quantity: "", description: "" })
      )
      .catch(err => console.log(err));
    // console.log(this.state.products);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(event.target.name);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price) {
      productsAPI.saveProduct({
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        quantity: this.state.quantity
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <h1 style={{ textAlign: "center", color: "white" }}>Shop Our Products</h1>
          <Row>
            {this.state.products.map((product, i) => {
              console.log(product)
              return (
                <Col key={product._id} size='md-4'>
              <Card className="content" name={product.name}
                image={product.image}
                description = {product.description}
                price = {product.price} >
                </Card>
              </Col>
            )})}
              {/* <Card
              />
            </Col>
            <Col size="md-4">
              <Card
                // name={products[1].name}
                // image={image2}
                // price={products[1].price}
                // description={products[1].description}
              />
            </Col>
            <Col size="md-4">
              <Card
                // name={products[2].name}
                // image={image3}
                // price={products[2].price}
                // description={products[2].description}
              /> */}
          </Row>
        </Container>
      </div>
    );

  }
}

export default Shop;