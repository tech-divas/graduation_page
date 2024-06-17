import { useEffect, useState } from "react";
import ProjectCard from "./projectCard/projectCard";
import PracticeProjectsHeader from "./practiceProjectsHeader/practiceProjectsHeader";
import Search from "../../../reusableComponents/search/search";
import PageTemplate from "../../../reusableComponents/pageTemplate";
import LoadMoreButton from "../../../reusableComponents/loadMoreButton/loadMoreButton";
import "./allProjectsPage.css";

const AllProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMoreProjects, setHasMoreProjects] = useState(true);

  const fetchProjects = async (page = 0) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://graduation-page.onrender.com/projects?year=2023&page=${page}&size=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      const newProjects = data.content;

      if (newProjects.length < 10) {
        setHasMoreProjects(false);
      }

      setProjects((prevProjects) => [...prevProjects, ...newProjects]);
      setFilteredProjects((prevProjects) => [...prevProjects, ...newProjects]);

      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(0);
  }, []);

  if (!projects) {
    return <div>Loading...</div>;
  }
  const handleLoadMore = () => {
    fetchProjects(currentPage + 1);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await fetch(
        `https://graduation-page.onrender.com/projects/search?query=${encodedQuery}&page=0&size=16`
      );
      if (!response.ok) {
        throw new Error("Failed to search projects");
      }
      const text = await response.text();
      const data = text ? JSON.parse(text) : { content: [] };

      setFilteredProjects(data.content);
    } catch (error) {
      console.error("Error searching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTemplate>
      <PracticeProjectsHeader />
      <Search handleSearch={handleSearch} placeholderText="Search project" />

      <div className="cardsContainer">
        {filteredProjects.map((project, index) => {
          return (
            // To avoid duplicating keys, index was added
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          );
        })}
      </div>
      <LoadMoreButton
        loading={loading}
        hasMoreItems={hasMoreProjects}
        handleLoadMore={handleLoadMore}
      />
    </PageTemplate>
  );
};

export default AllProjectPage;
