import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Projects from "../components/pages/Projects";
import References from "../components/pages/References";
import Contact from "../components/pages/Contact";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/references" component={References} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
