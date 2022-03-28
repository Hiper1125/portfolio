import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ name, isActive }) => {
  const linkPage = "/" + name.toLowerCase();

  return (
    <NavLink
      className={(navData) =>
        navData.isActive
          ? "font-normal transition-all duration-100"
          : "font-light transition-all duration-100"
      }
      to={linkPage}
    >
      <div className="nav-item selectDisable">
        <h2 className="text-xl cursor-pointer">{name}</h2>
      </div>
    </NavLink>
  );
};

NavItem.defaultProps = {
  name: "Section",
  isActive: false,
};

NavItem.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
};

export default NavItem;