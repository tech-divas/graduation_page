import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="rtgLogo">
        <img src="../assets/rtgLogo.png " alt="Riga TechGirls Logo" />
      </div>
      <div className="headerText">
        <h1>Practice Projects</h1>
      </div>
      <div className="mentorshipLogo">
        <img src="../assets/mentorshipLogo.png" alt="Mentorship Program Logo" />
      </div>
    </div>
  );
};

export default Header;
