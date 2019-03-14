import React, { Component } from "react";
import Slider from "react-slick";

export default class BrandsRowScroll extends Component {
  render() {
    const settings = {
      // className: "center",
      // centerMode: true,
      // centerPadding: "60px",
      // slidesToShow: 3,
      // speed: 500,
      // rows: 2,
      // dots: false,
      // infinite: true,
      // slidesPerRow: 2,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 2400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 2800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
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
              src={require("../../assets/basics.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/converse.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/nike.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/jordan.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/newbalance.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/puma.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/nike.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/newbalance.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/jordan.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/basics.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/puma.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/nike.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/jordan.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/basics.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
          <div>
            <img
              src={require("../../assets/newbalance.png")}
              alt="nike-shoe"
              className="brands"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
