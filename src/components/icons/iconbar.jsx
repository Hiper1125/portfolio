import Icon from "./icon";

const IconBar = ({ position, icons }) => {
  return (
    <div
      className={
        "icon-bar flex flex-row items-center justify-center space-x-2" +
        " " +
        position
      }
    >
      {icons.map((icon, index) => (
        <Icon key={index} name={icon.name} link={icon.link} />
      ))}
    </div>
  );
};

IconBar.defaultProps = {
  icons: [
    {
      name: "discord",
      link: "https://discordapp.com/users/287603404291964930",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/guerrini.samuele",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/samu.guerrini",
    },
    {
      name: "github",
      link: "https://github.com/Hiper1125",
    },
  ],
};

export default IconBar;
