import { useState } from "react";

const AddProject = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manager, setManager] = useState("");
  const [deadLine, setdeadLine] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a project");
      return;
    }
    onAdd({ name, description, manager, deadLine });

    setName("");
    setDescription("");
    setManager("");
    setdeadLine("");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>Project</label>
        <input type="text" placeholder="Add project.." value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description</label>
        <textarea placeholder="Write something.." style={{ height: "200px" }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <label>Project Manager</label>
        <input type="text" placeholder="project manager.." value={manager} onChange={(e) => setManager(e.target.value)} />
        <label>Deadline</label>
        <input type="date" value={deadLine} onChange={(e) => setdeadLine(e.target.value)} />
        <input type="submit" value="Save project" />
      </form>
    </div>
  );
};

export default AddProject;
