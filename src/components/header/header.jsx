import ControlsRow from "../buttons/controls";
import Navbar from "../navabr/navbar"

const Header = () => {
  return (
    <div className="header flex flex-col items-center py-[2.5rem] space-y-12 sticky top-0 z-[50] w-full bg-background">
      <h1 className="text-white text-5xl md:text-7xl font-medium selectDisable">
        Samuele Guerrini
      </h1>
      <Navbar names={["Projects", "About", "Contact"]}></Navbar>
      <ControlsRow
        names={["All", "Instagram", "Github", "Itch.io", "Others"]}
      ></ControlsRow>
    </div>
  );
};

export default Header;
