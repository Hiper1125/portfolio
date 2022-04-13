import PropTypes from "prop-types";
import MenuItem from "./item";
import { useState } from "react";
import $ from "jquery";

const MenuItems = ({ items }) => {
  $(document).on("click", ".menu", function () {
    isOpen ? closeMenu() : openMenu();
  });

  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    $(".menu-text").text("✕");
    $(".menu-items").removeClass("opacity-0");
    $(".menu-items").addClass("opacity-90");
    setOpen(true);

    $(".menu-item").each(function (index, item) {
      setTimeout(function () {
        $(item).removeClass("opacity-0");
        $(item).addClass("opacity-100");
        $(item).removeClass("cursor-none");
        $(item).addClass("cursor-pointer");
      }, index * 100);
    });
  };

  const closeMenu = () => {
    $(".menu-item").each(function (index, item) {
      $(item).removeClass("opacity-100");
      $(item).addClass("opacity-0");
      $(item).removeClass("cursor-pointer");
      $(item).addClass("cursor-none");
    });

    $(".menu-text").text("☰");
    $(".menu-items").removeClass("opacity-90");
    $(".menu-items").addClass("opacity-0");
    setOpen(false);
  };

  return (
    <div className="menu-items opacity-0 fixed w-full h-full z-[80] bg-black duration-[.4s] flex flex-col items-center justify-center space-y-3">
      {items.map((item, i) => {
        return <MenuItem key={i} name={item}></MenuItem>;
      })}
    </div>
  );
};

MenuItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MenuItems;
