import CodeBlockDemo from "./CodeBlockDemo";
import React from "react";
import { useTheme } from "./ThemeContext";

const WhatareComponents = () => {
  const { theme } = useTheme();

  const codeString = `
const HelloWorld = () => {
  return (
    <h1>Hello, World!</h1>
  );
};
`;

  return (
      <section
      className={`
        w-full min-h-screen flex items-center justify-center transition-colors duration-500
        ${theme === "light" ? "bg-white" : "bg-black"}
      `}
    >
      {/* Outer curved block */}
      <div
        className={`
          w-11/12 md:w-3/4 rounded-3xl shadow-xl p-10 flex items-center justify-center transition-colors duration-500
          ${theme === "light" ? "bg-indigo-600" : "bg-indigo-800"}
        `}
      >
        {/* Inner curved block */}
        <div
          className={`
            w-full md:w-2/3 rounded-2xl shadow-lg p-6 text-center transition-colors duration-500
            ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"}
          `}
        >
          <h2 className="text-3xl font-bold mb-4">
            Nested Curved Block
          </h2>
          <p className="text-lg">
            This block changes styles with the theme!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatareComponents;
