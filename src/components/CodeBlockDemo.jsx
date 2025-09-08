// CodeBlockDemo.jsx
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { useTheme } from "./ThemeContext";

const CodeBlockDemo = ({ code, language = "javascript" }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-4xl my-10 px-4">
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={false}
        
        codeBlock
        theme={theme === "light" ? undefined : dracula} // default light theme if undefined
        className="w-full rounded-xl shadow-lg overflow-x-auto"
      />
    </div>
  );
};

export default CodeBlockDemo;
