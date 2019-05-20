import React, { Component } from "react";
import { storeProducts, detailProduct } from "../src/data";
const ProductContext = React.createContext();
// Provider 
// Consumer 
// The purpose of this class based component is that you'll be able to return a provider and consumser context

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }
  handleDetail = () => {
    console.log("hello from detail")
  }
  addToCart = () => {
    console.log("hello from add to cart")
  }

  render() {
    return (
      <ProductContext.Provider 
      // getting all the properties with the value that are in state directly
      // value can be an object and can whatever properties and methods we'd want on this object and access them in shop.js
      value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };