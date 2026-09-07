import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <nav
      className={`shadow-md ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          MyLogo
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className={
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Home
          </a>

          <a
            href="#"
            className={
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            About
          </a>

          <a
            href="#"
            className={
              isDark
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Contact
          </a>

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className={`rounded-lg px-3 py-2 ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
