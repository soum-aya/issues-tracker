import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Project.css";
const Project = ({ project, onDelete }) => {
  return (
    <tr>
      <Link to="/uppdatedform">
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>{project.manager}</td>
        <td>{project.deadLine}</td>
      </Link>
      <td>
        <FaTimes style={{ cursor: "pointer" }} onClick={() => onDelete(project.id)} />
      </td>
    </tr>
  );
};

export default Project;
