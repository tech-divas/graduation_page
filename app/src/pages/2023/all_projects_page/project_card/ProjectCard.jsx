import { Link } from "react-router-dom";
import mieraLacis from "./mieraLacis.png";
import "./ProjectCard.css";
export default function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      <img className="projectImage" src={mieraLacis} alt="Miera Lācis" />
      <Link to="/project">
        <button className="projectNameButton">{project.name}</button>
      </Link>
    </div>
  );
}
