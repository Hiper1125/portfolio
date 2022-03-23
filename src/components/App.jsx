import Projects from "./projects/projects";
import Project from "./projects/project";
import Header from "./header/header";
import Overlay from "./overlay/overlay";
import ProjectContext from "../context/ProjectContext";

const App = () => {
  return (
    <div className="App w-full h-screen">
      <Header></Header>
      <ProjectContext>
        <Projects></Projects>
        <Overlay></Overlay>
      </ProjectContext>
    </div>
  );
};

export default App;
