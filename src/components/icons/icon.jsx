import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Store } from "react-notifications-component";
import $ from "jquery";

const Icon = ({ name, link }) => {
  return (
    <a
      className="icon cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-11"
      onClick={(e) => {
        e.preventDefault();

        let target = $(e.currentTarget);

        target.addClass("animate-bounce");

        setTimeout(() => {
          target.removeClass("animate-bounce");
        }, 2000);

        if (name == "discord") {
          navigator.clipboard.writeText("HIPER#1125");

          Store.addNotification({
            title: "Username copied!",
            message: "Copied username to your clipboard",
            type: "success",
            insert: "top",
            container: "top-right",
            timingFunction: "ease-out",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        } else {
          let openDelay = 3800;

          Store.addNotification({
            title: "Opening window",
            message: "Opening " + name + " page in a new window",
            type: "success",
            insert: "top",
            container: "top-right",
            timingFunction: "ease-out",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: openDelay,
              onScreen: true,
            },
          });

          setTimeout(() => {
            let newWindow = window.open(link);
            //newWindow.blur();
            //window.focus();
          }, openDelay);
        }
      }}
    >
      <FontAwesomeIcon icon={["fab", name]} />
    </a>
  );
};

export default Icon;
