import React, { Component } from "react";
//Cách 1: import đường dẫn css từ file component - Dùng khi cần css tĩnh làm giao diện ban đầu
// import "./styles.css";
//Cách 2: import css tại component
import style from "./styles.module.css";

export default class Styles extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-red">cybersoft</div>

          <p className={style.textGreen}>muahahah</p>
          <p className={style["textGreen"]}>blablalba</p>
          <p className={`display-4 ${style.textGreen} ${style["bg-black"]}`}>
            waaaaaaaaaaaaa
          </p>

          <section
            style={{
              //Cách 3
              backgroundColor: "black",
              color: "green",
            }}
          >
            component
          </section>
        </div>
      </div>
    );
  }
}
