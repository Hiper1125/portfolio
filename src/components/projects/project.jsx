import React, { useState } from "react";
import $ from "jquery";
import { useContext } from "react";
import { useProjectContext } from "../../context/ProjectContext";

const Project = ({ name, description }) => {
  const { open, setOpen } = useProjectContext();
  const [imOpen, setImOpen] = useState(false);

  const openProject = (e) => {
    e.preventDefault();

    const project = $(e.currentTarget);

    if (project.hasClass("project-open")) return;

    setOpen(true);
    setImOpen(true);

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
          height: "80%",
          width: "50%",
          top: "10%",
          left: "25%",
        },
        300
      );
  };

  $(".overlay").on("click", () => {
    if (!imOpen) return;
    setImOpen(false);
  });

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
        <div
          className={`project-info relative w-full ${
            imOpen ? "h-[150px]" : "h-[300px]"
          }  transition-all duration-300`}
        >
          <div className="project-bg w-full h-full absolute top-0 left-0 overflow-hidden rounded-lg">
            <div className="w-full h-full bg-black z-[2] opacity-30 group-hover:opacity-80 transition-all duration-[1500ms] absolute top-0 left-0"></div>
            <img
              src="https://picsum.photos/300/300"
              className={`w-full h-full z-[1] absolute top-0 left-0 transform transition duration-1000 group-hover:scale-125 group-hover:translate-x-6 mask-inside object-cover`}
            ></img>
          </div>
          
          <div
            className={`project-text absolute ${
              imOpen ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "top-0 left-0 -translate-x-0 -translate-y-0"
            }  p-4 transition-all duration-300 z-[3]`}
          >
            <h2
              className={`transition-all duration-300 block w-fit ${
                imOpen ? "text-6xl font-bold " : "text-3xl font-bold"
              }`}
            >
              {name}
            </h2>
            <h3
              className={`transition-all duration-300 ${
                imOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              {description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
