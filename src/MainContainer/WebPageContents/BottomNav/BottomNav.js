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
        <div className="content">Get In Touch</div>
      </div>
      <div className="last-line">
        <div>
          <span className="copyright">Copyright &copy On My Feet - Powered By</span><strong className="double-black">Omaha Group</strong>
          <span className="credit-cards">
          <i className="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-discover"></i>
          <i class="fab fa-cc-paypal"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
