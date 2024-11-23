import React from "react";

function Card({ title, image, description, remove }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        position: 'relative'
      }}
    >
      <button style={{position:'absolute', right: '10px', backgroundColor:'red'}}
      onClick={remove}>X</button>
      <img
        src={image}
        alt={title}
        style={{ objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;