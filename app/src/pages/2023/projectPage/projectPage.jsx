import { useEffect, useState } from "react";
import ProjectInfo from "./projectInfo/projectInfo";
import Popup from "../../../reusableComponents/popup/popup";
import "./projectPage.css";
import MenteeCard from "./menteesProjectComp/menteesProjectComp";
import MentorCard from "./projectMentorComp/projectMentorComp";
import { useParams } from "react-router-dom";
import PageTemplate from "../../../reusableComponents/pageTemplate";

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
      <PageTemplate>
        <div className={`background ${isBackgroundBlurred ? "blurred" : ""}`}>
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
                      onReadMore={() => handlePersonClick(participant)}
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
                      onReadMore={() => handlePersonClick(participant)}
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
      </PageTemplate>
    </>
  );
};

export default ProjectPage;
