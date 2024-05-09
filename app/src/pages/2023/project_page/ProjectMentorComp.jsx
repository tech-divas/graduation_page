
import React from "react";
import "./ProjectMentorComp.css"

const MentorCard = ({ name, role, field, linkedin, onReadMore }) => {
  return (
    <div className="mentorCard">
      <h2>{role}<br></br>{name}</h2>
      <h3>{field}</h3>
      <p><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <button onClick={onReadMore}>Read more</button>
    </div>
  );
};


export default MentorCard;
