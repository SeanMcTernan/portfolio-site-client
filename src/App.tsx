import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";
import Routes from "./libs/Routes";
import FooterElement from "./components/layouts/Footer";
import NavbarElement from "./components/layouts/Navbar";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div>
      <NavbarElement />
      <Routes />
      <FooterElement />
    </div>
  );
};

export default App;
