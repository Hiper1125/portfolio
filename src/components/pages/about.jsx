import React from "react";
import selfie from "../../img/selfie.png";

const AboutPage = () => {

  const preventDragHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="p-5 h-full w-full">
        <img className="fixed bottom-0 right-16 grayscale opacity-80 selectDisable" src={selfie} onDragStart={preventDragHandler}/>
        <h1 className="fixed bottom-80 left-80 text-2xl text-left">"A manager is a person who think <br></br> nine woman can do a baby in one month"</h1>
    </div>
  );
};

export default AboutPage;
