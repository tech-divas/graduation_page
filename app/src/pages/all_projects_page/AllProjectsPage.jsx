import Header from "../../reusable_components/header/Header";
import Footer from "../../reusable_components/footer/Footer";
import Menu from "../../reusable_components/menu/Menu";
import ProjectCard from "./project_card/ProjectCard";
import GraduationYearButton from "./graduation_year_button/GraduationYearButton";
import Search from "../../reusable_components/search/Search";
import "./AllProjectsPage.css";

const AllProjectPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <GraduationYearButton />
      <Search />
      <div className="cardsContainer">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default AllProjectPage;
