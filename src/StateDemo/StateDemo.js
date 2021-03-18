import React, { Component } from "react";

export default class StateDemo extends Component {
  //state là thuộc tính có sẵn của component chứa các giá trị làm thay đổi giao diện khi người dùng thao tác
  state = {
    isLogin: false,
  };

  // isLogin = false;
  userName = "Linh rất đẹp trai";

  renderUILogin = () => {
    if (this.state.isLogin) {
      return (
        <span className="text-white">
          Hello {this.userName}
          <button
            onClick={() => {
              // let newState = {
              //   isLogin: false,
              // };
              this.setState({
                isLogin: false,
              });
            }}
            className="my-1 mx-2"
          >
            Đăng xuất
          </button>
        </span>
      );
    }
    return (
      <button
        onClick={() => {
          // let newState = {
          //   isLogin: true,
          // };
          this.setState(
            {
              isLogin: true,
            },
            function () {
              //Tham số thứ 2 này là function để kiểm tra thông số, debug
              console.log("isLogin", this.state.isLogin);
            }
          );
          // this.state.isLogin = true;
          // console.log(this.state.isLogin);
        }}
      >
        Đăng nhập
      </button>
    );
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  {
                    (this.isLogin = false ? (
                      <span>Đăng nhập</span>
                    ) : (
                      `Hello ${this.userName}`
                    ))
                  }
                </a> */}

                {this.renderUILogin()}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
