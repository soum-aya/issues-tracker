import React from "react";

import { Link } from "react-router-dom";

const UppdatedForm = ({ onUpdate }) => {
  return (
    <div className="container">
      <Link to="/projects">Close</Link>
      <form>
        <label>Project</label>
        <input type="text" />

        <label>Description</label>
        <textarea style={{ height: "200px" }}></textarea>
        <label>Project Manager</label>
        <input type="text" />
        <label>Deadline</label>
        <input type="date" />
        <input type="submit" value="Save project" />
      </form>
    </div>
  );
};

export default UppdatedForm;
