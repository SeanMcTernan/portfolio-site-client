import React from "react";
import { Switch, Route } from "react-router-dom";
import FooterElement from "./components/layouts/Footer";
import NavbarElement from "./components/layouts/Navbar";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Import Pages
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import References from "./components/pages/References";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarElement />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/references" component={References} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <FooterElement />
      </div>
    );
  }
}

export default App;
