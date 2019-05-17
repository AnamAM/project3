import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Booking from "./components/pages/Booking/Booking";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";

class App extends Component {
  state = {
    cart: [1, 2, "hello"]
  }

  setCart = (item) => {
    const bannana = [...this.state.cart, item]
    // const bannana = [1, 2, "hello", item]
    this.setState({
      cart: bannana
    })
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/booking" render={() => {
            return <Booking
              cart={this.state.cart}
              setCart={this.setCart}
            />
          }} />
          <Route exact path="/cart" render={() => {
            return <Cart
              cart={this.state.cart}
              setCart={this.setCart}
            />
          }} />
          <Route exact path="/contact" component={Contact} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
