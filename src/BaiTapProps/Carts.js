import React, { Component } from "react";

export default class Carts extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt={item.tenSP} width="50" />
          </td>
          {/* toLocaleString() để hiển thị số có , ngăn cách triệu-nghìn-đơn vị đẹp hơn */}
          <td>{item.gia.toLocaleString()}</td>
          <td>
            <button
              class="btn fas fa-minus-circle"
              onClick={() => {
                this.props.tangGiamSoLuong(item, -1);
              }}
            ></button>
            {item.soLuong.toLocaleString()}
            <button
              class="btn fas fa-plus-circle"
              onClick={() => {
                this.props.tangGiamSoLuong(item, 1);
              }}
            ></button>
          </td>
          <td>{(item.gia * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(item);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Giỏ hàng</h1>
        <table className="w-100">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
