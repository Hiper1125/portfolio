import PropTypes from "prop-types";

const Menu = () => {
  return (
    <div className="menu md:hidden fixed bottom-[1rem] right-[0.5rem] z-[100] flex items-center justify-center  bg-white w-16 h-16 rounded-full cursor-pointer select-none hover:animate-pulse">
      <h1 className="menu-text text-center text-4xl text-[#111111] font-bold mb-[0.35rem]">☰</h1>
    </div>
  );
};

export default Menu;
