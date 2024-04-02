import "./Header.css";
import rtgLogo from "../assets/rtgLogo.png";
import mentorshipLogo from "../assets/mentorshipLogo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="rtgLogo">
        <a href="https://rigatechgirls.com/">
          <img
            src={rtgLogo}
            alt="Riga TechGirls Logo"
            style={{ width: "300px" }}
          />
        </a>
      </div>
      <div className="headerText">
        <a href="/">
          <p className="pageName">PRACTICE PROJECTS</p>
        </a>
      </div>
      <div className="mentorshipLogo">
        <a href="https://rigatechgirls.com/mentorship/">
          <img
            src={mentorshipLogo}
            alt="Mentorship Program Logo"
            style={{ width: "300px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
