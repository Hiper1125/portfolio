import React from "react";
import ProjectContext from "../../context/ProjectContext";
import Projects from "../projects/projects";
import Overlay from "../overlay/overlay";

const ProjectsPage = () => {
  return (
    <ProjectContext>
      <Projects></Projects>
      <Overlay></Overlay>
    </ProjectContext>
  );
};

export default ProjectsPage;
