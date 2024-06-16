import { useEffect, useState } from "react";
import ProjectCard from "./projectCard/projectCard";
import PracticeProjectsHeader from "./practiceProjectsHeader/practiceProjectsHeader";
import Search from "../../../reusableComponents/search/search";
import PageTemplate from "../../../reusableComponents/pageTemplate";
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

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProjects(filtered);
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
      {hasMoreProjects && (
        <div className="loadMoreContainer">
          <button onClick={handleLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </PageTemplate>
  );
};

export default AllProjectPage;
