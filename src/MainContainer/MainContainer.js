import { Container, Row, Col } from "reactstrap";
import React from "react";
import RightNavbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import Header from "./Header/Header";
import Trending from "./Trending/Treding";
import CategoriesHeader from "./CategoriesHeader/CategoriesHeader";
import FirstRowCardScroll from "./FirstRowCardScroll/FirstRowCardScroll";
import BrandsHeader from "./BrandsHeader/BrandsHeader";
import BrandsRowScroll from "./BrandsRowScroll/BrandsRowScroll";

import "./global.scss";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Container fluid={true} className="nopadding">
          <Row>
            <Col md="12" sm="12" lg="12" xl="12" sm="12">
              <div className="top-fluid-image">
                <img
                  src={require("../assets/Group_2668.png")}
                  alt="on_my_feet"
                  width="100%"
                />
              </div>
            </Col>
          </Row>
          <Logo />
          <RightNavbar />
          <Header />
          <Trending />
          <FirstRowCardScroll />
          <CategoriesHeader />
          <BrandsHeader />
          <BrandsRowScroll />
        </Container>
      </div>
    );
  }
}

export default MainContainer;
