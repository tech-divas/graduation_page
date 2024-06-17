import { useState, useEffect } from "react";
import PageTemplate from "../../../reusableComponents/pageTemplate";
import "./menteesPage.css";
import MenteesComp from "./menteesComp/menteesComp";
import Search from "../../../reusableComponents/search/search";
import LoadMoreButton from "../../../reusableComponents/loadMoreButton/loadMoreButton";

const MenteesPage = () => {
  const [mentees, setMentees] = useState([]);
  const [filteredMentees, setFilteredMentees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMoreMentees, setHasMoreMentees] = useState(true);

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

      const newMentees = data.content;

      if (newMentees.length < 10 || newMentees.length === 0) {
        setHasMoreMentees(false);
      }

      setMentees((prevMentees) => [...prevMentees, ...newMentees]);
      setFilteredMentees((prevMentees) => [...prevMentees, ...newMentees]);
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

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await fetch(
        `https://graduation-page.onrender.com/mentees/search?name=${encodedQuery}&page=0&size=40`
      );
      if (!response.ok) {
        throw new Error("Failed to search mentees");
      }
      const data = await response.json();
      setFilteredMentees(data.content);
    } catch (error) {
      console.error("Error searching mentees:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading && mentees.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <PageTemplate>
      <div>
        <h1 className="menteesHeading">Mentees Year 2023</h1>
      </div>
      <Search handleSearch={handleSearch} placeholderText="Search mentees" />
      <MenteesComp mentees={filteredMentees} />
      <LoadMoreButton
        handleLoadMore={handleLoadMore}
        loading={loading}
        hasMoreItems={hasMoreMentees}
      />
    </PageTemplate>
  );
};

export default MenteesPage;
