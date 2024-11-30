import React from "react";
import ReactDOM from "react-dom";

function Tooltip({ text, position, target }) {
  const tooltipStyles = {
    position: "absolute",
    top: position.y,
    left: position.x,
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderRadius: "3px",
    fontSize: "12px",
    pointerEvents: "none",
  };

  return ReactDOM.createPortal(
    <div style={tooltipStyles}>{text}</div>,
    document.body
  );
}

export default Tooltip;