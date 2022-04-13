import PropTypes from "prop-types";
import MenuItem from "./item";
import $ from "jquery";
import IconBar from "../icons/iconbar";

const MenuItems = ({ items }) => {
  let isOpen = false;
  let isAnimating = false;
  let textFadeSpeed = 250;
  let menuCloseDelay = 500;

  $(document).on("click", ".menu", function () {
    if (!isAnimating) {
      isAnimating = true;
      isOpen ? closeMenu(textFadeSpeed, 0) : openMenu();
    } else {
      return;
    }
  });

  $(document).on("click", ".menu-item", function () {
    if (isOpen) closeMenu(textFadeSpeed, menuCloseDelay);
  });

  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      closeMenu(0, 0);
    }
  });

  const setOpen = (state) => {
    isOpen = state;
  };

  const openMenu = () => {
    if (isOpen) return;

    setOpen(true);

    $(".menu-text").text("✕");
    $(".menu-text").addClass("rotate-[-180deg]");
    $(".menu-text").addClass("translate-y-[5px]");
    $(".menu-items").removeClass("opacity-0");
    $(".menu-items").addClass("opacity-100");
    $(".menu-items").removeClass("pointer-events-none");

    $(".menu-item").each(function (index, item) {
      $(item).removeClass("hidden");
    });

    $(".menu-item").each(function (index, item) {
      setTimeout(function () {
        $(item).removeClass("opacity-0");
        $(item).addClass("opacity-100");
        $(item).removeClass("cursor-none");
        $(item).addClass("cursor-pointer");
        isAnimating = false;
      }, index * textFadeSpeed);
    });
  };

  const closeMenu = (text, delay) => {
    if (!isOpen) return;

    setOpen(false);
    setTimeout(function () {
      $(".menu-item").each(function (index, item) {
        setTimeout(function () {
          $(item).removeClass("opacity-100");
          $(item).addClass("opacity-0");
          $(item).removeClass("cursor-pointer");
          $(item).addClass("cursor-none");
        }, index * text);
      });

      setTimeout(function () {
        $(".menu-item").each(function (index, item) {
          $(item).addClass("hidden");
        });
      }, $(".menu-item").length * text);

      setTimeout(function () {
        $(".menu-text").text("☰");
        $(".menu-text").removeClass("rotate-[-180deg]");
        $(".menu-text").removeClass("translate-y-[5px]");
        $(".menu-items").removeClass("opacity-100");
        $(".menu-items").addClass("opacity-0");
        $(".menu-items").addClass("pointer-events-none");
        isAnimating = false;
      }, $(".menu-item").length * text);
    }, delay);
  };

  return (
    <div className="menu-items opacity-0 fixed w-full h-full z-[80] bg-[#0d0d0d] duration-[.4s] flex flex-col items-center justify-center space-y-5 pointer-events-none">
      {items.map((item, i) => {
        return <MenuItem key={i} name={item}></MenuItem>;
      })}

      <IconBar position={"absolute bottom-8"}></IconBar>
    </div>
  );
};

MenuItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MenuItems;