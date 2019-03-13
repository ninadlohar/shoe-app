import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./global.scss";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Container className="xyz">
          <Row>
            <Col md={8} lg={10}>
              80p
            </Col>
            <Col md={4} lg={2}>
              40p
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContainer;
