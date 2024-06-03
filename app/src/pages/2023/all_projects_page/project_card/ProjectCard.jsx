import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mieraLacis from "./mieraLacis.png";
import "./ProjectCard.css";
export default function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      <img className="projectImage" src={mieraLacis} alt="Miera Lācis" />
      <Link to={`/projects/${project.id}`}>
        <button className="projectNameButton">{project.name}</button>
      </Link>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
