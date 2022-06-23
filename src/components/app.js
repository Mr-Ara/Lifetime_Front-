import { Component } from "react";
import React from "react";
import MarketPrice from "./marketprice";
import "../styles/app.css";
import NavBar from "./navbar";
import MyCarousel from "./MyCarousel";
import FreeSignal from "./freeSignal";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="main">
          <NavBar/>
          <MarketPrice/>
          <MyCarousel/>
          <FreeSignal/>
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;
