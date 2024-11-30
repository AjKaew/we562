import React from "react";
import ReactDOM from "react-dom";

function Dropdown({ isOpen, items, position }) {
  if (!isOpen) return null;

  const styles = {
    position: "absolute",
    top: position.y,
    left: position.x,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "5px",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div style={styles}>
      {items.map((item, index) => (
        <div key={index} style={{ padding: "5px 0" }}>
          {item}
        </div>
      ))}
    </div>,
    document.body
  );
}

export default Dropdown;