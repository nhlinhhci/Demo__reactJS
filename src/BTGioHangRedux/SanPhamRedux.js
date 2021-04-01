import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    console.log("prop", this.props);
    let product = this.props.sanPham;
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

const mapDispatchToProps = (dispatch) => {
  //=> dispatch giống như phương thức setState tribg reactClass component
  return {
    themGioHang: (spClick) => {
      // console.log("spClick", spClick);
      // từ spClick tạo ra sp giỏ hàng
      const spGioHang = {
        maSP: spClick.maSP,
        tenSP: spClick.tenSP,
        gia: spClick.giaBan,
        soLuong: 1,
        hinhAnh: spClick.hinhAnh,
      };
      //Đóng gói dữ liệu gửi lên store
      const action = {
        type: "THEM_GIO_HANG", //đây là thuộc tính băt buộc để reducer nhận biết giá trị
        spGioHang: spGioHang,
      };
      // gửi action lên reducer
      dispatch(action);
    },
  };
};

//Két nối component với store
export default connect(null, mapDispatchToProps)(SanPhamRedux);
