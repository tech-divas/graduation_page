import "./practiceProjectsInfo.css";
import { Link } from "react-router-dom";
import birdImage from "./birdImage.jpg";
import birdOnCircle from "./birdOnCircle.png";

const PracticeProjectsInfo = () => {
  return (
    <div className="practiceProjectInfo">
      <div className="titleContainer">
        <img src={birdImage} alt="Bird" className="birdImage" />
        <h1>Practice Projects</h1>
      </div>
      <div className="descriptionContainer">
        <p>
          Riga TechGirls mentorship program brings together tech professionals
          eager to impart their knowledge and experience to support women in the
          early stages of their tech careers.
          <br />
          <br />
          PRACTICE PROJECTS aim to offer mentees an opportunity to showcase
          their abilities in real-life (or near-real-life) IT projects. They can
          apply their previously acquired skills within their chosen track,
          experience the dynamics of an IT team, and immerse themselves in the
          specifics of teamwork. The essence is ‘learning-by-doing’ throughout
          the project’s life cycle.
        </p>
        <img
          src={birdOnCircle}
          alt="Bird on a circle"
          className="birdOnCircle"
        />
      </div>
      <div className="practiceProjectYears">
        <Link to="/projects">
          <button className="practiceProjectYearsButton">
            Practice Projects 2023
          </button>
        </Link>
        <button className="practiceProjectYearsButton">2024</button>
      </div>
    </div>
  );
};

export default PracticeProjectsInfo;
