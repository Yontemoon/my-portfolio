"use client"

import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import { routes } from "./lib/routes"
import MaxAboutPage from "./components/MaxAboutPage";
import MaxProjectsPage from "./components/MaxProjectsPage";
import MaxContactPage from "./components/MaxContactPage";
import MiniPage from "./components/MiniPage";
import { usePathname } from "next/navigation";
import projectIcon from "./icons/project-icon.svg"
import contactIcon from "./icons/contact-icon.svg"
import aboutIcon from "./icons/about-icon.svg"
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectIcon from "./icons/ProjectIcon";

export default function Home() {


  //State is probably not the best here.... maybe ref? 
  const [current, setCurrent] = useState(usePathname().substring(1))
  const pathName = usePathname().substring(1)


  useEffect(()=> {
    // console.log("current", current)
    if (current !== pathName) {
      setCurrent(pathName)
    }
  })

  return (
    <div className="flex w-screen h-full box-border">
      <Layout>
        <div style={{ background: "#87BCDE"}} className="mini-navbar rounded-2xl" id="about" onClick={()=> setCurrent("about")}>

            {current === "about" ?
              <MaxAboutPage/> :
              <MiniPage header="About Me">
                <AboutIcon color="white" width={35}/>
              </MiniPage>
            }

        </div>
        <div style={{ background: "#4E4D5C"}} id="projects" className="mini-navbar rounded-2xl" onClick={()=> setCurrent("projects")}>

          {current === "projects" ? 
            <MaxProjectsPage/> :
            <MiniPage header="My Projects">
              <ProjectIcon color="white" width={35}/>
            </MiniPage>
          }
        </div>

        <div style={{ background: "#805E73"}} className="mini-navbar rounded-2xl" id="contact" onClick={()=> setCurrent("contact")}>
          {current === "contact" ? 
            <MaxContactPage/> :
            <MiniPage header="Contact Me">
              <ContactIcon color="white" width={35}/>
            </MiniPage>
          }
        </div>
        <div  id="home" style={{width:"100%"}} onClick={()=> setCurrent("")}>
          {current === "" ? 
            <div className="fade-animation">
              <h1 className="">
                Monte Yoon
              </h1>
              <h2>
                Software Engineer.
              </h2>
            </div > :
            <h1 className="fade-animation">
              Monte Yoon
            </h1>
          }
      </div>
      </Layout>

    </div>
  );
}
