import React from "react";
import { useTheme } from "../context/ThemeContext";
const themes = [
  "default",
  "fiesta",
  "nostalgia",
  "ikea",
  "mint-chocolate",
  "cambridge",
  "ocean",
  "moody",
  "charlie-brown",
];

const ThemeSelector = () => {
  const { handleThemeChange } = useTheme();

  return (
    <div className={` `}>
      {themes.map((t) => (
        <div
          key={t}
          className="cursor-pointer text-black"
          onClick={() => handleThemeChange(t)}
        >
          {t}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
