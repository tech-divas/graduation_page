import React from "react";
import "./MenteesProjectComp.css";

const MenteeCard = ({ name, type, link, onReadMore }) => {
  return (
    <div className="menteeCard">
      <h2>{type}<br></br>{name}</h2>
      <p><a href={link} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <button onClick={onReadMore}>Read more</button>
    </div>
  );
};

export default MenteeCard;

