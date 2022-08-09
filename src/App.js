import React from "react";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./customizedAntD.css";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "calc(50% - 120px)",
          }}
        >
          {/* <NavBar /> */}
        </div>

        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
