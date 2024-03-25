import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="rtgLogo">
        <img src="../assets/rtgLogo.png " alt="Riga TechGirls Logo" />
      </div>
      <div className="headerText">
        <p className="pageName">PRACTICE PROJECTS</p>
      </div>
      <div className="mentorshipLogo">
        <img src="../assets/fashionLogo.png" alt="Mentorship Program Logo" />
      </div>
    </div>
  );
};

export default Header;
