import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

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
          <Link to="/graduation_page">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <ul className="projectsDropdown">
            <li>
              <Link to="/projects/2023">2023</Link>
            </li>
            <li>
              <Link to="/projects/2024">2024</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mentees">Mentees</Link>
          <ul className="menteesDropdown">
            <li>
              <Link to="/mentees/2023">2023</Link>
            </li>
            <li>
              <Link to="/mentees/2024">2024</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mentors">Mentors</Link>
          <ul className="mentorsDropdown">
            <li>
              <Link to="/mentors/2023">2023</Link>
            </li>
            <li>
              <Link to="/mentors/2024">2024</Link>
            </li>
          </ul>
        </li>
        <li className="experts">
          <Link to="/experts">Experts/Speakers</Link>

          <ul className="expertsDropdown">
            <li>
              <Link to="/experts/2023">2023</Link>
            </li>
            <li>
              <Link to="/experts/2024">2024</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
