import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";
import { ReactComponent as Github } from "../../svgs/github.svg";
import { ReactComponent as Instagram } from "../../svgs/instagram.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";

import styled from "styled-components";
import "../../styles/App.css";

const FooterElement: React.FC = () => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };
  return (
    <div style={{ position: "fixed" }}>
      <FooterContainer className="fixed-bottom">
        <Navbar expand="sm">
          <Nav className="mx-auto bottomNav">
            <Link to="home">
              <Nav.Link className="nav-link text-muted ml-5" href="home">
                Home
              </Nav.Link>
            </Link>
            <Link to="projects">
              <Nav.Link className="nav-link text-muted ml-5" href="projects">
                Projects
              </Nav.Link>
            </Link>
            <Link to="contact">
              <Nav.Link className="nav-link text-muted ml-5" href="contact">
                Contact
              </Nav.Link>
            </Link>
            {isAuthenticated ? (
              <Link to="#" onClick={handleLogout}>
                <Nav.Link className="nav-link text-muted mx-5" href="#">
                  Logout
                </Nav.Link>
              </Link>
            ) : (
              <>
                <Link to="login">
                  <Nav.Link className="nav-link text-muted mx-5" href="login">
                    Login
                  </Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar>
        <div className="footer-bottom">
          <p className="text-xs-center">
            <a
              href="https://github.com/SeanMcTernan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="socialIcons"
                style={{
                  width: "2.5vmin",
                  marginRight: "5px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/seanmcternan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn
                className="socialIcons"
                style={{
                  width: "2.5vmin",
                  marginLeft: "5px",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/whatsthekracken/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                className="socialIcons"
                style={{
                  width: "2.5vmin",
                  margin: "10px",
                }}
              />
            </a>
          </p>
          <p className="text-xs-center text-muted">
            <small>&copy; {new Date().getFullYear()} Seán Mc Ternan</small>
          </p>
        </div>
      </FooterContainer>
    </div>
  );
};
export default FooterElement;

const FooterContainer = styled.footer`
  .footer-bottom {
    padding-bottom: 0.2rem;
    text-align: center;
    background: #232325;
  }
`;
