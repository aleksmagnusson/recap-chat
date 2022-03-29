import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="chat-container">
      {/* Containern som innehåller beståndsdelarna */}

      {props.children}
    </div>
  );
}

export default Container;
