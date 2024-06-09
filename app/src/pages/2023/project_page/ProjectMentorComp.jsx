
import React from "react";
import "./ProjectMentorComp.css"

const MentorCard = ({ name, role, field, linkedin, onReadMore }) => {
  return (
    <div className="mentorCard">
      <h2 className="mentorRole">{role}<br></br>{name}</h2>
      <h3 className="mentorField">{field}</h3>
      <p><a href={linkedin} target="_blank" rel="noopener noreferrer" className="mentorLink">LinkedIn</a></p>
      <div className="projectMentorButton"><button onClick={onReadMore} className="mentorButton">Read more</button></div>
    </div>
  );
};


export default MentorCard;
