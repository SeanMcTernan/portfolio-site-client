import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Nav, Navbar } from "react-bootstrap";

const FooterElement: React.FC = () => {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          <Col>
            <h4>Lorem, ipsum.</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </Col>
          <Col>
            <h4>Lorem, ipsum.</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </Col>
          <Col>
            <h4>Lorem, ipsum.</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </Col>
          <Col>
            <h4>Lorem, ipsum.</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterElement;
