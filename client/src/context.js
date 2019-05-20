import React, { Component } from "react";
import { storeProducts, detailProduct } from "../src/data";
// import productsAPI from "../src/utils/productsAPI";

const ProductContext = React.createContext();
// Provider 
// Consumer 
// The purpose of this class based component is that you'll be able to return a provider and consumser context

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    subTotal: 0,
    shiphandle: 0,
    total: 0
  };

  // componentDidMount() {
  //   this.loadProducts();
  // }
  

  // loadProducts = () => {
  //   productsAPI.getProducts()
  //   .then(res => {
  //     this.setState({ products: res.data, },()=>{
  //       console.log(products)
  //     })
  //   }
  //   )
  //     .catch(err => console.log(err));
  //     console.log(this.state.services);
  // }

  componentDidMount() {
    // getting the copies of these values, not referencing them -- going to need new fresh, set of values because you would want the original values, not the modified since you are passing the objects as a reference -- so the moment you change the value in the object in one place, you are also changing the value in the object that was assigned to it
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    // looping through the store products and each item will be an object 
    storeProducts.forEach(item => {
      // assigning values from that object to copy the values 
      const singleItem = { ...item };
      // grabbing old values from the products, so as we're looping through, there will be more products in the array and you'd want to add the singleItem from above
      products = [...products, singleItem];
    })
    this.setState(() => {
      return { products: products }
    })
  }

  getItem = (id) => {
    // item id must pass the id that is being passed in, and if it matches, then the item will be returned
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) => {
    // passing it in from product.js whenever you click on the image
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    })
  }

  addToCart = (id) => {
    // console.log(`hello from add to cart -- id is:" ${id}`);
    let previousProducts = [...this.state.products];
    const index = previousProducts.indexOf(this.getItem(id));
    const product = previousProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      // adding current items to the same cart as well as adding product where you are running addtocard
      // setting up incart button in shop page and detail page so that you can control the values that are in the cart only
      return { products: previousProducts, cart: [...this.state.cart, product] };
    }, () => {
      console.log(this.state);
    }
    )
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  increment = id => {
    // console.log("increment method works");

    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };

  decrement = id => {
    // console.log("decrement method works")
    
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };

    getTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempShipHandle = 4;
      const shiphandle = parseFloat(tempShipHandle.toFixed(2));
      const total = subTotal + shiphandle;
      return {
        subTotal,
        shiphandle,
        total
      };
    };
        addTotals = () => {
          const totals = this.getTotals();
          this.setState(
            () => {
              return {
                subTotal: totals.subTotal,
                shiphandle: totals.shiphandle,
                total: totals.total
              };
            },
            () => {
              // console.log(this.state);
            }
          );
        };
        
      

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };


  render() {
    console.log(this.state.products);
    console.log(this.state.detailProduct);
    return (
      <ProductContext.Provider
        // getting all the properties with the value that are in state directly
        // value can be an object and can whatever properties and methods we'd want on this object and access them in shop.js
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
        >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };