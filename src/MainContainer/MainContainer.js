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
    const style1 = {
      backgroundColor: "red"
    };
    const w = window;
    w.addEventListener("scroll", function(event) {
      var top = this.scrollY;
      var actualLogo = document.getElementById("logo");
      var navbarLogo = document.getElementById("nav-b");
      var nav = document.getElementById("navbar-at-right");
      if (top > 100) {
        nav.style.backgroundColor = "black";
        nav.style.transition = "all 0.5s";
        actualLogo.style.display = "none";
        navbarLogo.style.display = "block";
        navbarLogo.classList.add = style1;
      }
      if (top < 151) {
        navbarLogo.style.display = "none";
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "all 0.5s";
        actualLogo.style.display = "block";
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
