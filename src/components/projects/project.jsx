import React, { useState } from "react";
import $ from "jquery";
import { useContext } from "react";
import { useProjectContext } from "../../context/ProjectContext";

const Project = ({ name, description }) => {
  const { open, setOpen } = useProjectContext();

  const openProject = (e) => {
    e.preventDefault();

    const project = $(e.currentTarget);
    console.log(project);

    if (project.hasClass("project-open")) return;

    setOpen(true);

    project
      .css({
        height: ($(e.currentTarget).height() / window.innerHeight) * 100 + "%",
        width: ($(e.currentTarget).width() / window.innerWidth) * 100 + "%",
        top:
          (($(e.currentTarget).offset().top - $(window).scrollTop()) /
            window.innerHeight) *
            100 +
          "%",
        left:
          ($(e.currentTarget).offset().left / window.innerWidth) * 100 + "%",
      })
      .removeClass("w-full h-full z-60 group absolute cursor-pointer")
      .addClass("project-open z-[2000] fixed")
      .animate(
        {
          height: "50%",
          width: "50%",
          top: "25%",
          left: "25%",
        },
        300
      );
  };

  return (
    <div className="project-container relative h-[300px] w-auto">
      <div
        className={
          "project-bg w-full h-full bg-[#202020] opacity-30 rounded-lg selectDisable cursor-pointer absolute"
        }
      ></div>

      <div
        className={`project bg-[#202020] rounded-lg selectDisable transform w-full h-full z-60 group absolute cursor-pointer`}
        onClick={openProject}
      >
        <div className="absolute project-info pl-4 pt-4 z-[3]">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3>{description}</h3>
        </div>

        <div className={"w-full h-full relative rounded-lg overflow-hidden"}>
          <div className="w-full h-[300px] bg-black z-[2] opacity-30 group-hover:opacity-80 transition-all duration-[1500ms] absolute top-0 left-0 rounded-lg"></div>
          <img
            src="https://picsum.photos/300/300"
            className="w-full h-[300px] z-[1] absolute top-0 left-0 transform transition duration-1000 rounded-lg group-hover:scale-125 group-hover:translate-x-6 mask-inside"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Project;
