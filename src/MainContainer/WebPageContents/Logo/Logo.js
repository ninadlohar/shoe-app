import React from "react";
import "../../global.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={require("../../../assets/on-my-feet.png")}
        alt="brand-logo"
        height="70px"
      />
    </div>
  );
};

export default Logo;
