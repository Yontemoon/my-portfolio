"use client";

import clsx from "clsx";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";

const ThemeButton = ({ className }: { className?: string }) => {
  const [showThemes, setShowThemes] = useState(false);

  const toggleThemeSelector = () => {
    setShowThemes(!showThemes);
  };

  return (
    <div className="relative z-50">
      <h2
        onClick={toggleThemeSelector}
        className={clsx(
          " border border-transparent rounded-xl p-1 hover:bg-about hover:text-primary_text hover:shadow-sm z-50 relative",
          className
        )}
      >
        Themes
      </h2>
      {showThemes && (
        <div className="fixed left-0 top-0">
          <ThemeSelector setShowThemes={setShowThemes} />
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
