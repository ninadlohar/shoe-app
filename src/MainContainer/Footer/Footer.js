import React from "react";
import "../../MainContainer/global.scss";
import BottomNav from "../BottomNav/BottomNav";

const Footer = () => {
  return (
    <div className="footer">
      <img src={require("../../assets/footer.png")} alt="footer" />
      <div className="footer-contents">
        <div className="get-in-touch">
          <h3>Get In Touch</h3>
        </div>
        <div />
        <div />
        <BottomNav />
      </div>
    </div>
  );
};

export default Footer;
