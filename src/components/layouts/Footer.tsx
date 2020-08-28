import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "../../styles/App.css";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const FooterElement: React.FC = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <Container>
          <Row className="text-muted">
            <Col></Col>
            <Col>
              <Link to="home">Home</Link>
            </Col>
            <Col>
              <Link to="projects">Projects</Link>
            </Col>
            <Col>
              <Link to="contact">Contact</Link>
            </Col>
            <Col>
              <Link to="login">Login</Link>
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
    text-decoration: none;
    background: var(--HFGrey);
    padding-top: 1rem;
    color: var(--mainWhite);
    text-align: center;
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;
