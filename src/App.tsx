import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";
import Routes from "./libs/Routes";
import FooterElement from "./components/layouts/Footer";
import NavbarElement from "./components/layouts/Navbar";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div>
      <NavbarElement />
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
      <FooterElement />
    </div>
  );
};

export default App;
