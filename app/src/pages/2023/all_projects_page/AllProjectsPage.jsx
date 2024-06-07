import { useEffect, useState } from "react";
import ProjectCard from "./project_card/ProjectCard";
import GraduationYearButton from "./graduation_year_button/GraduationYearButton";
import Search from "../../../reusable_components/search/Search";
import PageTemplate from "../../../reusable_components/PageTemplate";
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
  if (!projects) {
    return <div>Loading...</div>;
  }

  const handleSearch = (query) => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };
  return (
    <PageTemplate>
      <GraduationYearButton />
      <Search handleSearch={handleSearch} />

      <div className="cardsContainer">
        {filteredProjects.map((project) => (
          // Project name as prop passed down to ProjectCard
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default AllProjectPage;
