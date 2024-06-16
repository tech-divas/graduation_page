import "./menteesComp.css";
import { useState, useEffect } from "react";

export default function MenteesComp() {
  const [mentees, setMentees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMentees = async (page = 0) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://graduation-page.onrender.com/mentees?page=${page}&size=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch mentees");
      }
      const data = await response.json();
      setMentees((prevMentees) => [...prevMentees, ...data.content]);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching mentees data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentees(0);
  }, []);

  const handleLoadMore = () => {
    fetchMentees(currentPage + 1);
  };

  return (
    <>
      <div>
        <h1 className="menteesHeading">Mentees Year 2023</h1>
      </div>
      <div className="menteesContainer">
        {mentees.map((mentee, id) => (
          <div className="menteeCard" key={id}>
            <h2>{mentee.name}</h2>
            <a
              href={mentee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="menteeLinkedInLink"
            >
              LinkedIn Profile
            </a>
            <p>{mentee.field}</p>
            <div className="menteeButtonContainer">
              <button className="menteeButton">Read more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="loadMoreContainer">
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
}
