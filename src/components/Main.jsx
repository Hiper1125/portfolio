import React from "react";
import { Routes, Route } from "react-router-dom";

import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/404";
import { Navigate } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/projects" />}></Route>
      <Route exact path="/projects" element={<ProjectsPage />}></Route>
      <Route exact path="/about" element={<AboutPage />}></Route>
      <Route exact path="/contact" element={<ContactPage />}></Route>
      <Route exact path="/404" element={<NotFoundPage />}></Route>
      <Route path="*" element={<Navigate to="/404" />}></Route>
    </Routes>
  );
};

export default Main;
