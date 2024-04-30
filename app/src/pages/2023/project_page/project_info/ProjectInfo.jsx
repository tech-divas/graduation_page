import "./ProjectInfo.css";
import { Link } from "react-router-dom";
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
        <button className="projectName">{projectData.name}</button>
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
        <Link to="#">
          <button className="linkToProjectButton">MieraLacis.lv</button>
        </Link>
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
