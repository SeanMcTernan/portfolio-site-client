import React from "react";
import FooterElement from "./components/Footer";
import NavbarElement from "./components/Navbar";
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
