import React, { useState } from "react";
import $ from "jquery";

const Project = ({ name, description, index }) => {
  const [open, setOpened] = useState(false);

  const openProject = (e) => {
    e.preventDefault();

    console.log("This is ", index, " and has ", open);

    if ($(e.currentTarget).hasClass(".project-open-" + index)) return;

    setOpened(true);

    $(e.currentTarget)
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

  $(document.body).on("click", ".overlay", (e) => {
    if ($('[class*="project-open-"]').get()[0].id != "project-" + index) {
      console.log("Non aperto perché l'index era: ", index);
      return;
    } else {
      e.stopImmediatePropagation();
      e.stopPropagation();
    }

    console.log("true");

    const project = $(".project-open-" + index);

    project
      .animate(
        {
          height: (project.parent().height() / window.innerHeight) * 100 + "%",
          width: (project.parent().width() / window.innerWidth) * 100 + "%",
          top:
            ((project.parent().offset().top - $(window).scrollTop()) /
              window.innerHeight) *
              100 +
            "%",
          left:
            (project.parent().offset().left / window.innerWidth) * 100 + "%",
        },
        300
      )
      .promise()
      .done(() => {
        //project.removeAttr("style");
        /*$(".project-open-" + index).addClass(
          "w-full h-full z-60 group absolute cursor-pointer"
        );
        $(".project-open-" + index).removeClass(
          "z-[2000] project-open-" + index + " fixed"
        );*/
        setOpened(false);
        console.log("Called setOpened to false now is ", open);
      });
  });

  return (
    <div className="project-container relative h-[300px] w-auto">
      <div
        className={
          "project-bg w-full h-full bg-[#202020] opacity-30 rounded-lg selectDisable cursor-pointer absolute"
        }
      ></div>

      <div
        className={`project bg-[#202020] rounded-lg selectDisable transform ${
          open
            ? `z-[2000] project-open-${index} fixed`
            : "w-full h-full z-60 group absolute cursor-pointer"
        }`}
        id={"project-" + index}
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