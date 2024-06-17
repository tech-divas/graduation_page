import "./mentorsComp.css";
import { useState, useEffect } from "react";

export default function MentorsComp() {
  const [mentors, setMentors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMentors = async (page = 0) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://graduation-page.onrender.com/mentors?page=${page}&size=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch mentors");
      }

      const data = await response.json();

      setMentors((prevMentors) => [...prevMentors, ...data.content]);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching mentors data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMentors(0);
  }, []);

  const handleLoadMore = () => {
    fetchMentors(currentPage + 1);
  };

  return (
    <>
      <div className="mentorsContainer">
        {mentors.map((mentor, id) => (
          <div className="mentorCard" key={id}>
            <h2>{mentor.name}</h2>
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mentorLinkedInLink"
            >
              LinkedIn profile
            </a>
            <p>{mentor.field}</p>
            <div className="mentorButtonContainer">
              <button className="mentorButton">Read more</button>
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
