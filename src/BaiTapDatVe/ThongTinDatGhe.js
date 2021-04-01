import React, { Component } from "react";
//import thư viện kết nối với redux
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="text-white">
        <h1 className="text-center mb-5">Danh sách ghế đang chọn</h1>
        <div className="text-left">
          <button className="gheDangChon"></button> Ghế đang chọn
        </div>
        <div className="text-left">
          <button className="ghe ml-0"></button> Ghế chưa đặt
        </div>
        <div className="text-left">
          <button className="gheDuocChon"></button> Ghế đã đặt
        </div>
        <table className="table text-white mt-5">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button className="btn btn-danger">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Tổng tiền</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Lấy state danhSachGheDangDat từ reducer về tạo thành props của component
  return { danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
