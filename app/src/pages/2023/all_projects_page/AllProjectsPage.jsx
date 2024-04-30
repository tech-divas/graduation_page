import { useState, useEffect } from "react";
import Header from "../../../reusable_components/header/Header";
import Footer from "../../../reusable_components/footer/Footer";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectCard from "./project_card/ProjectCard";
import GraduationYearButton from "./graduation_year_button/GraduationYearButton";
import Search from "../../../reusable_components/search/Search";
import "./AllProjectsPage.css";

const AllProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([...projects]);
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://graduation-page.onrender.com/projects"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSearch = (query) => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <div>
      <Header />
      <Menu />
      <GraduationYearButton />
      <Search handleSearch={handleSearch} />

      <div className="cardsContainer">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllProjectPage;
