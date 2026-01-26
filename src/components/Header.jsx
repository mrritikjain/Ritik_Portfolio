import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold font-Outfit">
        Ritik<span className="text-[#4960d4]">.</span>
      </h1>
      <div className="text-md flex gap-10">
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Experience</a>
        <a href="">Education</a>
        <a href="">Contact</a>
        <button
          onClick={toggleTheme}
          className="text-2xl cursor-pointer hover:text-[#4960d4]"
        >
          {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
        </button>
      </div>
    </header>
  );
};

export default Header;
