import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./App.css";
import logo from "./svgs/logo.svg";

const App: React.FC = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image
              src={logo}
              className="App-logo"
              alt="logo"
              width="80"
              fluid
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default App;
