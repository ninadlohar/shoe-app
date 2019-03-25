import { Container, Row, Col } from "reactstrap";
import React from "react";
import "./global.scss";
import { slide as Menu } from "react-burger-menu";
import WebPageContents from "./WebPageContents/WebpageContents";
import RightNavbar from "./WebPageContents/Navbar/Navbar";
import InputBox from "./WebPageContents/InputBox/InputBox";

class MainContainer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  /** js code */

  componentWillMount() {
    const w = window;
    w.addEventListener("scroll", function(event) {
      var top = this.scrollY;
      var actualLogo = document.getElementById("logo");
      var navbarLogo = document.getElementById("nav-b");
      var navbarLogoParent = document.getElementById("lo");

      var nav = document.getElementById("navbar-at-right");
      console.log(nav.offsetHeight);
      if (w.scrollY > 40) {
        nav.style.backgroundColor = "black";
        nav.style.transition = "all 0.5s";
        navbarLogo.style.display = "block";
        navbarLogo.classList.add("active");
      }
      // window.onscroll = function() {
      //   scrollFunction();
      // };
      // function scrollFunction() {
      //   if (
      //     document.body.scrollTop > 40 ||
      //     document.documentElement.scrollTop > 40
      //   ) {
      //     document.getElementById("log").style.transition = "all 2s";
      //     navbarLogoParent.style.transform =
      //       "translate(-62px,-28px)"; /** if minus goes left(-58px) */
      //     document.getElementById("log").style.transform = "scale(0.6, 0.6)";
      //   }
      // }
      if (top < 51) {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "all 0.5s";
        actualLogo.style.display = "block";
        navbarLogo.classList.remove("active");
      }
    });
  }

  /** js code */
  render() {
    return (
      <div id="outer-container">
        <Container fluid={true} className="nopadding">
          <Row className="nomargin">
            <Col md="12" sm="12" lg="12" xl="12" sm="12" className="nopadding">
              <div className="top-fluid-image">
                <div className="ham-menu">
                <div className="logo-when-resize">
                <img src={require("../assets/on-my-feet.png")} alt="oh-my-foot" />
                </div>
                  <Menu right width={"300px"}>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/about"
                      onClick={() => this.closeMenu()}
                    >
                      Home
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/about"
                      onClick={() => this.closeMenu()}
                    >
                      Store
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/contact"
                      onClick={() => this.closeMenu()}
                    >
                      Sales
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/contact"
                      onClick={() => this.closeMenu()}
                    >
                      About
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/contact"
                      onClick={() => this.closeMenu()}
                    >
                      Blog
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/contact"
                      onClick={() => this.closeMenu()}
                    >
                      FAQ
                    </a>
                    <a
                      id="contact"
                      className="menu-item"
                      href="/contact"
                      onClick={() => this.closeMenu()}
                    >
                      Contact
                    </a>
                  </Menu>
                </div>
                <RightNavbar />
                <InputBox />
              </div>
            </Col>
          </Row>
          <WebPageContents />
        </Container>
      </div>
    );
  }
}

export default MainContainer;
