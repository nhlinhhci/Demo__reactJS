import React, { Component } from "react";
import Carts from "./Carts";
import ProductItem from "./ProductItem";

export default class Products extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    productDetail: {
      //Mặc định
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      //   {
      //     maSP: 1,
      //     tenSP: "iphone x",
      //     gia: 1000,
      //     soLuong: 1,
      //     hinhAnh: "https://picsum.photos/200/200",
      //   },
    ],
  };

  renderProduct = () => {
    return this.arrProduct.map((product, index) => {
      return (
        <div key={index} className="col-4">
          <ProductItem
            product={product}
            viewDetail={this.viewDetail}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };

  viewDetail = (itemClick) => {
    this.setState({
      productDetail: itemClick,
    });
  };

  themGioHang = (spClick) => {
    // console.log(spClick.tenSP);
    //Xử lý setState cho giỏ hàng
    //Bước 1: Từ sản phẩm được click tạo ra sản phẩm giỏ hàng
    let spGioHang = {
      maSP: spClick.maSP,
      tenSP: spClick.tenSP,
      gia: spClick.giaBan,
      soLuong: 1,
      hinhAnh: spClick.hinhAnh,
    };
    //Bước 2: Xử lý thêm giỏ hàng
    let gioHangCapNhat = [...this.state.gioHang];
    //Kiểm tra sản phẩm đẫ tồn tại trong giỏ hàng chưa
    let index = gioHangCapNhat.findIndex(
      (item) => item.maSP === spGioHang.maSP
    );
    //Kiểm tra trong giỏ hàng có chứa sp chưa?
    if (index !== -1) {
      //Có rồi thì soLuong+1
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Chưa thì cập nhật giỏ hàng
      // gioHangCapNhat.push(spGioHang);
      gioHangCapNhat = [...gioHangCapNhat, spGioHang];
    }
    //Bước 3: set lại state sau khi xử lý
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (spClick) => {
    // console.log(spClick);

    let gioHangCapNhat = [...this.state.gioHang];
    // console.log(gioHangCapNhat);
    //Tìm index của món hàng trong gioHang
    let index = gioHangCapNhat.findIndex((item) => item.maSP === spClick.maSP);
    // console.log(index);
    if (index !== -1) {
      //Nếu có
      gioHangCapNhat.splice(index, 1);
    }
    //setState lại cho gioHang sau khi xử lý
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  giamSoLuong = (spClick) => {
    // console.log("Giam so luong", spClick.maSP);
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((item) => item.maSP === spClick.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong -= 1;
      if (gioHangCapNhat[index].soLuong === 0) {
        gioHangCapNhat.splice(index, 1);
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangSoLuong = (spClick) => {
    // console.log("Tang so luong", spClick.maSP);
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((item) => item.maSP === spClick.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let {
      tenSP,
      hinhAnh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      giaBan,
      heDieuHanh,
      maSP,
      manHinh,
    } = this.state.productDetail;
    return (
      <div className="container">
        <div className="row mt-4">
          <Carts
            gioHang={this.state.gioHang}
            xoaGioHang={this.xoaGioHang}
            tangSoLuong={this.tangSoLuong}
            giamSoLuong={this.giamSoLuong}
          />
        </div>
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
        <div className="row productDetail mt-4">
          <div className="col-4">
            <h1 className="">{tenSP}</h1>
            <img src={hinhAnh} alt={tenSP} height="400" />
          </div>
          <div className="col-8">
            <h1 className="">Thông số kỹ thuật</h1>
            <div className="table mt-5">
              <table className="w-100">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
