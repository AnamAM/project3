import React, { Component } from "react";
import Jumbotron from "../../Jumbotron";
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
        <Jumbotron />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      {/* <Parallax /> */}
        </div>
    );
  }
}

export default Home;