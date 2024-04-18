import { useState } from "react";
import Header from "../../../reusable_components/header/Header";
import Footer from "../../../reusable_components/footer/Footer";
import Menu from "../../../reusable_components/menu/Menu";
import ProjectCard from "./project_card/ProjectCard";
import GraduationYearButton from "./graduation_year_button/GraduationYearButton";
import Search from "../../../reusable_components/search/Search";
import "./AllProjectsPage.css";

const AllProjectPage = () => {
  const sampleProjects = [
    {
      id: 1,
      name: "Anna Mood Studio",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 2,
      name: "Bookworms",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 3,
      name: "Celebrating Us",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 4,
      name: "Crypto Cabata",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 5,
      name: "Parental-Children well-being",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 6,
      name: "Cyber Security program development",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 7,
      name: "neitrals.lv",
      projectTypes: [{ name: "Practice project" }],
    },
    {
      id: 8,
      name: "Mežavairogi",
      projectTypes: [{ name: "Practice project" }],
    },
  ];

  const [projects] = useState(sampleProjects);
  const [filteredProjects, setFilteredProjects] = useState([...projects]);
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
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
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
