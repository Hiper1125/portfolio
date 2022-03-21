import PropTypes from "prop-types";

const ControlButton = ({ name }) => {
  return (
    <div className="control-button rounded-full border-2 p-3 w-20 md:w-24 text-center font-light cursor-pointer hover:bg-white transition-colors hover:text-black duration-[510ms]">
      <h1 className="selectDisable cursor-pointer text-xs md:text-sm">{name}</h1>
    </div>
  );
};

ControlButton.propTypes = {
  names: PropTypes.string,
};

export default ControlButton;
