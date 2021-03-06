import React from "react";
import "../global.scss";
import EnterToShops from "../ReusableComponents/EnterToShops";

class Shoe extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    onClickEnterShopShow: false,
    selectedSize: null,
    regions: ["EU", "UK", "US"],
    selectedRegion: null,
    active: null,
    activeSize: null
  };

  componentDidMount() {
    this.setState(
      {
        selectedRegion: "EU",
        active: 0
      },
      () => {
        this.myColor(this.state.regions[0]);
      }
    );
  }

  onClickEnterShopShow = (value, position) => {
    if (this.state.activeSize === position) {
      this.setState({
        activeSize: null
      });
    } else {
      this.setState({
        activeSize: position,
        onClickEnterShopShow: true,
        selectedSize: value
      });
    }
  };

  selectedRegion = (region, position) => {
    if (region === "UK" || region === "US" || region === "EU") {
      this.setState({
        selectedRegion: region
      });
    }
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  };

  myColor = position => {
    if (this.state.active === position) {
      return {
        color: "black",
        fontWeight: "bold"
      };
    }
  };

  setActive = position => {
    if (this.state.activeSize === position) {
      return {
        backgroundColor: "black",
        fontWeight: 900,
        color: "white"
      };
    }
  };

  render() {
    let EUregion = (
      <div className="s1 extraPadding">
        {this.props.set1.map((v, i) => {
          return (
            <div
              className="pd8"
              key={v}
              style={this.setActive(i)}
              onClick={() => this.onClickEnterShopShow(v, i)}
            >
              {v}
            </div>
          );
        })}
      </div>
    );
    let UKregion = (
      <div className="s1 extraPadding">
        {this.props.set2.map((v, i) => {
          return (
            <div
              className="pd8"
              key={v}
              style={this.setActive(i)}
              onClick={() => this.onClickEnterShopShow(v, i)}
            >
              {v}
            </div>
          );
        })}
      </div>
    );
    let USregion = (
      <div className="s1 extraPadding">
        {this.props.set3.map((v, i) => {
          return (
            <div
              className="pd8"
              key={v}
              style={this.setActive(i)}
              onClick={() => this.onClickEnterShopShow(v, i)}
            >
              {v}
            </div>
          );
        })}
      </div>
    );
    let available = (
      <div>
        <div className="row available">Available</div>
        <div className="row shops-13">13 Shops</div>
      </div>
    );
    let redLogo = (
      <div className="redLogo">
        <img src={this.props.redLogo} alt="offLogo" />
      </div>
    );
    return (
      <div className="main-shoe-card">
        <div className="shoe-card">
          <div className="actual-img-shoe-card">
            {/** the display card starts */}
            <div className="displayCard">
              {this.props.redLogo ? redLogo : available}
              <div className="displayCard-innerBody">
                <div className="col-12">
                  <div className="row shoe-img">
                    <div className="inner-shoe-img">
                      <img
                        src={require("../../assets/just_part_of_img/MaskGroup45.png")}
                        alt="nike-shoe"
                      />
                    </div>
                  </div>
                  <div className="row shoe-logo">
                    <div className="inner-shoe-logo">
                      <img
                        src={require("../../assets/just_part_of_img/nike_logo.png")}
                        alt="nike-shoe-logo"
                      />
                    </div>
                  </div>
                  <div className="shoe_name">Nike Air Max</div>
                  <div className="from_price">
                    <span className="available2">From</span>
                    <span className="dollar">$85.00</span>
                  </div>
                </div>
              </div>
            </div>
            {/** the display card ends */}
            <div className="test2">
              <div className="col-12">
                <div className="row">
                  <div className="hands-up">
                    <img
                      src={this.props.handUpImage}
                      alt="hands-up-image"
                      className="handsUpImg"
                      width="10%"
                      height="10%"
                    />
                  </div>
                  <div
                    className={
                      this.props.redLogo
                        ? "massive-padding-withDeals"
                        : "massive-padding"
                    }
                  >
                    {/* <div className="row"> */}
                    <div className="row shoe-logo-on-hover">
                      <div className="inner-shoe-logo-on-hover">
                        <img
                          src={require("../../assets/just_part_of_img/nike-3.png")}
                          alt="nike-shoe-logo"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="shoe_name_on_hover">Nike Air Max</div>
                    </div>
                    {/* </div> */}
                    <div className="row">
                      <div className="col-7 sh">ULTRA SHOE LTD</div>
                      <div className="col-5 sh1">
                        {this.state.regions.map((v, i) => {
                          return (
                            <span
                              onClick={() => this.selectedRegion(v, i)}
                              className="region"
                              style={this.myColor(i)}
                              key={i}
                            >
                              {v}/
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="size-list">
                      {this.state.selectedRegion === "EU" ? EUregion : null}
                      {this.state.selectedRegion === "UK" ? UKregion : null}
                      {this.state.selectedRegion === "US" ? USregion : null}
                    </div>
                  </div>
                  <div className="from_price_hover">
                    <span className="available_hover">From</span>
                    <span className="dollar_hover">$85.00</span>
                  </div>
                  {this.state.onClickEnterShopShow ? (
                    <EnterToShops selectedSize={this.state.selectedSize} />
                  ) : null}
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
