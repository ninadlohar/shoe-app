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

        <div className="bottom-logo">
          <img
            src={require("../../../assets/just_part_of_img/omf.png")}
            alt="omf"
          />
        </div>

        <div className="connect-logos">
          <i className="fas fa-envelope" />
          <i className="fab fa-linkedin" />
          <i className="fab fa-twitter" />
          <i className="fab fa-google-plus-g" />
          <i className="fab fa-youtube" />
        </div>
        <div className="get-the-app">
          <h3>Get The App</h3>
        </div>
        <div className="youtube-apple">
          <div className="apple">
            <img
              src={require("../../../assets/connect-image/appleStore.png")}
              alt="apple-store"
            />
          </div>
          <div className="google">
            <img
              src={require("../../../assets/connect-image/googlePlay.png")}
              alt="google-play"
            />
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Footer;
