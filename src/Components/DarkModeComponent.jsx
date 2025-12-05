import React from "react";
import { useTheme } from "./ThemeProvider";

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 15px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: darkMode ? "#fff" : "#000",
        color: darkMode ? "#000" : "#fff",
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
