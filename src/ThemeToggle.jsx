import { useContext } from "react";
import { ThemeContext } from "./App";

export default function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkTheme ? "☀️" : "🌙"}
    </button>
  );
}
