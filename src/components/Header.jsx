import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  RiSunLine,
  RiMoonLine,
  RiMenu3Fill,
  RiCloseFill,
} from "react-icons/ri";
import { Link } from "react-router";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "Projects", path: "/#projects" },
    { name: "Experience", path: "/#experience" },
    { name: "Education", path: "/#education" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 dark:bg-[#070606]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-[1080px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-Outfit text-gray-900 dark:text-white">
          Ritik<span className="text-[#4960d4]">.</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#4960d4] dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-xl cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
          </button>
        </nav>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-xl p-2 rounded-lg">
            {theme === "dark" ? <RiSunLine /> : <RiMoonLine />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl p-2 text-[#4960d4]"
          >
            {isMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-white dark:bg-[#070606] transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-[#4960d4]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
