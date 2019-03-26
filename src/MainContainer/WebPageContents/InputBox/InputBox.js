import React from "react";
import {
  Form,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      onClickEnterShopShow: false,
      selectedSize: null,
      regions: ["EU", "UK", "US"],
      selectedRegion: null,
      active: null,
      activeSize: null
    };
  }

  componentDidMount() {
    this.setState({
      selectedRegion: "EU"
    });
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
        selectedRegion: region,
        dropdownOpen: !this.state.dropdownOpen
      });
    }
    if (this.state.active === position) {
      this.setState({ active: null, dropdownOpen: !this.state.dropdownOpen });
    } else {
      this.setState({
        active: position,
        dropdownOpen: !this.state.dropdownOpen
      });
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

  toggle() {
    this.setState(prevState => {
      return {
        dropdownOpen: !prevState.dropdownOpen
      };
    });
  }
  render() {
    let EUregion = (
      <div className="s1">
        {this.props.set1.map((v, i) => {
          return (
            <div
              className="pd8 cGrey"
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
      <div className="s1">
        {this.props.set2.map((v, i) => {
          return (
            <div
              className="pd8 cGrey"
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
      <div className="s1">
        {this.props.set3.map((v, i) => {
          return (
            <div
              className="pd8 cGrey"
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
    return (
      <div className="drop-Down">
        <div>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>
              <span className="sizes">Sizes</span>{" "}
              <i className="fas fa-angle-down" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="show-hide-items">
                <div style={{ color: "#747474" }}>
                  <span className="show-hide">
                    Show/Hide Intermediate Sizes
                  </span>
                  <span className="regionNames">
                    {this.state.regions.map((v, i) => {
                      return (
                        <span
                          onClick={() => this.selectedRegion(v, i)}
                          style={this.myColor(i)}
                          className="selectedRegions"
                          key={i}
                        >
                          {v}/
                        </span>
                      );
                    })}
                  </span>
                </div>
                <div className="size-list">
                  {this.state.selectedRegion === "EU" ? EUregion : null}
                  {this.state.selectedRegion === "UK" ? UKregion : null}
                  {this.state.selectedRegion === "US" ? USregion : null}
                </div>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className="inputBox">
          <Form>
            <Input
              type="text"
              name="text"
              id="inputText"
              placeholder="Search"
            />
            <i className="fas fa-search search-icon" />
          </Form>
        </div>
      </div>
    );
  }
}

export default InputBox;
