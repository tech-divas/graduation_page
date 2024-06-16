import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav role="navigation" className="menu">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu-items ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Projects</Link>
          <ul className="projectsDropdown">
            <li>
              <Link to="/projects">2023</Link>
            </li>
            <li>
              <Link to="#">2024</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#">Mentees</Link>
          <ul className="menteesDropdown">
            <li>
              <Link to="/mentees">2023</Link>
            </li>
            <li>
              <Link to="#">2024</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#">Mentors</Link>
          <ul className="mentorsDropdown">
            <li>
              <Link to="/mentors">2023</Link>
            </li>
            <li>
              <Link to="#">2024</Link>
            </li>
          </ul>
        </li>
        <li className="experts">
          <Link to="#">Experts/Speakers</Link>

          <ul className="expertsDropdown">
            <li>
              <Link to="/experts">2023</Link>
            </li>
            <li>
              <Link to="#">2024</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
