import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";

function App() {
    return (
      <Router>
        <Fragment>
          <Nav />
        </Fragment>
      </Router>
    );
  }
  
  export default App;