import React from "react";
import { Tooltip } from "antd";

function IconButton({ icon, text, url }) {
  return (
    <Tooltip
      placement="bottom"
      title={text}
      color="#D3C3F4"
      overlayInnerStyle={{ fontSize: "12px", padding: "8px 10px" }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <button className="iconButton">{icon}</button>
      </a>
    </Tooltip>
  );
}

export default IconButton;
