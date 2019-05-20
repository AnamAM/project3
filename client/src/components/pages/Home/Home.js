import React, { Component } from "react";
import './style.css';
// import Parallax from "../../Parallax";
import M from 'materialize-css';

class Home extends Component {
  
  componentDidMount() {
    // M.FormSelect.init(document.querySelectorAll('select'));
    M.AutoInit();
  }

  render() {
    return (
      <div>
        Design this page.
        </div>
    );
  }
}

export default Home;