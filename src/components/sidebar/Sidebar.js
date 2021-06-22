import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/issues">Issues</Link>
    </div>
  );
}

export default Sidebar;
