// Navbar.jsx
import { appleImg } from "../utils";
import { navLists } from "../constants";
import { useTheme } from "./ThemeContext";

const Navbar = (props) => {
  const { theme } = useTheme();

  return (
    <header
      className={`
        fixed top-4 left-0 w-full z-50 flex justify-center max-sm:hidden
        ${theme === "light" ? "bg-white/80" : "bg-black/80"}
        backdrop-blur-md ${props.className || ""}
      `}
    >
      <nav className="flex w-full screen-max-width items-center">
        

        {/* Nav Links */}
        <div className="flex flex-1 justify-center">
          <div className="flex gap-x-12">
            {navLists.map((nav) => (
              <div
                key={nav}
                className={`
                  text-sm cursor-pointer transition-all
                  ${theme === "light"
                    ? "text-gray-700 hover:text-black"
                    : "text-gray-400 hover:text-white"}
                `}
              >
                {nav}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

