"use client";

import clsx from "clsx";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";
import { motion } from "framer-motion";

const ThemeButton = ({ className }: { className?: string }) => {
  const [showThemes, setShowThemes] = useState(false);

  const toggleThemeSelector = () => {
    // event.stopPropagation();
    setShowThemes(!showThemes);
  };

  return (
    <>
      <motion.button
        className="relative z-50"
        initial={{ scale: 1 }}
        animate={{ scale: showThemes ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        onClick={toggleThemeSelector}
      >
        <motion.h2
          className={clsx(
            " border border-transparent rounded-xl p-2 hover:bg-about hover:text-primary_text hover:shadow-sm z-50 relative ",
            className
          )}
        >
          Themes
        </motion.h2>
      </motion.button>
      {showThemes && <ThemeSelector setShowThemes={setShowThemes} />}
    </>
  );
};

export default ThemeButton;
