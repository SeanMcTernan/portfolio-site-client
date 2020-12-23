import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../libs/contextLib";
import Settings from "./Settings";
import logo from "../../images/svgs/logo.svg";
import PDF from "../../docs/SeanMcTernan_Resume.pdf";
import menu from "../../images/svgs/menu.svg";
import { Link, useHistory } from "react-router-dom";

const NavbarElement: React.FC = () => {
  const history = useHistory();
  const {
    permissions,
    isAuthenticated,
    userHasAuthenticated,
  } = useAppContext();
  const [modalShow, setModalShow] = useState(false);

  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="fixed-top">
        <Link to="home">
          <Navbar.Brand className="ml-5">
            <img src={logo} style={{ width: "25%" }} alt="Site Logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={menu} style={{ height: "4vmin" }} alt="Site Menu Icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="projects"
            >
              Projects
            </Link>
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="contact"
            >
              Contact
            </Link>
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="about"
            >
              About
            </Link>
            {isAuthenticated ? (
              <>
                {permissions.resume ? (
                  <>
                    <Link
                      to={PDF}
                      download
                      target={PDF}
                      className="nostyle nav-link text-white text-uppercase ml-5"
                    >
                      Resume
                    </Link>
                  </>
                ) : null}
                {permissions.references ? (
                  <>
                    <Link
                      className="nav-link text-white text-uppercase ml-5"
                      to="references"
                    >
                      References
                    </Link>
                  </>
                ) : null}

                <Link
                  onClick={() => setModalShow(true)}
                  className="nostyle nav-link text-white text-uppercase ml-5"
                  to="#settings"
                >
                  Settings
                </Link>

                <Link
                  onClick={handleLogout}
                  data-attr="nostyle"
                  className="nav-link text-white text-uppercase mx-5"
                  to="#"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="login"
                  className="nav-link text-white text-uppercase ml-5"
                  href="login"
                >
                  Login
                </Link>
                <Link
                  to="signup"
                  className="nav-link text-white text-uppercase mx-5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Settings
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
};

export default NavbarElement;
