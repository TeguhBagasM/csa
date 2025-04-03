import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  const handleThemeSwitch = () => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    document.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className={`p-3 cursor-pointer rounded-xl relative overflow-hidden
        ${darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-200 text-black"}
        transition-all duration-800 ease-in-out`}
      aria-label="Toggle theme"
    >
      <BsSun
        className={`h-5 w-5 transition-all duration-800 ease-in-out
          ${darkMode ? "rotate-[-180deg] scale-0" : "rotate-0 scale-100"}`}
      />
      <BsMoonStarsFill
        className={`h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          transition-all duration-800 ease-in-out
          ${darkMode ? "rotate-0 scale-100" : "rotate-180 scale-0"}`}
      />
    </button>
  );
};

export default ThemeToggle;
