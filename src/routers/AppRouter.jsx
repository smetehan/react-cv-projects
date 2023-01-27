import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cv from "../components/Cv";
import Projects from "../components/Projects";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="projects" element={<Projects />}></Route>

        <Route path="resume" element={<Cv />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
