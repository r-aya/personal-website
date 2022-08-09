import React, { useState } from "react";
import { Timeline } from "antd";
import { FaSuitcase } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

function Experience() {
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
      <div
        style={{
          width: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "550px" }}>
          <h1 className="landing-title">Experience</h1>
          <p>
            A timeline view of my relevant experience, including education,
            internships, awards, and extracurriculars.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingRight: "50px",
            marginTop: "50px",
          }}
        >
          <Timeline mode="left">
            <Timeline.Item
              dot={<MdSchool size={18} />}
              label={
                <div style={{ marginRight: "30px", alignItems: "right" }}>
                  <p className="exp-date">September 2021 – April 2025</p>
                  <button className="exp-type">Education</button>
                </div>
              }
            >
              <div>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>
                  University of Waterloo
                </p>
                <p>Software Engineering, Combinatorics and Optimization</p>
                <p style={{ fontSize: "12px" }}>
                  <span style={{ fontWeight: "500" }}>
                    Relevant Computer Science Courses
                  </span>
                  : Data Structures and Algorithms, Data Abstraction, Database
                  Management, Sequential Programs, Software Engineering
                  Principles
                </p>
                <p style={{ fontSize: "12px" }}>
                  <span style={{ fontWeight: "500" }}>
                    Relevant Math Courses
                  </span>
                  : Combinatorics, Logic and Computation, Linear Algebra,
                  Statistics, Calculus I/II
                </p>
              </div>
            </Timeline.Item>
            <Timeline.Item label="July 2021 – Present &emsp;">
              <div>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>UW Blueprint</p>
                <p>Software Developer</p>
                <ul
                  style={{
                    listStyleType: "disc",
                    fontSize: "12px",
                    paddingLeft: 12,
                  }}
                >
                  <li>
                    Revamped a course-hosting web-app with 2K+ users for an
                    emergency shelter’s domestic violence prevention program
                    using React, Express.js, Apollo, Node.js, GraphQL, and
                    Chakra UI, reducing cost by 94% for webhosting.
                  </li>
                  <li>
                    Implemented a digitized platform with 25K+ users for an NPO
                    to manage 550K+ book reviews and bookings with 600+ authors
                    using PostgreSQL, Express.js, React, Node.js, and Docker,
                    boosting coverage of literary reviews by 92%.
                  </li>
                  <li>
                    Built CI/CD pipeline with Jenkins and Docker for 7 projects
                    with 80+ members, improving team’s efficiency by 125%.
                  </li>
                </ul>
              </div>
            </Timeline.Item>

            <Timeline.Item
              label="May 2022 – August 2022 &emsp;"
              dot={<FaSuitcase size={15} />}
            >
              <div>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Fairly AI</p>
                <p>Full Stack Developer Intern</p>
                <ul
                  style={{
                    listStyleType: "disc",
                    fontSize: "12px",
                    paddingLeft: 12,
                  }}
                >
                  <li>
                    Implemented an algorithm to quantify risk of 2700+ datasets
                    by computing performance and accuracy metrics of protected
                    attributes from model outputs using AI Fairness 360,
                    Fairlearn and Flask. Metrics included disparate impact, base
                    rate, positive/negative predictive values and their
                    complements.
                  </li>
                  <li>
                    Redesigned and developed a dashboard for bias and
                    performance analysis of SAS’ datasets and models using
                    Figma, React, and Flask, yielding an increase in volume of
                    aggregate data by 80% and readability by 50%.
                  </li>
                  <li>
                    Constructed data drift visualizations for Credit Suisse’s
                    datasets to preserve performance of client's models using
                    React, Flask and Nivo.
                  </li>
                </ul>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
