import React, { Component } from "react";
import BT1Carousel from "./BT1Carousel";
import BT1Header from "./BT1Header";
import BT1ProductList from "./BT1ProductList";

import BT1Footer from "./BT1Footer";
import BT1LaptopList from "./BT1LaptopList";

export default class BaiTapLayout1 extends Component {
  render() {
    return (
      <div className="">
        <BT1Header />
        <BT1Carousel />
        <BT1ProductList />
        <BT1LaptopList />
        <BT1Footer />
      </div>
    );
  }
}
