import NavItem from "./navitem";
import PropTypes from "prop-types";

const NavBar = ({names}) => {
  return <div className="navbar flex flex-row space-x-12">{names.map((name, i) => {
    return (<NavItem key={i} name={name}></NavItem>);
  })}</div>;
};

NavBar.propTypes = {
  names: PropTypes.array.isRequired
};

export default NavBar;
