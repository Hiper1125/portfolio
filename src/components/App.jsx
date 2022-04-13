import React from "react";
import { BrowserRouter as Ruoter } from "react-router-dom";

import Menu from "./menu/menu";
import MenuItems from "./menu/items";

import Header from "./header/header";
import Footer from "./header/footer";

import Main from "./Main";

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

const App = () => {
  return (
    <Ruoter>
      <div className="App w-full h-screen">
        <ReactNotifications className="selectDisable" />
        <Menu/>
        <MenuItems items={["projects", "about", "contact"]} />
        <Header />
        <Main />
        <Footer />
      </div>
    </Ruoter>
  );
};

export default App;
