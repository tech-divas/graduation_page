import { useEffect, useState } from "react";
import Header from "../../../reusable_components/header/Header";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectInfo from "./project_info/ProjectInfo";
import Popup from "../../../reusable_components/popup/Popup";
import "./ProjectPage.css";
import MenteeCard from "./MenteesProjectComp";
import MentorCard from "./ProjectMentorComp";
import Footer from "../../../reusable_components/footer/Footer";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);
  const { projectId } = useParams();
  const [person, setPerson] = useState();

  const fetchPeople = async () => {
    try {
      const response = await fetch(
        "https://graduation-page.onrender.com/projects/8"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setPerson(data);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  const handlePersonClick = (selectedPerson) => {
    setSelectedPerson(selectedPerson);
    setIsPopupOpen(true);
    setIsBackgroundBlurred(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsBackgroundBlurred(false);
  };

  return (
    <>
      <div className={`background ${isBackgroundBlurred ? "blurred" : ""}`}>
        <Header />
        <Menu />
        <ProjectInfo projectId={projectId} />

        <div className="peopleList">
          {person && (
            <>
              {person.participants
                .filter((participant) => participant.role === "Mentor")
                .map((participant) => (
                  <MentorCard
                    key={participant.id}
                    name={participant.name}
                    linkedin={participant.linkedin}
                    field={participant.field}
                    role={participant.role}
                    onReadMore={() => handlePersonClick(selectedPerson)}
                  />
                ))}

              {person.participants
                .filter((participant) => participant.role !== "Mentor")
                .map((participant) => (
                  <MenteeCard
                    key={participant.id}
                    name={participant.name}
                    linkedin={participant.linkedin}
                    field={participant.field}
                    role={participant.role}
                    onReadMore={() => handlePersonClick(selectedPerson)}
                  />
                ))}
            </>
          )}
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
