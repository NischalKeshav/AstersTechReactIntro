import { Link } from "react-router-dom";
import { navLists } from "../constants";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 flex justify-center py-4
        ${theme === "light" ? "bg-white/80" : "bg-black/80"}
        backdrop-blur-md
      `}
    >
      <nav className="flex w-full screen-max-width items-center justify-center">
        <div className="flex gap-x-12">
          {navLists.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`
                text-sm cursor-pointer transition-all
                ${theme === "light"
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-400 hover:text-white"}
              `}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



