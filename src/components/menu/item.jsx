import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name }) => {
  const linkPage = "/" + name.toLowerCase();

  return (
    <div className="menu-item opacity-0 cursor-none transition-opacity duration-[.75s]">
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "font-bold capitalize text-4xl text-center opacity-100"
            : "font-light capitalize text-4xl text-center opacity-70 hover:opacity-90"
        }
        to={linkPage}
      >
        {name}
      </NavLink>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuItem;