import React, { Component } from "react";
import dataGhe from "../../src/assets/danhSachGhe.json";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderHangGhe = () => {
    return dataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <span className="rowNumber">{hangGhe.hang}</span>
          {/* Load ra a1,a2,a3,... hangGhe.danhSachGhe */}
          {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
        </div>
      );
    });
  };
  renderDanhSachGhe = (danhSachGhe, hangGhe) => {
    //Load ra các object ghế {'soGhe': '1', 'gia':0}
    return danhSachGhe.map((ghe, index) => {
      //Kiểm tra xem ghế đang render có trong mảng ghế đang đặt redux hay không
      let classGheDangDat = "";
      let indexGhe = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGhe != -1) {
        classGheDangDat = "gheDangChon";
      }
      let classGhe = hangGhe !== "" ? "ghe" : "rowNumber";
      let classGheDuocChon = ghe.daDat ? "gheDuocChon" : "";
      return (
        <button key={index} className={`${classGhe} ${classGheDuocChon}`}>
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container mt-3 text-white">
          <h1 className="text-center text-white">
            ĐẶT VÉ XEM PHIM CYBERLEARN.VN
          </h1>
          <div className="text-center text-white">MÀN HÌNH</div>
          <div className="screen"></div>
          {this.renderHangGhe()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Xử lý biến đổi trước khi tạo props (lọc dữ liệu, ...)
  return {
    danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
