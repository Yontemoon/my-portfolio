import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_text: "rgb(var(--color-text) / <alpha-value>)",
        about: "rgb(var(--color-about) / <alpha-value>)",
        projects: "rgb(var(--color-projects) / <alpha-value>)",
        contact: "rgb(var(--color-contact) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
