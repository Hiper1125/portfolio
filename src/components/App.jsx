import Header from "./header/header";
import Footer from "./header/footer";
import Main from "./Main";

import { BrowserRouter as Ruoter } from "react-router-dom";

const App = () => {
  return (
    <Ruoter>
      <div className="App w-full h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </Ruoter>
  );
};

export default App;
