import React, { useState } from "react";
import $ from "jquery";
import { useProjectContext } from "../../context/ProjectContext";

const Overlay = () => {
  const { open: visible, setOpen: setVisibile } = useProjectContext();

  const closeProject = (e) => {
    e.preventDefault();

    const project = $(".project-open");

    if (project.length === 0 || !visible) return;

    setVisibile(false);

    project.animate(
      {
        height: (project.parent().height() / window.innerHeight) * 100 + "%",
        width: (project.parent().width() / window.innerWidth) * 100 + "%",
        top:
          ((project.parent().offset().top - $(window).scrollTop()) /
            window.innerHeight) *
            100 +
          "%",
        left: (project.parent().offset().left / window.innerWidth) * 100 + "%",
      },
      300,
      () => {
        project
        .removeClass("project-open z-[2000] fixed")
        .addClass("w-full h-full z-60 group absolute cursor-pointer")
        .css({
          height: "100%",
          width: "100%",
          top: "0%",
          left: "0%",
        });

        project.removeClass("project-open");
      }
    );

    $("body").css({
      overflow: "auto"
    })
  };

  return (
    <div
      className={`overlay w-full h-screen top-0 bg-black z-[100] selectDisable transition-opacity duration-300 ${
        visible ? "fixed opacity-90" : "fixed opacity-0 pointer-events-none"
      }`}
      onClick={closeProject}
    ></div>
  );
};

export default Overlay;
