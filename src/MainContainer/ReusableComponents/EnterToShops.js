import React from "react";
import "../global.scss";

class EnterToShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disppearOnClick: false
    };
  }

  disppearOnClick = () => {
    this.setState({ disppearOnClick: true });
  };
  render() {
    if (this.state.disppearOnClick === false) {
      return (
        <div className="enter-to-shops">
          <div
            className="enter-to-shops-text"
            onClick={() => this.disppearOnClick()}
          >
            Enter to Shops.
          </div>
        </div>
      );
    } else {
      return (
        /** Navigate Code here */
        <div />
      );
    }
  }
}

export default EnterToShops;
