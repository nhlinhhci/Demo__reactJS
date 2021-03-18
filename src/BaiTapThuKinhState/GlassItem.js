import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <div className="m-3">
        <button
          className="btn"
          onClick={() => {
            this.props.glassChange(glasses);
          }}
        >
          <img
            src={glasses.url}
            alt={glasses.name}
            style={{ width: "100px" }}
          />
        </button>
      </div>
    );
  }
}
