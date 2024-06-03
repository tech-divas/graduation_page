import "./MenteesComp.css";
import React, {useState, useEffect} from "react";

export default function MenteesComp (){
    const [mentees, setMentees] = useState([]);

    useEffect(() => {
        fetch("")
        .then((response) => response.json())
        .then((data) => setMentees(data))
        .catch((error) => console.error("Error fetching data for mentees", error))
    }, [])
    return(
        <>
        <div className="menteesContainer">
            {mentees.map((mentee, id) => (
                <div className="menteeCard" key={id}>
                <h2>{mentee.name}</h2>
                <a href={mentee.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Link
                </a>
                <p>{mentee.field}</p>
                <button>Read more</button>
              </div>
            ))}
        </div>
        </>
    )
}