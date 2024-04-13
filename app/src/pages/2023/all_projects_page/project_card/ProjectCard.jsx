import { Link } from "react-router-dom";
import "./ProjectCard.css";
export default function ProjectCard() {
  return (
    <div className="projectCard">
      <img className="projectImage" src="/mieraLacis.png" alt="Miera Lācis" />
      <Link to="/project">
        <button className="projectNameButton">Miera Lācis</button>
      </Link>
    </div>
  );
}
