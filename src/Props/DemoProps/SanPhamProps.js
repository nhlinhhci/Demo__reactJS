import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    //this.props dùng để nhận giá trị từ component cha truỳen vào
    //this.props không gán lại giá trị được [read-only]
    //es6
    let { sp } = this.props;
    let { img, id, name, price } = this.props.sp;
    //
    // let sanPham = this.props.sp;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={img} alt />
          <div className="card-body">
            <h4 className="card-title">{sp.name}</h4>
            <p className="card-text">{sp.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
