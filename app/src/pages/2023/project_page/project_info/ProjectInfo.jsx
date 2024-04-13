import "./ProjectInfo.css";
import { Link } from "react-router-dom";
import mieraLacisImage from "./mieraLacis.png";
const ProjectInfo = () => {
  return (
    <div>
      <div className="projectNameContainer">
        <button className="projectName">Project Name</button>
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
        <p className="projectDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          fringilla dolor. Fusce ac consequat nisi. Duis fermentum erat eget
          congue mattis. Nulla facilisi. Phasellus vestibulum nibh id orci
          pulvinar, sit amet gravida nisi mollis. Cras ultricies justo sit amet
          quam blandit, et facilisis lorem vehicula. Vestibulum sit amet
          pulvinar nisi.
        </p>
      </div>
    </div>
  );
};
export default ProjectInfo;
