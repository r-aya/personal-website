import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSmile } from "react-icons/ai";
import IconButton from "../components/IconButton";

function Landing() {
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
      <div style={{ maxWidth: "550px" }}>
        <div>
          <h1 className="landing-title">Hi, I'm Raya!</h1>

          <p>
            I'm studying Software Engineering at the University of Waterloo with
            a minor in Combinatorics and Optimization. My interests include data
            science, full-stack development, product design, and social
            enterprise.<br></br>
            <br></br>
            Recently, I interned at
            <span className="link">
              <a
                style={{ fontWeight: 600 }}
                href="https://www.fairly.ai/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Fairly&nbsp;
              </a>
            </span>
            as a Full-Stack Developer, where I worked on a bias and performance
            analysis feature and data drift visualizations. Previously, I
            co-founded Tabula, earning $20K+ USD in pre-orders for a smart
            journal melding traditional and digital note-taking.
            <br></br>
            <br></br>
            This fall I'll be attending the
            <span className="link">
              <a
                style={{ fontWeight: 600 }}
                href="https://ghc.anitab.org/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Grace Hopper Celebration&nbsp;
              </a>
            </span>
            as a scholar and continuing my work as a Software Developer at
            <span className="link">
              <a
                style={{ fontWeight: 600 }}
                href="https://uwblueprint.org/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;UW Blueprint&nbsp;
              </a>
            </span>
            .<br></br>
            <br></br>
            In my free time, you can find me biking, lifting, window-shopping,
            or building my Stardew farm. Can't wait to meet you{" "}
            <AiOutlineSmile
              style={{
                verticalAlign: "middle",
                paddingBottom: "2px",
                color: "#595963",
              }}
              size={18}
            />
          </p>
        </div>
        <div className="iconGroup">
          <IconButton
            icon={<FaGithub />}
            text="Github"
            url="https://github.com/r-aya"
          />
          <IconButton
            icon={<FaLinkedinIn />}
            text="LinkedIn"
            url="https://www.linkedin.com/in/raya-ferdous/"
          />
          <IconButton
            icon={<HiOutlineMail />}
            text="Email"
            url="mailto:rferdous@uwaterloo.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
