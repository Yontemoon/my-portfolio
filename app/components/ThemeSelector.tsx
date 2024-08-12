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
  "museum",
  "fall",
  "aquarium",
  "mirage",
];

const ThemeSelector = ({
  setShowThemes,
}: {
  setShowThemes: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { handleThemeChange } = useTheme();

  const toggleTheme = (t: string) => {
    handleThemeChange(t);
    setShowThemes(false);
  };

  return (
    <div className={` `}>
      {themes.map((t) => (
        <div
          key={t}
          className="cursor-pointer text-black z-50"
          onClick={() => toggleTheme(t)}
        >
          {t}
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
