import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
