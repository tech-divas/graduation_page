import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjectPage from "../src/pages/2023/all_projects_page/AllProjectsPage";
import ProjectPage from "./pages/2023/project_page/ProjectPage";
import HomePage from "./pages/2023/home_page/HomePage";
import ExpertsSpeakersPage from "./pages/2023/experts_speakers_page/ExpertsSpeakersPage";
import MenteesPage from "./pages/2023/mentees_page/MenteesPage";
import MentorsPage from "./pages/2023/mentors _page/MentorsPage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectPage />} />
          {/* <Route path="/project" element={<ProjectPage />} /> */}
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/experts" element={<ExpertsSpeakersPage />} />
          <Route path="/mentees" element={<MenteesPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
