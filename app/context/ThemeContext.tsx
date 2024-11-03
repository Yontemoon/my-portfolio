"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { nextLocalStorage } from "../lib/utils";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  handleThemeChange: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const localTheme = nextLocalStorage()?.getItem("local-theme");
  const [theme, setTheme] = useState(localTheme || "default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("local-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
