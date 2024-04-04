import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AllProjectPage from "../src/pages/all_projects_page/AllProjectsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/projects" />} />
          <Route path="/projects" element={<AllProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
