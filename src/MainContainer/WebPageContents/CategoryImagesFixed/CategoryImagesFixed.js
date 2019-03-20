import React from "react";
import "../../global.scss";
import { Row, Col } from "reactstrap";

class CategoryImagesFixed extends React.Component {
  render() {
    return (
      <div className="cat-images">
        <Col md="12" sm="12" lg="12" xl="12" sm="12">
          <Row
            className="nomargin"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div>
              <Col
                sm="12"
                xs="12"
                md="12"
                lg="12"
                xl="12"
                className="al-it-center"
              >
                <div className="cat-card">
                  <img
                    src={require("../../../assets/cat1.png")}
                    alt="cat1"
                    className="img-responsive"
                  />
                  <div className="cat-card-hover-clone">
                    <div className="_shoes_white_box">
                      <div className="_shoes">Kids Shoes</div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            <div>
              <Col
                sm="12"
                xs="12"
                md="12"
                lg="12"
                xl="12"
                className="al-it-center"
              >
                <div className="cat-card">
                  <img
                    src={require("../../../assets/cat2.png")}
                    alt="cat2"
                    className="img-responsive"
                  />
                  <div className="cat-card-hover-clone">
                    <div className="_shoes_white_box">
                      <div className="_shoes">Women Shoes</div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
            <div>
              <Col
                sm="12"
                xs="12"
                md="12"
                lg="12"
                xl="12"
                className="al-it-center"
              >
                <div className="cat-card">
                  <img
                    src={require("../../../assets/cat3.png")}
                    alt="cat3"
                    className="img-responsive"
                  />
                  <div className="cat-card-hover-clone">
                    <div className="_shoes_white_box">
                      <div className="_shoes">Men Shoes</div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
      </div>
    );
  }
}

export default CategoryImagesFixed;
