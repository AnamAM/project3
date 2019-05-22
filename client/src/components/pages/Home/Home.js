import React from "react";
// import Jumbrotron from "../../Jumbotron";
import ParallaxStyle from "../../Parallax";
import Contact from "../Contact";
import Footer from "../../Footer";

function Home() {
  return (
    <div>
    {/* <Jumbrotron /> */}
    <ParallaxStyle 
    />
    <Contact />
    <Footer />
    </div>
  )
}

    export default Home;