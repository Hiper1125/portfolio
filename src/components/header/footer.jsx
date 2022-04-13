import IconBar from "../icons/iconbar";

const Footer = () => {
  return (
    <div className="footer md:flex hidden flex-col items-center py-[1.5rem] space-y-12 sticky bottom-0 z-[50] w-full bg-background">
      <h1 className="text-white text-xl md:text-xl font-light selectDisable">
        {new Date().getFullYear()} © Samuele Guerrini
      </h1>

      <IconBar
        icons={[
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
          }
        ]}
      />
    </div>
  );
};

export default Footer;
