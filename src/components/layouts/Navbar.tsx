import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../svgs/logo.svg";
import menu from "../../svgs/menu.svg";

const NavbarElement: React.FC = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand className="ml-5" href="#home">
          <img src={logo} style={{ height: "4vmin" }} alt="Site Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={menu} style={{ height: "4vmin" }} alt="Site Menu Icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="nav-link text-white text-uppercase ml-5"
              href="#home"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white text-uppercase ml-5"
              href="#link"
            >
              References
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white text-uppercase ml-5"
              href="#link"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white text-uppercase mx-5"
              href="#link"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarElement;
