import React from "react";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({ onAdd, showSidbar }) {
  return (
    <div>
      <div className="sidenav" style={{ width: showSidbar ? "250px" : "0px" }}>
        <FaTimes style={{ cursor: "pointer", color: "white" }} onClick={onAdd} className="closebtn" />
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/issues">Issues</Link>
      </div>
    </div>
  );
}

export default Sidebar;
