import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Booking from "./components/pages/Booking/Booking";
import Shop from "./components/pages/Shop/Shop";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Staff from "./components/pages/Staff";
import Login from "./components/Auth/Login";
import Admin from "./components/pages/Admin";
import Details from "./components/pages/Details";
// import Default from "./components/pages/Default";
import Modal from "./components/Modal";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
        <Security issuer='https://dev-617186.okta.com/oauth2/default'
          client_id='0oalofeivkPLBlz2H356'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <React.Fragment>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/cart" component={Cart} />
            <SecureRoute exact path="/staff" component={Staff} />
            {/* <Route component={Default} /> */}
            </Switch>
            <Modal />
            <Route path='/login' render={() => <Login baseUrl='https://dev-617186.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </React.Fragment>
        </Security>
    );
  }
}

export default App;