import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DanhSachSanPhamProps extends Component {
  // Component sử dụng thẻ được gọi là component cha, thẻ được sử dụng là component con
  productList = [
    {
      id: 1,
      name: "iphone x",
      price: 1000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "iphone xs",
      price: 2000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      name: "iphone xs max",
      price: 3000,
      img: "https://picsum.photos/200/200",
    },
  ];

  renderSanPham = () => {
    return this.productList.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamProps sp={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
