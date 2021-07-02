import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Table from "../Table";
import Home from "../../pages/Home";
import Issues from "../../pages/Issues";
import Projects from "../../pages/Projects";
import FormikContainer from "../FormikContainer";
import UppdatedForm from "../UppdatedForm";

import "./Main.css";

function Main({ showSidbar }) {
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

  const editForm = (id) => {
    projects.filter((project) => project.id === id);
  };

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

          <Table projects={projects} onDelete={deleteProject} />
        </Route>
        <Route path="/addproject">
          <FormikContainer onAdd={addProject} />
        </Route>
        <Route path="/uppdatedform">
          <UppdatedForm onUpdate={editForm} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
