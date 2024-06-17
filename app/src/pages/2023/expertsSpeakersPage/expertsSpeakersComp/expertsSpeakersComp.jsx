import "./expertsSpeakersComp.css";
import { useState, useEffect } from "react";

export default function ExpertsSpeakersComp() {
  const [experts, setExperts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchExperts = async (page = 0) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://graduation-page.onrender.com/experts?page=${page}&size=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch experts");
      }
      const data = await response.json();
      setExperts((prevExperts) => [...prevExperts, ...data.content]);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching experts data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperts(0);
  }, []);

  const handleLoadMore = () => {
    fetchExperts(currentPage + 1);
  };

  return (
    <>
      <div className="expertContainer">
        {experts.map((expert, id) => (
          <div className="expertCard" key={id}>
            <h2>{expert.name}</h2>
            <a
              href={expert.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="expertLinkedInLink"
            >
              LinkedIn Profile
            </a>
            <p>{expert.field}</p>
            <div className="expertButtonContainer">
              <button className="expertButton">Read more</button>
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
