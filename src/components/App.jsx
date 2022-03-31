import Header from "./header/header";
import Footer from "./header/footer";
import Main from "./Main";
import React from "react";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

import { BrowserRouter as Ruoter } from "react-router-dom";

const App = () => {
  return (
    <Ruoter>
      <div className="App w-full h-screen">
        <ReactNotifications className="selectDisable" />
        <Header />
        <Main />
        <Footer />
      </div>
    </Ruoter>
  );
};

export default App;
