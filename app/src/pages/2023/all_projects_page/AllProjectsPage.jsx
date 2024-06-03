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

  useEffect(() => {
    fetch(
      "https://graduation-page.onrender.com/projects?year=2023&page=0&size=16"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.content);
        setFilteredProjects(data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
          // Project name as prop passed down to ProjectCard
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProjectPage;
