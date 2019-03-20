import React from "react";
import "../global.scss";
import OfferImage from "../../assets/d1-offer.png";

class Shoe extends React.Component {
  render() {
    return (
      <div className="main-shoe-card">
        <div className="shoe-card">
          <div className="actual-img-shoe-card">
            <img
              src={this.props.shoe}
              alt="nike-shoe"
              className="shoe-card-img"
            />
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
