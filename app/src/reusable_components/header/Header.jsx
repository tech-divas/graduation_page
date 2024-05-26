import "./Header.css";
import rtgLogo from "../header/rtgLogo.png";
import mentorshipLogo from "../header/mentorshipLogo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="rtgLogo">
        <a
          href="https://rigatechgirls.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rtgLogo} alt="Riga TechGirls Logo" className="logoImage" />
        </a>
      </div>
      <div className="headerText">
        <p className="pageName">PRACTICE PROJECTS</p>
      </div>
      <div className="mentorshipLogo">
        <a
          href="https://rigatechgirls.com/mentorship/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mentorshipLogo}
            alt="Mentorship Program Logo"
            className="logoImage"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
