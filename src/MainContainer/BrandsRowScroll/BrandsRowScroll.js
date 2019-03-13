import React, { Component } from "react";
import Slider from "react-slick";

export default class BrandsRowScroll extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      dots: false,
      infinite: true,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
          <div>
            <img
              src={require("../../assets/exp.png")}
              alt="nike-shoe"
              height="100px"
              width="150px"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
