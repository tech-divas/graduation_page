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
              <a href="#">2023</a>
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
              <a href="#">2023</a>
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
              <a href="#">2023</a>
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
              <a href="#">2023</a>
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
