"use client"; // This entire file is now a Client Component.

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

// --- TYPE DEFINITIONS ---
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// --- THEME CONTEXT & PROVIDER LOGIC ---
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    let storedTheme: string | null = null;
    try {
      storedTheme = localStorage.getItem(storageKey);
    } catch (e) {
      console.error("Accessing localStorage failed:", e);
    }
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.error("Saving to localStorage failed:", e);
    }
  }, [theme, storageKey]);

  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// --- CUSTOM HOOK ---
// Your page will import this hook to access the theme.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
