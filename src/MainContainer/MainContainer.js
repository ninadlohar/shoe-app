import { Container, Row, Col } from "reactstrap";
import React from "react";
import "./global.scss";
import { slide as Menu } from "react-burger-menu";
import WebPageContents from "./WebPageContents/WebpageContents";
import RightNavbar from "./WebPageContents/Navbar/Navbar";
import InputBox from "./WebPageContents/InputBox/InputBox";

class MainContainer extends React.Component {
  state = {
    set: {
      set1: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      set2: [6, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10, 10.5, 11],
      set3: [
        4,
        4.5,
        5.0,
        5.5,
        6,
        6.5,
        7.0,
        7.5,
        8.0,
        8.5,
        9.0,
        9.5,
        10,
        10.5,
        11
      ]
    }
  };

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

      var nav = document.getElementById("navbar-at-right");
      console.log(nav.offsetHeight);
      if (w.scrollY > 40) {
        nav.style.backgroundColor = "black";
        nav.style.transition = "all 0.5s";
        navbarLogo.style.display = "block";
        navbarLogo.classList.add("active");
      }
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
                    <img
                      src={require("../assets/on-my-feet.png")}
                      alt="oh-my-foot"
                    />
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
                <InputBox
                  set1={this.state.set.set1}
                  set2={this.state.set.set2}
                  set3={this.state.set.set3}
                />
              </div>
            </Col>
          </Row>
          <WebPageContents
            set1={this.state.set.set1}
            set2={this.state.set.set2}
            set3={this.state.set.set3}
          />
        </Container>
      </div>
    );
  }
}

export default MainContainer;
