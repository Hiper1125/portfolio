import ControlButton from "./control";
import PropTypes from "prop-types";

const ControlsRow = ({names}) => {
  return <div className="navbar flex flex-row space-x-3 md:space-x-8">{names.map((name, i) => {
    return (<ControlButton key={i} name={name}></ControlButton>);
  })}</div>;
};

ControlsRow.propTypes = {
  names: PropTypes.array.isRequired
};

export default ControlsRow;
