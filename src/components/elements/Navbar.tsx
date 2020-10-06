import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../../libs/contextLib";
import onError from "../../libs/errorLib";
import Settings from "./Settings";
import logo from "../../svgs/logo.svg";
import menu from "../../svgs/menu.svg";
import { Link, useHistory } from "react-router-dom";

const NavbarElement: React.FC = () => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const [modalShow, setModalShow] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };

  //Load users permissions from DB when app loads.

  useEffect(() => {
    const onLoad = async () => {
      if (!isAuthenticated) {
        return;
      }

      try {
        const permissions = await getPermissions();
        setPermissions(permissions);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    };

    onLoad();
  }, [isAuthenticated]);

  const getPermissions = () => {
    return API.get("permissions", "/permissions");
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
            <Link to="references">
              <Nav.Link
                className="nav-link text-white text-uppercase ml-5"
                href="references"
              >
                References
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
                <Link to="#" onClick={() => setModalShow(true)}>
                  <Nav.Link
                    className="nav-link text-white text-uppercase ml-5"
                    href="#"
                  >
                    Settings
                  </Nav.Link>
                </Link>
                <Link to="#" onClick={handleLogout}>
                  <Nav.Link
                    className="nav-link text-white text-uppercase mx-5"
                    href="#"
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
        permissions
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          history.push("/");
        }}
      />
    </>
  );
};

export default NavbarElement;
