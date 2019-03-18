import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-at-right" id="navbar-at-right">
        <Navbar light expand="md">
          <NavbarBrand href="#" id="navbar-brand">
            <img
              id="nav-b"
              src={require("../../../assets/on-my-feet.png")}
              className="nav-b scrollToBtm"
              height="40px"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/components/"
                  className="navbar-li-conf"
                  style={{ fontWeight: "bold" }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  Sales
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="navbar-li-conf">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
