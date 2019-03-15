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
