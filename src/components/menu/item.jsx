import PropTypes from "prop-types";

const MenuItem = ({name}) => {
  return (
    <div className="menu-item opacity-0 cursor-none transition-opacity duration-75">
      <h1 className="capitalize text-4xl text-center">{name}</h1>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuItem;
