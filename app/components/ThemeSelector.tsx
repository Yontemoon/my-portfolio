import React from "react";
import { useTheme } from "../context/ThemeContext";
const themes = ["default", "fiesta"];

const ThemeSelector = () => {
  const { setTheme } = useTheme();

  return (
    <div className={`flex gap-4 `}>
      {themes.map((t) => (
        <div key={t} className="cursor-pointer" onClick={() => setTheme(t)}>
          {t}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
