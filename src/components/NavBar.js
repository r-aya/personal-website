import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.scss";

function NavBar() {
  const items = ["home", "projects", "experience"];
  const [active, setActive] = useState(items[0]);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "45px",
        paddingTop: "50px",
        width: "240px",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
      }}
    >
      {items.map((item) => (
        <>
          <button
            key={items.indexOf(item)}
            className={active === item ? "btn" : null}
            style={{
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: "11px",
              fontWeight: "500",
              color: "#595963",
            }}
            onClick={() => {
              navigate(`/${item !== "home" ? item : ""}`);
              setActive(item);
            }}
          >
            {item}
          </button>
        </>
      ))}
    </div>
  );
}

export default NavBar;
