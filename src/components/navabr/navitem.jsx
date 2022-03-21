import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NavItem = ({name}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="nav-item selectDisable">
      <h2 className={`text-xl cursor-pointer ${active ? 'font-normal' : 'font-light'}`} onClick={() => setActive(true)}>{name}</h2>
    </div>
  );
};

NavItem.defaultProps = {
  name: "Section",
  isActive: false
};

NavItem.propTypes = {
    name: PropTypes.string,
    isActive: PropTypes.bool
}

export default NavItem;