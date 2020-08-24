import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../svgs/logo.svg";

const NavbarElement: React.FC = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} height="30vmin"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link text-white text-upper" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link text-white text-upper" href="#link">
              Link
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarElement;
