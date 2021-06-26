import { useState } from "react";

import Table from "../components/Table";
import AddProject from "../components/AddProject";
import "../components/Project";
const Projects = () => {
  const [showAddProject, setShowAddProject] = useState(false);

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

  const AddNewProject = () => {
    setShowAddProject(!showAddProject);
  };
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <>
      <header className="header">
        <h1>Projects</h1>
        {showAddProject ? (
          <button onClick={AddNewProject} className="btn" style={{ backgroundColor: "red" }}>
            Close
          </button>
        ) : (
          <button onClick={AddNewProject} className="btn" style={{ backgroundColor: "#04aa6d" }}>
            Add
          </button>
        )}
      </header>
      {showAddProject ? <AddProject onAdd={addProject} /> : <Table projects={projects} onDelete={deleteProject} />}
    </>
  );
};

export default Projects;
