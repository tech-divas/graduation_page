import React from "react";
import "./MenteesProjectComp.css";

const MenteeCard = ({ name, role, field, linkedin, onReadMore }) => {
  return (
    <div className="menteeCard">
      <h2 className="menteeRole">{role}<br></br>{name}</h2>
      <h3 className="menteeField">{field}</h3>
      <p><a href={linkedin} target="_blank" rel="noopener noreferrer" className="menteeLink">LinkedIn</a></p>
      <button onClick={onReadMore} className="menteeButton">Read more</button>
    </div>
  );
};

export default MenteeCard;

