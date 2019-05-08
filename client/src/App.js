import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Fragment>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Appointment} />
          <Route exact path="/books" component={Appointment} />
          <Route exact path="/appointment/:id" component={Services} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
