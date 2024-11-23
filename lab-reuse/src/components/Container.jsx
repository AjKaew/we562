import React from "react";

function Container({ children, style }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        ...style, // รวมสไตล์เพิ่มเติม
      }}
    >
      {children}
    </div>
  );
}

export default Container;