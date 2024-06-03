
import "./MentorsComp.css";
import React, {useState, useEffect} from "react";

export default function MentorsComp (){
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        fetch("")
        .then((response) => response.json())
        .then((data) => setMentors(data))
        .catch((error) => console.error("Error fetching data for mentors", error))
    }, [])
    return(
        <>
        <div className="mentorsContainer">
            {mentors.map((mentor, id) => (
                <div className="mentorCard" key={id}>
                <h2>{mentor.name}</h2>
                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Link
                </a>
                <p>{mentor.field}</p>
                <button>Read more</button>
              </div>
            ))}
        </div>
        </>
    )
}