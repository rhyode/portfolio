"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext"; // Assuming your custom context is here

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-16 h-8 rounded-full flex items-center cursor-pointer transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-teal-500" : "bg-orange-500"
      } shadow-inner shadow-gray-700 focus:outline-none`}
      aria-label="Toggle Theme"
      style={{
        padding: "4px", // Matches the '4' on Tailwind's spacing scale
      }}
    >
      {/* The slider handle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        } ${isHovered ? "scale-110" : ""}`}
      >
        {/* Sun Icon (Visible in Light Mode) */}
        <svg
          className={`w-full h-full p-1 transition-opacity duration-500 ease-in-out ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F97316" // Orange for sun
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        {/* Moon Icon (Visible in Dark Mode) */}
        <svg
          className={`w-full h-full p-1 transition-opacity duration-500 ease-in-out absolute top-0 left-0 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#14B8A6" // Teal for moon
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </button>
  );
}
