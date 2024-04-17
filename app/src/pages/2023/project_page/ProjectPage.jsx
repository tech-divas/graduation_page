import { useState } from "react";
import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectInfo from "./project_info/ProjectInfo";
import Popup from "../../../reusable_components/popup/Popup";
import "./ProjectPage.css";

const ProjectPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const handlePersonClick = (personName) => {
    setSelectedPerson(personName);
    setIsPopupOpen(true);
    setIsBackgroundBlurred(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsBackgroundBlurred(false);
  };

  return (
    <div className={`background ${isBackgroundBlurred ? "blurred" : ""}`}>
      <Header />
      <Menu />
      <ProjectInfo />

      <ul>
        <li onClick={() => handlePersonClick("Ilze")}>Ilze</li>
        <li onClick={() => handlePersonClick("Zane")}>Zane</li>
        <li onClick={() => handlePersonClick("Ieva")}>Ieva</li>
        <li onClick={() => handlePersonClick("Kristine")}>Kristine</li>
      </ul>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        message={`Display data for ${selectedPerson}`}
      />
      {isBackgroundBlurred && <div className="backgroundBlur"></div>}
    </div>
  );
};

export default ProjectPage;
