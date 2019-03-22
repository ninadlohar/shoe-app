import React from "react";
import "../../global.scss";
import Slider from "react-slick";
import Shoe from "../../ReusableComponents/Shoe";

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
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 972,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 570,
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
          {/* <div className="shoe-card">
            <img
              src={require("../../../assets/black.png")}
              alt="black-nike-shoe"
            />
          </div> */}
          <Shoe set1={this.props.set1} set2={this.props.set2} shoe={this.props.NikeShoe} />
          <Shoe set1={this.props.set1} shoe={this.props.NikeShoe} />
          <Shoe set1={this.props.set1} shoe={this.props.NikeShoe} />
          <Shoe set1={this.props.set1} shoe={this.props.NikeShoe} />
          <Shoe set1={this.props.set1} shoe={this.props.NikeShoe} />
          <Shoe set1={this.props.set1} shoe={this.props.NikeShoe} />
        </Slider>
      </div>
    );
  }
}

export default FirstRowCardScroll;
