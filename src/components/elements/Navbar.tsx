import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../libs/contextLib";
import Settings from "./Settings";
import logo from "../../svgs/logo.svg";
import menu from "../../svgs/menu.svg";
import { Link, useHistory } from "react-router-dom";

const NavbarElement: React.FC = () => {
  const history = useHistory();
  const {
    userPermissions,
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
          <Navbar.Brand className="ml-5" href="#home">
            <img src={logo} style={{ width: "25%" }} alt="Site Logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={menu} style={{ height: "4vmin" }} alt="Site Menu Icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="projects">
              <Nav.Link
                className="nav-link text-white text-uppercase ml-5"
                href="projects"
              >
                Projects
              </Nav.Link>
            </Link>
            <Link to="contact">
              <Nav.Link
                className="nav-link text-white text-uppercase ml-5"
                href="contact"
              >
                Contact
              </Nav.Link>
            </Link>
            {isAuthenticated ? (
              <>
                {userPermissions.resume ? (
                  <>
                    <Link to="#">
                      <Nav.Link
                        className="nostyle nav-link text-white text-uppercase ml-5"
                        href="#settings"
                      >
                        Resume
                      </Nav.Link>
                    </Link>
                  </>
                ) : null}
                {userPermissions.references ? (
                  <>
                    <Link to="references">
                      <Nav.Link
                        className="nav-link text-white text-uppercase ml-5"
                        href="references"
                      >
                        References
                      </Nav.Link>
                    </Link>
                  </>
                ) : null}
                <Link to="#" onClick={() => setModalShow(true)}>
                  <Nav.Link
                    className="nostyle nav-link text-white text-uppercase ml-5"
                    href="#settings"
                  >
                    Settings
                  </Nav.Link>
                </Link>
                <Link to="home" onClick={handleLogout}>
                  <Nav.Link
                    data-attr="nostyle"
                    className="nav-link text-white text-uppercase mx-5"
                    href="home"
                  >
                    Logout
                  </Nav.Link>
                </Link>
              </>
            ) : (
              <>
                <Link to="login">
                  <Nav.Link
                    className="nav-link text-white text-uppercase ml-5"
                    href="login"
                  >
                    Login
                  </Nav.Link>
                </Link>
                <Link to="signup">
                  <Nav.Link
                    className="nav-link text-white text-uppercase mx-5"
                    href="signup"
                  >
                    Sign Up
                  </Nav.Link>
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
