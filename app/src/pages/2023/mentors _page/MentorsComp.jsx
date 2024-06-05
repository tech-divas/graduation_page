import "./MentorsComp.css";
import { useState, useEffect } from "react";

export default function MentorsComp() {
  const [mentors, setMentors] = useState([]);

  const fetchMentors = async () => {
    try {
      const response = await fetch("https://graduation-page.onrender.com/mentors?page=0&size=40");
      if (!response.ok) {
        throw new Error("Failed to fetch mentors");
      }

      const data = await response.json();
    
        setMentors(data.content);
     
    } catch (error) {
      console.error("Error fetching mentors data:", error);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  return (
    <>
      <div className="mentorsContainer">
  
          {mentors.map((mentor, id) => (
            <div className="mentorCard" key={id}>
              <h2>{mentor.name}</h2>
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="mentorLinkedInLink">
                LinkedIn profile
              </a>
              <p>{mentor.field}</p>
              <button className="mentorButton">Read more</button>
            </div>
          ))
       }
      </div>
    </>
  );
}
