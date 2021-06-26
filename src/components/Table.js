import Project from "./Project";

const Table = ({ projects, onDelete }) => {
  return (
    <>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Manager</th>
          <th>Deadline</th>
        </tr>
        <tbody>
          {projects.map((project) => (
            <Project key={project.id} project={project} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
