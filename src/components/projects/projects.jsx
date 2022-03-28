import Project from "./project";
import { createContext } from 'react';

import {default as JSONProject} from "../../data/projects/projects";

const Projects = () => {
  // TODO Ottenere i progetti
  let projects = [
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
    { name: "Project Name", description: "Long project description goes here" },
  ];
  projects = projects.concat(JSONProject);

  return (
    <div className="projects p-5 w-full">
      <div className="grid grid-cols-auto-fill gap-5">
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              index={i}
            ></Project>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;