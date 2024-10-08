/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "../../lib/routes";
import clsx from "clsx";
import "./layoutShift.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<number | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const columnVariants = {
    initial: { flex: 1 },
    expanded: { flex: 9 },
  };

  useEffect(() => {
    const currentIndex = routes.findIndex(
      (route) => route === pathname.substring(1)
    );
    if (active !== currentIndex) {
      setActive(currentIndex);
    }
  }, []);

  useEffect(() => {
    if (active === null) return;
    const currentIndex = routes.findIndex(
      (route) => route === pathname.substring(1)
    );

    if (active !== currentIndex) {
      setActive(currentIndex);
    }
  });

  const handleRoute = (index: number, route: string) => {
    setActive(index);
    router.push(`/${route}`);
  };

  return (
    <div
      className={`flex flex-col h-screen w-screen lg:flex-row lg:gap-4 lg:py-3 gap-2 px-2 pt-2`}
    >
      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        const cursorStyle = isActive ? "auto" : "pointer";

        return (
          <motion.div
            key={i}
            variants={columnVariants}
            className={clsx(
              i === 3 ? "parent-home" : "parent-div",
              "lg:min-w-28 min-h-20 rounded-xl"
            )}
            animate={
              i === 3 && isActive
                ? "initial"
                : isActive
                ? "expanded"
                : "initial"
            }
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            onClick={() => handleRoute(i, routes[i])}
            style={{
              overflow: "hidden",
              cursor: cursorStyle,
              display: "flex",
              flex: 1,
              position: "relative",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Layout;
