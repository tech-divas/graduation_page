import { useState } from "react";
import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectInfo from "./project_info/ProjectInfo";
import Popup from "../../../reusable_components/popup/Popup";
import "./ProjectPage.css";
import MenteeCard from "./MenteesProjectComp";
import MentorCard from "./ProjectMentorComp";
import Footer from "../../../reusable_components/footer/Footer";

const ProjectPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setIsPopupOpen(true);
    setIsBackgroundBlurred(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsBackgroundBlurred(false);
  };

  const people = [
    { name: "Ilze", type: "mentor", link: "https://www.linkedin.com/", info: "Some additional info about a person."},
    { name: "Zane", type: "mentor", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Ieva", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Kristine", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Ieva", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Kristine", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Ieva", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." },
    { name: "Kristine", type: "mentee", link: "https://www.linkedin.com/", info: "Some additional info about a person." }
  ]

  return (
    <>
    <div className={`background ${isBackgroundBlurred ? "blurred" : ""}`}>
      <Header />
      <Menu />
      <ProjectInfo />
      
      <div className="peopleList">
        {people.map((person, index) => (
          <div key={index}>
            {person.type === "mentor" ? (
              <MentorCard
                name={person.name}
                type={person.type}
                link={person.link}
                onReadMore={() => handlePersonClick(person)}
              />
            ) : (
              <MenteeCard
                name={person.name}
                type={person.type}
                link={person.link}
                onReadMore={() => handlePersonClick(person)}
              />
            )}
          </div>
        ))}
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        message={`Display data for ${selectedPerson}`}
      />
      {isBackgroundBlurred && <div className="backgroundBlur"></div>}
    </div>
      <Footer />
      </>
  );
};

export default ProjectPage;
