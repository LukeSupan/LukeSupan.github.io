import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Hash router is used since it's static (GitHub Pages)
// home page, projects general page, and projects details page for each individual id
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.state]);

  return null;
}
