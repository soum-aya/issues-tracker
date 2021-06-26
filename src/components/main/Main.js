import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Issues from "../../pages/Issues";
import Projects from "../../pages/Projects";

import "./Main.css";

function Main({ showSidbar }) {
  return (
    <div className="main" style={{ marginLeft: showSidbar ? "250px" : "0px" }}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/issues">
          <Issues />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
