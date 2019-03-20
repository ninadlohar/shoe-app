import React from "react";
import "../../global.scss";

const Logo = () => {
  return (
    <div className="logo" id="logo">
      <div id="lo">
        <img
          src={require("../../../assets/on-my-feet.png")}
          alt="brand-logo"
          height="70px"
          id="log"
        />
      </div>
    </div>
  );
};

export default Logo;
