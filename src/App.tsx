import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { AppContext } from "./libs/contextLib";
import Routes from "./libs/Routes";
import FooterElement from "./components/elements/Footer";
import NavbarElement from "./components/elements/Navbar";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    onLoad();
    //Pass empty list of variable to useEffect so it will only run on first render.
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  };
  return (
    <>
      {!isAuthenticating && (
        <div>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <NavbarElement />
            <Routes />
            <FooterElement />
          </AppContext.Provider>
        </div>
      )}
    </>
  );
};

export default App;
