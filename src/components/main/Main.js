import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Issues from "../../pages/Issues";
import Projects from "../../pages/Projects";
import AddProject from "../AddProject";

import "./Main.css";

function Main() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      description: "Restaurant branding",
      manager: "Sam",
      deadLine: "10/07/2021",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Hotel branding",
      manager: "Leena",
      deadLine: "23/09/2021",
    },
    {
      id: 3,
      name: "Project 3",
      description: "consulting",
      manager: "Achraf",
      deadLine: "15/08/2021",
    },
  ]);

  const addProject = (project) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newProject = { id, ...project };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/issues">
          <Issues />
        </Route>
        <Route path="/projects">
          <header className="header">
            <h1>Projects</h1>
            <button className="btn">New project</button>
          </header>
          <AddProject onAdd={addProject} />
          <Projects projects={projects} onDelete={deleteProject} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
