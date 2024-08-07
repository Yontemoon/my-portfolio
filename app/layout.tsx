import type { Metadata } from "next";
import "./globals.css";
import { fira_sans } from "@/app/ui/fonts";
import clsx from "clsx";

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
          "flex w-screen h-screen text-md box-border fade-animation antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
