import React from "react";

const Button = ({ title, link }) => {
  return (
   <a href={link} className="custom-button">
      {title}
    </a>
  );
};

export default Button;
