import "./ProjectInfo.css";
// import { Link } from "react-router-dom";
import mieraLacisImage from "./mieraLacis.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProjectInfo = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`https://graduation-page.onrender.com/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching project data", error));
  }, [projectId]);

  if (!projectData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="projectNameContainer">
        <div className="projectName">{projectData.name}</div>
      </div>

      <div className="projectImages">
        <div className="imageContainer">
          <img src={mieraLacisImage} alt="Project Image" />
        </div>
        <div className="imageContainer">
          <img src={mieraLacisImage} alt="Project Image" />
        </div>
        <div className="imageContainer">
          <img src={mieraLacisImage} alt="Project Image" />
        </div>
      </div>
      <div className="linkToProjectButtonContainer">
        {projectData.link && (
          <a
            className="linkToProjectButton"
            href={projectData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        )}
      </div>
      <div className="projectDescriptionContainer">
        <p className="projectDescription">{projectData.description}</p>
      </div>
    </div>
  );
};
ProjectInfo.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectInfo;
