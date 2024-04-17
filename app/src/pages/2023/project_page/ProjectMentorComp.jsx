
import React from "react";
import "./ProjectMentorComp.css"

const MentorCard = ({ name, type, link, onReadMore }) => {
  return (
    <div className="mentorCard">
      <h2>{type}<br></br>{name}</h2>
      <p><a href={link} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <button onClick={onReadMore}>Read more</button>
    </div>
  );
};

export default MentorCard;
