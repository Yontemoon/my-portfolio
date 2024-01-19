"use client"

import Layout from "./components/layout/Layout";
import TextFade from "./components/TextFade";
import { useEffect, useState } from "react";
import { routes } from "./lib/routes"
import MaxAboutPage from "./components/MaxAboutPage";
import MaxProjectsPage from "./components/MaxProjectsPage";
import MaxContactPage from "./components/MaxContactPage";
import MiniPage from "./components/MiniPage";
import { usePathname } from "next/navigation";
import layers from "./icons/layers.svg"
import mail from "./icons/mail.svg"
import user from "./icons/user.svg"


export default function Home() {

  const [current, setCurrent] = useState(usePathname().substring(1))
  const pathName = usePathname().substring(1)


  useEffect(()=> {
    console.log("current", current)
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
              <MiniPage header="About Me" icon={user}/>
            }

        </div>
        <div style={{ background: "#4E4D5C"}} id="projects" className="mini-navbar  rounded-2xl" onClick={()=> setCurrent("projects")}>

          {current === "projects" ? 
            <MaxProjectsPage/> :
            <MiniPage header="My Projects" icon={layers}/>
          }
        </div>

        <div style={{ background: "#805E73"}} className="mini-navbar rounded-2xl" id="contact" onClick={()=> setCurrent("contact")}>
          {current === "contact" ? 
            <MaxContactPage/> :
            <MiniPage header="Contact Me" icon={mail}/>
          }
        </div>
        <div id="home" style={{width:"100%"}} onClick={()=> setCurrent("")}>
          <h1 className="">
            Monte Yoon
          </h1>
          <h2>
            Software Engineer.
          </h2>
      </div>
      </Layout>

    </div>
  );
}
