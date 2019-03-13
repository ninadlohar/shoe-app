import React from "react";
import "../../MainContainer/global.scss";
import Slider from "react-slick";

class FirstRowCardScroll extends React.Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#545454",
            top: -10,
            left: "95%",
            color: "#545454"
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "block",
            background: "#545454",
            top: -10,
            left: "92%",
            color: "#545454"
          }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
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
      <div className="first-row-card-scroll-padding-l-r">
        <Slider {...settings}>
          <div className="shoe-card">
            <img
              src={require("../../assets/black.png")}
              alt="black-nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
          <div className="shoe-card">
            <img
              src={require("../../assets/shoe.png")}
              alt="nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
          <div className="shoe-card">
            <img
              src={require("../../assets/shoe.png")}
              alt="nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
          <div className="shoe-card">
            <img
              src={require("../../assets/shoe.png")}
              alt="nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
          <div className="shoe-card">
            <img
              src={require("../../assets/shoe.png")}
              alt="nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
          <div className="shoe-card">
            <img
              src={require("../../assets/shoe.png")}
              alt="nike-shoe"
              height="350px"
              width="300px"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default FirstRowCardScroll;
