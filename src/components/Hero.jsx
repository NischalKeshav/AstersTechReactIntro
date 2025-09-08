// HeroPage.jsx
import React from "react";
import { useTheme } from "./ThemeContext"; // import your context

const HeroPage = (props) => {
  const { theme } = useTheme();

  return (
    <section
      className={`
        min-h-screen flex flex-col items-center justify-center text-center px-6
        ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}
      `}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        {props.title || `Welcome to React Lessons`}
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-10">
        {props.description ||
          `Learn React step by step with interactive demos and hands-on coding challenges.`}
      </p>
      <a
        href="#lessons"
        className={`
          font-semibold px-6 py-3 rounded-2xl shadow-lg transition
          ${theme === "light"
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-white text-indigo-600 hover:bg-gray-200"}
        `}
      >
        Start Learning
      </a>
    </section>
  );
};

export default HeroPage;
