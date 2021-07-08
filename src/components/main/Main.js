import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Table from "../Table";
import Home from "../../pages/Home";
import Issues from "../../pages/Issues";
import Projects from "../../pages/Projects";
import FormikContainer from "../FormikContainer";
import EditProject from "../EditProject";

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

  const addProject = ({ name, description, manager, deadLine }) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newProject = { id, name, description, manager, deadLine };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const editProject = (newProject, id) => {
    const oldProject = projects.filter((project) => project.id == id);
    console.log(oldProject[0]);
    oldProject[0].name = newProject.name;
    oldProject[0].description = newProject.description;
    oldProject[0].manager = newProject.manager;
    oldProject[0].deadLine = newProject.deadLine;

    setProjects([...projects]);
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
        <Route path="/editproject">
          <EditProject projects={projects} onEdit={editProject} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
