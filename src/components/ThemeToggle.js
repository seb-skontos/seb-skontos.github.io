import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-blue-500 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
