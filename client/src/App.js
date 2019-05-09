import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
      </Fragment>
    </Router>
  );
}

export default App;
