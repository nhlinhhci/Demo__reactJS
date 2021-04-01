import React, { Component } from "react";
//Kết nối component với tỏe từ redux
import { connect } from "react-redux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHangProps.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} alt="" width="50" />
          </td>
          <td>{spGH.gia}</td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.tangGiamSoLuong(spGH.maSP, -1);
              }}
            >
              -
            </button>
            {spGH.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                this.props.tangGiamSoLuong(spGH.maSP, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{spGH.gia * spGH.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGH.maSP);
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
    console.log(this.props);
    return (
      <div className="container">
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

//Lấy dữ liệu từ store về component
const mapStateToProps = (state) => {
  //ghi chú state chính là rootReducer (state tổng của ứng dụng)

  //Hàm này tạo ra props từ state của redux
  return {
    // gioHang: state.gioHangReducer.gioHang,
    gioHangProps: state.gioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSP: maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, soLuong) => {
      // console.log(maSP, soLuong);
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        soLuong,
      };
      dispatch(action);
    },
  };
};

//Biến đổi BaiTapGioHangReDux thành BaiTapGioHang có kết nối với redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
