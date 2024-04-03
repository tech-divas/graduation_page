import Header from "../CommonCompFolder/Header";
import Footer from "../CommonCompFolder/Footer";
import ProjectCard from "./ProjectCard";
import "./AllProjectsPage.css"
const AllProjectPage = () => {
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="cardsContainer">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default AllProjectPage;
