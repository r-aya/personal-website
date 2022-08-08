import React from "react";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "antd/dist/antd.css";

function App() {
  return (
    // <div className="wrapper">
    //   <div>
    //     <IconButton ></IconButton>
    //   </div>
    //   {/* <div className="projectSection">
    //     {/* <ProjectGrid></ProjectGrid>

    //   </div> */}
    // </div>
    <>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
