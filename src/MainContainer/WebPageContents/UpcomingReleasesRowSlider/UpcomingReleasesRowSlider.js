import React from "react";
import "../../global.scss";
import Slider from "react-slick";

class UpcomingReleasesRowSlider extends React.Component {
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
          breakpoint: 1064,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div className="first-row-card-scroll-padding-l-r">
        <Slider {...settings}>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="black-nike-shoe"
            />
          </div>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="nike-shoe"
            />
          </div>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="nike-shoe"
            />
          </div>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="nike-shoe"
            />
          </div>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="nike-shoe"
            />
          </div>
          <div className="up-rel-card">
            <img
              src={require("../../../assets/nike-black-shoe.png")}
              alt="nike-shoe"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default UpcomingReleasesRowSlider;
