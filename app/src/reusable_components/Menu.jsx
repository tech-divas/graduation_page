import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [projectsDropdownVisible, setProjectsDropdownVisible] = useState(false);
  const [menteesDropdownVisible, setMenteesDropdownVisible] = useState(false);
  const [mentorsDropdownVisible, setMentorsDropdownVisible] = useState(false);
  const [expertsDropdownVisible, setExpertsDropdownVisible] = useState(false);

  const toggleProjectsDropdown = () => {
    setProjectsDropdownVisible(!projectsDropdownVisible);
  };
  const toggleMenteesDropdown = () => {
    setMenteesDropdownVisible(!menteesDropdownVisible);
  };
  const toggleMentorsDropdown = () => {
    setMentorsDropdownVisible(!mentorsDropdownVisible);
  };
  const toggleExpertsDropdown = () => {
    setExpertsDropdownVisible(!expertsDropdownVisible);
  };

  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#" onClick={toggleProjectsDropdown}>
            Projects
          </a>
          {projectsDropdownVisible && (
            <ul>
              <li>
                <a href="#">2023</a>
              </li>
              <li>
                <a href="#">2024</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={toggleMenteesDropdown}>
            Mentees
          </a>
          {menteesDropdownVisible && (
            <ul>
              <li>
                <a href="#">2023</a>
              </li>
              <li>
                <a href="#">2024</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={toggleMentorsDropdown}>
            Mentors
          </a>
          {mentorsDropdownVisible && (
            <ul>
              <li>
                <a href="#">2023</a>
              </li>
              <li>
                <a href="#">2024</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={toggleExpertsDropdown}>
            Experts/Speakers
          </a>
          {expertsDropdownVisible && (
            <ul>
              <li>
                <a href="#">2023</a>
              </li>
              <li>
                <a href="#">2024</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
