import React from "react";
import FooterElement from "./components/layouts/Footer";
import NavbarElement from "./components/layouts/Navbar";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarElement />
        <FooterElement />
      </div>
    );
  }
}

export default App;
