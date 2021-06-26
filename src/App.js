import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <Router>
      <div>
        <FaBars onClick={openNav} className="openbtn" />
        <span>open</span>
        <Sidebar showSidbar={showNav} onAdd={openNav} />
        <Main showSidbar={showNav} />
      </div>
    </Router>
  );
}

export default App;
