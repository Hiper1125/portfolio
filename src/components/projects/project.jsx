import React, { useState } from "react";
import $ from "jquery";
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

    $("body").css({
      overflow: "hidden",
    });
  };

  $(".overlay").on("click", () => {
    if (!imOpen) return;
    setImOpen(false);
  });

  return (
    <div className="project-container relative h-[300px] w-auto">
      <div
        className={
          "project-bg w-full h-full bg-[#202020] opacity-30 selectDisable cursor-pointer absolute rounded-lg"
        }
      ></div>

      <div
        className={`project bg-[#202020] rounded-lg overflow-hidden selectDisable transform w-full h-full z-60 group absolute cursor-pointer`}
        onClick={openProject}
      >
        <div
          className={`project-info relative w-full ${
            imOpen ? "h-[150px]" : "h-[300px]"
          }  transition-all duration-300`}
        >
          <div className="project-img overflow-hidden w-full h-full absolute top-0 left-0">
            <div
              className={`w-full h-full bg-black z-[2] group-hover:opacity-80 transition-all absolute top-0 left-0 ${
                imOpen
                  ? "duration-300 opacity-80"
                  : "opacity-30 duration-[1500ms]"
              }`}
            ></div>
            <img
              src="https://picsum.photos/300/300"
              className={`w-full h-full z-[1] absolute top-0 left-0 transform transition duration-[1500ms] group-hover:scale-125 group-hover:translate-x-6 mask-inside object-cover`}
            ></img>
          </div>

          <div
            className={`project-text absolute ${
              imOpen
                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "top-0 left-0 -translate-x-0 -translate-y-0"
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

        <div className="project-description w-screen h-screen fixed -top-[12.5%] -left-[50%] overflow-y-scroll">
          <div className="w-[50.5%] pt-[calc(10%+150px)] pb-[10%] ml-[calc(25%+5px)] p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum
              dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div></div>
        </div>
      </div>
  );
};

export default Project;
