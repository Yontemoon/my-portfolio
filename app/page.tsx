/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Layout from "./components/animation/LayoutShift";
import { useEffect, useState } from "react";
import MaxAboutPage from "./components/MaxAboutPage";
import MaxProjectsPage from "./components/MaxProjectsPage";
import MaxContactPage from "./components/MaxContactPage";
import MiniPage from "./components/MiniPage";
import { usePathname } from "next/navigation";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectIcon from "./icons/ProjectIcon";
import MaxHomePage from "./components/MaxHomePage";
import MiniHomePage from "./components/MiniHomePage";

export default function Home() {
  const [current, setCurrent] = useState(usePathname().substring(1));
  const [showBack, setShowBack] = useState(false);
  const pathName = usePathname().substring(1);
  useEffect(() => {
    if (current !== pathName) {
      setCurrent(pathName);
    }
  });

  return (
    <>
      <Layout>
        <div
          className="mini-navbar bg-about"
          id="about"
          onClick={() => setCurrent("about")}
        >
          {current === "about" ? (
            <MaxAboutPage />
          ) : (
            <MiniPage header="About Me">
              <AboutIcon width={35} />
            </MiniPage>
          )}
        </div>
        <div
          id="projects"
          className="mini-navbar bg-projects"
          onClick={() => setCurrent("projects")}
        >
          {current === "projects" ? (
            <MaxProjectsPage />
          ) : (
            <MiniPage header="My Projects">
              <ProjectIcon width={35} />
            </MiniPage>
          )}
        </div>

        <div
          className="mini-navbar bg-contact"
          id="contact"
          onClick={() => setCurrent("contact")}
        >
          {current === "contact" ? (
            <MaxContactPage />
          ) : (
            <MiniPage header="Contact Me">
              <ContactIcon width={35} />
            </MiniPage>
          )}
        </div>
        <div
          id="home"
          className="w-full text-black z-10 relative"
          onClick={() => setCurrent("")}
          onMouseOver={() => setShowBack(true)}
          onMouseOut={() => setShowBack(false)}
        >
          {current === "" ? (
            <MaxHomePage setShowBack={setShowBack} />
          ) : (
            <MiniHomePage setShowBack={setShowBack} showBack={showBack} />
          )}
        </div>
      </Layout>
    </>
  );
}
