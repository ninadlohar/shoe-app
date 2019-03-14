import React from "react";
import "../../MainContainer/global.scss";
import { Container, Row, Col } from "reactstrap";

const CategoryImagesFixed = () => {
  return (
    // <Container fluid={true} className="nopadding">
    //   <Row className="nomargin">
    <div className="cat-images">
      <Col md="12" sm="12" lg="12" xl="12" sm="12">
        <Row className="nomargin">
          <Col sm="12" xs="12" md="6" lg="4" xl="4" className="al-it-center">
            <img src={require("../../assets/cat1.png")} alt="cat1" />
          </Col>
          <Col sm="12" xs="12" md="6" lg="4" xl="4" className="al-it-center">
            <img src={require("../../assets/cat2.png")} alt="cat2" />
          </Col>
          <Col sm="12" xs="12" md="6" lg="4" xl="4" className="al-it-center">
            <img src={require("../../assets/cat3.png")} alt="cat3" />
          </Col>
        </Row>
      </Col>
    </div>
    //   </Row>
    // </Container>
  );
};

export default CategoryImagesFixed;
