import React from "react";
import { Routes, Route } from "react-router-dom";

import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

const Main = () => {
  return (
      <Routes>
        <Route exact path="/" element={<ProjectsPage />}></Route>
        <Route exact path="/projects" element={<ProjectsPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
      </Routes>
  );
};

export default Main;
