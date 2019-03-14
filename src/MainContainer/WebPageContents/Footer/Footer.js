import React from "react";
import "../../global.scss";
import BottomNav from "../BottomNav/BottomNav";

const Footer = () => {
  return (
    <div className="footer">
      <img src={require("../../../assets/footer.png")} alt="footer" />
      <div className="footer-contents">
        <div className="get-in-touch">
          <h3>Get In Touch</h3>
        </div>
        {/* <div className="footer-brand-logo">
          <img
            src={require("../../../assets/on-my-feet.png")}
            className="brand-logo-bottom"
            alt="brand-logo"
          />
        </div> */}
        <div className="get-the-app">
          <h3>Get The App</h3>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Footer;
