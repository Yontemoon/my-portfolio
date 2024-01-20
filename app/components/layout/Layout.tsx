"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "../../lib/routes";
import "./layout.css"

const Layout = ({ children }: any) => {
  console.log("children: ", children);
  const [active, setActive] = useState<number | null>(null); //set this to null

  const router = useRouter();
  const pathUrl = usePathname();

  const columnVariants = {
    initial: { flex: 1 },
    expanded: { flex: 9 },
  };


  useEffect(() =>{
    // if(active === null) return

    const currentIndex = routes.findIndex(route => route === pathUrl.substring(1))
    if (active !== currentIndex) {
      setActive(currentIndex)
    }
  },[])

  useEffect(() => {
    if(active === null) return
    const currentIndex = routes.findIndex(route => route === pathUrl.substring(1))
    // console.log("active", active)
    // console.log("currentindex", currentIndex)
    if (active !== currentIndex) {
      setActive(currentIndex)
    }
    
  })

  const handleRoute = (index: number, route:string) => {
    setActive(index);
    router.push(`/${route}`)
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        const cursorStyle = isActive ? "auto" : "pointer"; 
        
        return (
          <motion.div
            key={i}
            variants={columnVariants}
            className={i === 3 ? "parent-home" : "parent-div"}
            animate={i === 3 && isActive ? "initial" : isActive ? "expanded" : "initial"}
            transition={{duration: 0.5, delay: 0.2}}
            onClick={() => handleRoute(i, routes[i])}
            style={{ overflow: "hidden", cursor: cursorStyle , display: "flex", margin: "1em", flex: 1, position: "relative", borderRadius: "25px"}}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Layout;
