import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { Link } from "react-router";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center py-2 h-[40px] ">
      <h1 className="text-2xl font-bold font-Outfit">
        Ritik<span className="theme-color">.</span>
      </h1>
      <div className="text-md flex gap-10">
        <Link to="#home">Home</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#experience">Experience</Link>
        <Link to="#education">Education</Link>
        <Link to="#contact">Contact</Link>
        <button
          onClick={toggleTheme}
          className="text-2xl cursor-pointer hover:text-[var(--hover)]"
        >
          {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
        </button>
      </div>
    </header>
  );
};

export default Header;
