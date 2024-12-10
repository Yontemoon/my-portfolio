import React from "react";
import { useTheme } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { fira_sans } from "../lib/fonts";
import ExternalLink from "./ExternalLink";
import { THEMES } from "../lib/constants";

const ThemeSelector = ({
  setShowThemes,
}: {
  setShowThemes: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { handleThemeChange, theme } = useTheme();

  const toggleTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    handleThemeChange(selectedTheme);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 z-40 cursor-default"
        onClick={() => setShowThemes(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={"overlay"}
      />

      <motion.div
        key={"selectSection"}
        className="fixed left-1/2 top-1/2 lg:w-1/4 w-4/5 lg:m-0 bg-about h-auto z-50 rounded-xl shadow-xl p-3 cursor-default"
        transition={{ ease: "easeOut", duration: 0.3, type: "spring" }}
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-primary_text">Select a theme: </h2>

        <select
          name="theme"
          id="color-theme"
          defaultValue={theme}
          className="my-2 w-full p-3 rounded-lg bg-projects text-primary_text shadow-lg cursor-pointer fira_sans.className"
          onChange={toggleTheme}
        >
          {THEMES.map((t, index) => (
            <option
              key={index}
              value={t}
              className={clsx(
                "checked:bg-contact  bg-projects text-primary_text ",
                fira_sans.className
              )}
            >
              {t}
            </option>
          ))}
        </select>
        <p className="text-primary_text">
          Credit for all the themes:&nbsp;
          <ExternalLink href="https://coolors.co/">coolors.co</ExternalLink>
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeSelector;
