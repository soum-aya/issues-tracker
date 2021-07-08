import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Project.css";
const Project = ({ project, onDelete, id }) => {
  const to = `/editproject?name=${id}`;
  return (
    <tr>
      <td>
        <Link to={to}>{project.name}</Link>
      </td>
      <td>
        <Link to={to}>{project.description}</Link>
      </td>
      <td>
        <Link to={to}>{project.manager}</Link>
      </td>
      <td>
        <Link to={to}>{project.deadLine}</Link>
      </td>

      <td>
        <FaTimes style={{ cursor: "pointer" }} onClick={() => onDelete(project.id)} />
      </td>
    </tr>
  );
};

export default Project;
