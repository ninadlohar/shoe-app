import { Container, Row, Col } from "reactstrap";
import React from "react";
import "./global.scss";
import WebPageContents from "./WebPageContents/WebpageContents";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Container fluid={true} className="nopadding">
          <Row className="nomargin">
            <Col md="12" sm="12" lg="12" xl="12" sm="12" className="nopadding">
              <div className="top-fluid-image">
                <img
                  src={require("../assets/Group_2668.png")}
                  alt="on_my_feet"
                  width="100%"
                />
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
