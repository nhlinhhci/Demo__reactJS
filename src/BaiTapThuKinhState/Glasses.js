import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class Glasses extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  glassChange = (glassesClick) => {
    this.setState({
      glassDetail: glassesClick,
    });
  };

  renderGlasses = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <div key={index} className="col-2">
          <GlassItem glasses={item} glassChange={this.glassChange} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <nav
          className="nav"
          style={{
            background: "rgb(0 0 0 / 70%)",
            position: "absolute",
            top: "0",
            color: "#fff",
            width: "100%",
            height: "100px",
            alignContent: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          TRY GLASSES APP ONLINE
        </nav>
        <div
          style={{
            backgroundImage: `url(./img/glassesImage/background.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "900px",
            position: "absolute",
            zIndex: "-1",
          }}
        ></div>
        <div
          style={{
            background: "rgb(0 0 0 / 42%)",
            width: "100%",
            height: "900px",
            position: "absolute",
          }}
        ></div>
        <div className="container">
          <div className="row" style={{ paddingTop: "10%" }}>
            <div className="col-6">
              <div style={{ position: "absolute", top: "30%", left: "25%" }}>
                <img
                  src="./img/glassesImage/model.jpg"
                  alt=""
                  width="300"
                  style={{ position: "absolute" }}
                />
                {/* <p
                  style={{
                    // position: "relative",
                    background: "#fff",
                  }}
                >
                  Hello
                </p> */}
              </div>
              <img
                src={this.state.glassDetail.url}
                alt=""
                style={{
                  position: "relative",
                  top: "208%",
                  left: "36%",
                  width: "167px",
                }}
              />
            </div>
            <div className="col-6">
              <img
                src="./img/glassesImage/model.jpg"
                alt=""
                width="300"
                style={{ position: "absolute", top: "30%", left: "25%" }}
              />
            </div>
          </div>
          <div
            className="container"
            style={{
              background: "#fff",
              width: "100%",
              height: "300px",
              position: "absolute",
              top: "75%",
              left: "12%",
            }}
          >
            <div className="row mt-5" style={{ position: "relative" }}>
              {this.renderGlasses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
