import type { Metadata } from "next";
import "./globals.css";
import { fira_sans } from "./lib/fonts";
import clsx from "clsx";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Monte Yoon's Portfolio",
  description: "Monte Yoon's portfolio website",

  keywords: ["Monte Yoon", "Monte", "Yoon", "Jiseok Yoon", "Jiseok"],
  openGraph: {
    description: "Monte Yoon's portfolio website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          fira_sans.className,
          "relative flex w-screen h-screen box-border antialiased text-primary_text"
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
