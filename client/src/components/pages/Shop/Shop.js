import React, { Component } from "react";
import Product from "../Product";
import Title from "../../Title";
import { ProductConsumer } from "../../../context";

export default class Shop extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="SHOP" title="OUR PRODUCTS" style={{ color: "white" }} />
            <div className="row">
              <ProductConsumer>
                {/* callback function to return the value thats in value prop in context */}
                {value => {
                  // this is the object that was passed down from the provider and accessing it in the consumer
                  // console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}