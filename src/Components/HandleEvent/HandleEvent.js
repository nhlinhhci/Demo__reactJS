import React, { Component } from "react";

export default class HandleEvent extends Component {
  //callback function - Hàm đóng vai trò là tham số truyền vào biến hoặc hàm khác
  handleClick = () => {
    alert("Hello Linh");
  };
  showMess = (message) => {
    alert(message);
  };

  render() {
    return (
      <div>
        <button id="btnClick" onClick={this.handleClick}>
          Click me
        </button>
        <button
          id="btnClick"
          onClick={() => {
            alert("Hello Linh!!!");
          }}
        >
          Click me
        </button>
        <br />
        <button
          className="btn btn-success mt-2"
          onClick={() => {
            this.showMess("Linh oyoyyyyyy");
          }}
        >
          Show message
        </button>
      </div>
    );
  }
}
