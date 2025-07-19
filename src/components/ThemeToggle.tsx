import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 text-yellow-500 ${
            isHovered ? "scale-110" : "scale-100"
          } transition-transform duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 text-gray-400 ${
            isHovered ? "scale-110" : "scale-100"
          } transition-transform duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggle;
