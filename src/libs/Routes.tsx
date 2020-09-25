import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";
import Projects from "../components/pages/Projects";
import References from "../components/pages/References";
import Signup from "../components/pages/Signup";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/references" component={References} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
