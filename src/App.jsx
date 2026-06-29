import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Hash router is used since it's static (GitHub Pages)
// home page, projects general page, and projects details page for each individual id
export default function App() {
  return (
    <HashRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}
