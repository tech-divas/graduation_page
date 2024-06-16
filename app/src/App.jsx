import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjectPage from "./pages/2023/allProjectsPage/allProjectsPage";
import ProjectPage from "./pages/2023/projectPage/projectPage";
import HomePage from "./pages/2023/homePage/homePage";
import ExpertsSpeakersPage from "./pages/2023/expertsSpeakersPage/expertsSpeakersPage";
import MenteesPage from "./pages/2023/menteesPage/menteesPage";
import MentorsPage from "./pages/2023/mentorsPage/mentorsPage";

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
