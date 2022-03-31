import Icon from "./icon";

const IconBar = ({ icons }) => {
  return (
    <div className="icon-bar absolute bottom-6 right-10 flex flex-row items-center justify-center space-x-2">
      {icons.map((icon, index) => (
        <Icon key={index} name={icon.name} link={icon.link} />
      ))}
    </div>
  );
};

export default IconBar;
