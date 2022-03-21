import Projects from "./projects/projects";
import Project from "./projects/project";
import Header from "./header/header";
import Overlay from "./overlay/overlay";

const App = () => {
  return (
    <div className="App w-full h-screen">
      <Header></Header>
      <Projects></Projects>
      <Overlay></Overlay>
    </div>
  );
};

export default App;