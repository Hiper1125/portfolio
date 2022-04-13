import IconBar from "../icons/iconbar";

const Footer = () => {
  return (
    <div className="footer md:flex hidden flex-col items-center py-[1.5rem] space-y-12 sticky bottom-0 z-[50] w-full bg-background">
      <h1 className="text-white text-xl md:text-xl font-light selectDisable">
        {new Date().getFullYear()} © Samuele Guerrini
      </h1>

      <IconBar position={"absolute bottom-6 right-10"}/>
    </div>
  );
};

export default Footer;
