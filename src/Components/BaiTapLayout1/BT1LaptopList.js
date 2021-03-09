import React, { Component } from "react";
import BT1Laptop from "./BT1Laptop";

export default class BT1LaptopList extends Component {
  render() {
    return (
      <div className="pt-5 pb-5">
        <div className="container-fluid">
          <h1 className="font-weight-bold text-center">BEST LAPTOP</h1>
          <div className="row">
            <div className="col-3">
              <BT1Laptop />
            </div>
            <div className="col-3">
              <BT1Laptop />
            </div>
            <div className="col-3">
              <BT1Laptop />
            </div>
            <div className="col-3">
              <BT1Laptop />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
