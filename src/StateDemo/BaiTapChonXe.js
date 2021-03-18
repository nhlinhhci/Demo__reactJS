/**
 * Bước xử lý task Front-end
 *  - Bước 1: Hoàn thành giao diện (Dàn Layout)
 *  - Bước 2: Xác định giá trị thay đổi khi người dùng thao tác => (xác định )
 */

import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/car/products/black-car.jpg",
  };

  changeColor = (newColor) => {
    this.setState({
      srcImg: `./img/car/products/${newColor}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4">Bài tập chọn xe</h1>
        <div className="row">
          <div className="col-6">
            <h1>Here's your car</h1>
            <img src={this.state.srcImg} alt="" className="w-100" />
          </div>
          <div className="col-6">
            <h1>Choose Color</h1>
            <div className="row">
              <button
                className="btn col-3 text-white"
                style={{ backgroundColor: "black", cursor: "pointer" }}
                onClick={() => {
                  this.changeColor("black");
                }}
              >
                Black car
              </button>
              <button
                className="btn col-3 text-white"
                style={{ backgroundColor: "red", cursor: "pointer" }}
                onClick={() => {
                  this.changeColor("red");
                }}
              >
                Red car
              </button>
              <button
                className="btn col-3"
                style={{ backgroundColor: "silver", cursor: "pointer" }}
                onClick={() => {
                  this.changeColor("silver");
                }}
              >
                Silver car
              </button>
              <button
                className="btn col-3"
                style={{ backgroundColor: "grey", cursor: "pointer" }}
                onClick={() => {
                  this.changeColor("steel");
                }}
              >
                Steel car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
