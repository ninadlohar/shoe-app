import React from "react";
import "../global.scss";
import OfferImage from "../../assets/d1-offer.png";

class Shoe extends React.Component {
  render() {
    return (
      <div className="main-shoe-card">
        <div className="shoe-card">
          <div className="actual-img-shoe-card">
            {/** the display card starts */}
            <div className="displayCard">
              <div className="displayCard-innerBody">
                <div className="col-12">
                  <div className="row available">
                    Available
                  </div>
                  <div className="row shops-13">
                    13 Shops
                  </div>
                  <div className="row shoe-img">
                    <div className="inner-shoe-img">
                      <img src={require("../../assets/just_part_of_img/shoe.png")} alt="nike-shoe" />
                    </div>
                  </div>
                  <div className="row shoe-logo">
                    <div className="inner-shoe-logo">
                      <img src={require("../../assets/just_part_of_img/nike_logo.png")} alt="nike-shoe-logo" />
                    </div>
                  </div>
                  <div className="shoe_name">
                    Nike Air Max
                  </div>
                  <div className="from_price">
                    <span className="available2">From</span><span className="dollar">$85.00</span>
                  </div>
                </div>
              </div>
            </div>
            {/** the display card ends */}
            <div className="test2">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 massive-padding">
                    <div className="row">
                      <div className="col-6 sh">ULTRA SHOE LTD</div>
                      <div className="col-6 sh1">EU/ UK/ US</div>
                    </div>
                    <div className="size-list">
                      <div className="s1">
                        {this.props.set.set1.map((v, i) => {
                          return (
                            <div className="pd8" key={v}>
                              {v}
                            </div>
                          );
                        })}
                      </div>
                      <div className="s2">
                        {this.props.set.set2.map((v, i) => {
                          return (
                            <div className="pd8" key={v}>
                              {v}
                            </div>
                          );
                        })}
                      </div>
                      <div className="s3">
                        {this.props.set.set3.map((v, i) => {
                          return (
                            <div className="pd8" key={v}>
                              {v}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoe;
