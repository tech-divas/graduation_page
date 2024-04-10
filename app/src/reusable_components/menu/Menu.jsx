import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav role="navigation" className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
          <ul className="projectsDropdown">
            <li>
              <Link to="/projects">2023</Link>
            </li>
            <li>
              <a href="#">2024</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Mentees</a>
          <ul className="menteesDropdown">
            <li>
              <Link to="/mentees">2023</Link>
            </li>
            <li>
              <a href="#">2024</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Mentors</a>
          <ul className="mentorsDropdown">
            <li>
              <Link to="/mentors">2023</Link>
            </li>
            <li>
              <a href="#">2024</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Experts/Speakers</a>
          <ul className="expertsDropdown">
            <li>
              <Link to="/experts">2023</Link>
            </li>
            <li>
              <a href="#">2024</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
