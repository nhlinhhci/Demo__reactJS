import React, { Component } from "react";
import BT1Product from "./BT1Product";

export default class BT1ProductList extends Component {
  render() {
    return (
      <div className="pt-5 pb-5 bg-dark">
        {/* container-fluid bao row lại để trang web không bị dư width khiến xuất hiện thanh kéo ở dướI */}
        <div className="container-fluid ">
          <h1 className="font-weight-bold text-white text-center">
            BEST SMARTPHONE
          </h1>
          <div className="row">
            <div className="col-3">
              <BT1Product />
            </div>
            <div className="col-3">
              <BT1Product />
            </div>
            <div className="col-3">
              <BT1Product />
            </div>
            <div className="col-3">
              <BT1Product />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
