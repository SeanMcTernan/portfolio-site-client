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
    <div className="fixed-bottom footer">
      <Navbar expand="sm" className="bottomNav">
        <Nav className="mx-auto">
          <Link className="nav-link text-muted ml-5" to="home">
            Home
          </Link>
          <Link className="nav-link text-muted ml-5" to="projects">
            Projects
          </Link>
          <Link className="nav-link text-muted ml-5" to="contact">
            Contact
          </Link>
          {isAuthenticated ? (
            <Link
              className="nav-link text-muted mx-5"
              to="#"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link className="nav-link text-muted mx-5" to="login">
                Login
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
      <p className="text-muted" style={{ textAlign: "center" }}>
        <small>&copy; {new Date().getFullYear()} Seán Mc Ternan</small>
      </p>
    </div>
  );
};
export default FooterElement;
