import { useEffect, useState } from "react";
import Header from "../../../reusable_components/header/Header";
import Footer from "../../../reusable_components/footer/Footer";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectCard from "./project_card/ProjectCard";
import GraduationYearButton from "./graduation_year_button/GraduationYearButton";
import Search from "../../../reusable_components/search/Search";
import "./AllProjectsPage.css";

const AllProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async (page = 0) => {
    setLoading(true);
    try {
      const response = await fetch(`https://graduation-page.onrender.com/projects?year=2023&page=${page}&size=10`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();

      setProjects((prevProjects) => [...prevProjects, ...data.content]);
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

  const handleLoadMore = () => {
    fetchProjects(currentPage + 1);
  };

  const handleSearch = (query) => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };
  return (
    <>
    <div>
      <Header />
      <Menu />
      <GraduationYearButton />
      <Search handleSearch={handleSearch} />

      <div className="cardsContainer">
        {filteredProjects.map((project) => (
          // Project name as prop passed down to ProjectCard
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="loadMoreContainer">
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default AllProjectPage;
