import React from "react";
import Button from "./Button";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
        <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <Button link={link} title="Learn more"/>
        
        
    </div>
  );
};

export default Card;
