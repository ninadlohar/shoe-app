import React from "react";
import "../../MainContainer/global.scss";
import { Container, Row, Col } from "reactstrap";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="contents">
        <div className="content">About</div>
        <div className="content">Privacy Policy</div>
        <div className="content">Terms and Condition</div>
        <div className="content">Platform Policy</div>
        <div className="content">Contact</div>
        <div className="content">Get In Touch</div>
      </div>
    </div>
  );
};

export default BottomNav;
