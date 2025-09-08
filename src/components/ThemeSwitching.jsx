import { useTheme } from "./ThemeContext";

const TButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};
export { TButton };