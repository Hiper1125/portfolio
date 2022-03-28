import { createContext, useContext, useState } from "react";

const ProjectContext = createContext({
  open: null,
  setOpen: (value) => {},
});

export const useProjectContext = () => useContext(ProjectContext);

function ProjectProvider(props) {
  const [open, setOpen] = useState(false);
  return (
    <ProjectContext.Provider value={{ open, setOpen }}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
