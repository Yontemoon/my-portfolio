import type { Metadata } from "next";
import "./globals.css";
import { fira_sans } from "@/app/ui/fonts";
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
          "flex w-screen h-screen text-md box-border antialiased text-primary_text transition-colors duration-1000"
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
