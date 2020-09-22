import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";
import Routes from "./libs/Routes";
import FooterElement from "./components/layouts/Footer";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./svgs/logo.svg";
import menu from "./svgs/menu.svg";
import { Link } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const handleLogout = () => userHasAuthenticated(false);
  return (
    <div>
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
              <Link to="#" onClick={handleLogout}>
                <Nav.Link
                  className="nav-link text-white text-uppercase ml-5"
                  href="#"
                >
                  Logout
                </Nav.Link>
              </Link>
            ) : (
              <>
                <Link to="login">
                  <Nav.Link
                    className="nav-link text-white text-uppercase mx-5"
                    href="login"
                  >
                    Login
                  </Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
        <FooterElement />
      </AppContext.Provider>
    </div>
  );
};

export default App;
