import React, { useState } from "react";
import { Timeline } from "antd";

function Projects() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        paddingTop: "180px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "550px" }}>
        <div>
          <h1 className="landing-title">Projects</h1>

          <p>
            Browse through a compilation of my past and ongoing projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
