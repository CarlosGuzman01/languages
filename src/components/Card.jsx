import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card">
        <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
    </div>
  );
};

export default Card;
