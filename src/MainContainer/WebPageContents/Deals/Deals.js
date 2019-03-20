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
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 942,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        }
      ]
    };
    /*** in deals <Shoe size={set}> from webpageContents component */
    return (
      <div className="first-row-card-scroll-padding-l-r">
        <Slider {...settings}>
          <Shoe set={this.props.set} shoe={this.props.OfferShoe} />
          <Shoe set={this.props.set} shoe={this.props.OfferShoe} />
          <Shoe set={this.props.set} shoe={this.props.OfferShoe} />
          <Shoe set={this.props.set} shoe={this.props.OfferShoe} />
          <Shoe set={this.props.set} shoe={this.props.OfferShoe} />
        </Slider>
      </div>
    );
  }
}

export default FirstRowCardScroll;
