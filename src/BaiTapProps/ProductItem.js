import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;

    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={product.hinhAnh}
            alt={product.tenSP}
            height="300"
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.viewDetail(product);
              }}
            >
              Xem Chi Tiết
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                //sử dụng hàm themGioHang() từ component cha truyền vào
                this.props.themGioHang(product);
              }}
            >
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
