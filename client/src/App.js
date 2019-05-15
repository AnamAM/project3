import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Booking from "./components/pages/Booking/Booking";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Staff from "./components/pages/Staff";
import Login from "./components/Auth/Login";
import Admin from "./components/pages/Admin";

function onAuthRequired({history}) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security issuer='https://dev-617186.okta.com/oauth2/default'
        client_id='0oalofeivkPLBlz2H356'
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired} >
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
          <SecureRoute exact path="/staff" component={Staff} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-617186.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </div>
      </Security>
    </Router>
  );
}

export default App;
