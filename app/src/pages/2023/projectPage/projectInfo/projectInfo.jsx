import "./projectInfo.css";
import mieraLacisImage1 from "./mieraLacis1.jpeg";
import mieraLacisImage2 from "./mieraLacis2.png";
import mieraLacisImage3 from "./mieraLacis3.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const ProjectInfo = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `https://graduation-page.onrender.com/projects/${projectId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    };

    fetchProjectData();
  }, [projectId]);

  if (!projectData) {
    return (
      <div className="loadMoreContainer">
        <button className="loadMoreButton">Loading...</button>
      </div>
    );
  }

  return (
    <div>
      <div className="projectNameContainer">
        <h1 className="projectName">{projectData.name}</h1>
      </div>

      <div className="projectImages">
        <div className="imageContainer">
          <img src={mieraLacisImage1} alt="Project Image" />
        </div>
        <div className="imageContainer">
          <img src={mieraLacisImage2} alt="Project Image" />
        </div>
        <div className="imageContainer">
          <img src={mieraLacisImage3} alt="Project Image" />
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
