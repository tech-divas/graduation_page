import "./Header.css";
import rtgLogo from "../header/rtgLogo.png";
import mentorshipLogo from "../header/mentorshipLogo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="rtgLogo">
        <a href="https://rigatechgirls.com/">
          <img
            src={rtgLogo}
            alt="Riga TechGirls Logo"
            style={{ width: "250px" }}
          />
        </a>
      </div>
      <div className="headerText">
        <p className="pageName">PRACTICE PROJECTS</p>
      </div>
      <div className="mentorshipLogo">
        <a href="https://rigatechgirls.com/mentorship/">
          <img
            src={mentorshipLogo}
            alt="Mentorship Program Logo"
            style={{ width: "250px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
