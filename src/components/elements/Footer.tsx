import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";
import { ReactComponent as Github } from "../../svgs/github.svg";
import { ReactComponent as Instagram } from "../../svgs/instagram.svg";
import { ReactComponent as LinkedIn } from "../../svgs/linkedin.svg";
import "../../styles/Footer.css";

const FooterElement: React.FC = () => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };
  return (
    <div className="footer">
      <div className="phantom" />
      <div className="styles">
        <Navbar expand="sm" className="bottomNav">
          <Nav className="mx-auto">
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
        <p style={{ textAlign: "center" }}>
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
                marginLeft: "9px",
              }}
            />
          </a>
        </p>
        <p
          className="text-muted"
          style={{ textAlign: "center", paddingBottom: "1vh" }}
        >
          <small>&copy; {new Date().getFullYear()} Seán Mc Ternan</small>
        </p>
      </div>
    </div>
  );
};
export default FooterElement;
