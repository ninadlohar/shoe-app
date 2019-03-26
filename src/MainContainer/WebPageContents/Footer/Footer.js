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
          <a href="https://www.google.com">
            <i className="fas fa-envelope" />
          </a>
          <a href="https://in.linkedin.com">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/login">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://accounts.google.com/signin/v2/sl/pwd?service=CPanel&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="https://www.youtube.com">
            <i className="fab fa-youtube" />
          </a>
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
