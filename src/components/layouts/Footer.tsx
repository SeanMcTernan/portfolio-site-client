import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "../../styles/App.css";

const FooterElement: React.FC = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <Container>
          <Row className="text-muted">
            <Col></Col>
            <Col>
              <a>Home</a>
            </Col>
            <Col>
              <a>Projects</a>
            </Col>
            <Col>
              <a>Contact</a>
            </Col>
            <Col>
              <a>Login</a>
            </Col>
            <Col></Col>
          </Row>
          <div className="footer-bottom">
            <p className="text-xs-center text-muted">
              <small>&copy; {new Date().getFullYear()} Seán Mc Ternan</small>
            </p>
          </div>
        </Container>
      </div>
    </FooterContainer>
  );
};

export default FooterElement;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--HFGrey);
    padding-top: 3rem;
    color: var(--mainWhite);
    text-align: center;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
  }
`;
