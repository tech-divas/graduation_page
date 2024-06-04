import "./MenteesComp.css";
import {useState, useEffect} from "react";

export default function MenteesComp (){
    const [mentees, setMentees] = useState([]);

    const fetchMentees = async () => {
        try {
            const response = await fetch("https://graduation-page.onrender.com/mentees?page=0&size=90");
            if(!response.ok) {
                throw new Error("Failed to fetch mentees");
            }
            const data = await response.json();
            
        setMentees(data.content);
     
    } catch (error) {
      console.error("Error fetching mentors data:", error);
    }
  };
    useEffect(() => {
        fetchMentees();
      }, []);
    
    return(
        <>
        <div className="menteesContainer">
            {mentees.map((mentee, id) => (
                <div className="menteeCard" key={id}>
                <h2>{mentee.name}</h2>
                <a href={mentee.linkedin} target="_blank" rel="noopener noreferrer" className="menteeLinkedInLink">
                  LinkedIn Link
                </a>
                <p>{mentee.field}</p>
                <button className="menteeButton">Read more</button>
              </div>
            ))}
        </div>
        </>
    )
}