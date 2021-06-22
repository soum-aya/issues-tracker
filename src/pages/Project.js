import { FaTimes } from "react-icons/fa";
import "./Project.css";
const Project = ({ project, onDelete }) => {
  return (
    <div>
      <table className="customers">
        <tbody>
          <tr>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.manager}</td>
            <td>{project.deadLine}</td>
            <td>
              <FaTimes style={{ cursor: "pointer" }} onClick={() => onDelete(project.id)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
