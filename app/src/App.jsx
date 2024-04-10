import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjectPage from "../src/pages/all_projects_page/AllProjectsPage";
import ProjectPage from "./pages/project_page/ProjectPage";
import HomePage from "./pages/home_page/HomePage";
import ExpertsSpeakersPage from "./pages/experts_speakers_page/ExpertsSpeakersPage";
import MenteesPage from "./pages/mentees_page/MenteesPage";
import MentorsPage from "./pages/mentors _page/MentorsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/experts" element={<ExpertsSpeakersPage />} />
          <Route path="/mentees" element={<MenteesPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
