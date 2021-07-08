import Project from "./Project";
import { Link } from "react-router-dom";
const Table = ({ projects, onDelete }) => {
  return (
    <>
      <Link to="/addProject">Add</Link>
      <table className="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Manager</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <Project key={project.id} project={project} onDelete={onDelete} id={project.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
