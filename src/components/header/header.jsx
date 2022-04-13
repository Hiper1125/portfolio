import Navbar from "../navabr/navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="flex flex-col items-center py-[2.5rem] space-y-16 fixed top-0 z-[50] w-full bg-background">
        <h1 className="text-white text-5xl md:text-7xl font-medium selectDisable">
          Samuele Guerrini
        </h1>
        <Navbar names={["Projects", "About", "Contact"]}></Navbar>
      </div>
      <div className="flex flex-col items-center py-[2.5rem] space-y-16 static top-0 z-[50] w-full bg-background">
        <h1 className="text-white text-5xl md:text-7xl font-medium selectDisable">
          Samuele Guerrini
        </h1>
        <Navbar names={["Projects", "About", "Contact"]}></Navbar>
      </div>
    </div>
  );
};

export default Header;
