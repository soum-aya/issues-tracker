import Project from "./Project";

const Projects = ({ projects, onDelete }) => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Projects;
