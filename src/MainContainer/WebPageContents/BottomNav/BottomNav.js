import React from "react";
import "../../global.scss";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="contents">
        <div className="content">About</div>
        <div className="content">Privacy Policy</div>
        <div className="content">Terms and Condition</div>
        <div className="content">Platform Policy</div>
        <div className="content">Contact</div>
        <div className="content get_in_touch">Get In Touch</div>
      </div>
      <div className="last-line">
        <div className="owner-contents">
          <span className="copyright">
            Copyright &copy On My Feet - Powered By
          </span>
          <strong className="double-black">Omaha Group</strong>
        </div>
        <div className="credit-cards">
          <span>
            <i className="fab fa-cc-visa" />
            <i className="fab fa-cc-mastercard" />
            <i className="fab fa-cc-discover" />
            <i className="fab fa-cc-paypal" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
