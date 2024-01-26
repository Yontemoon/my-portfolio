"use client"

import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import MaxAboutPage from "./components/MaxAboutPage";
import MaxProjectsPage from "./components/MaxProjectsPage";
import MaxContactPage from "./components/MaxContactPage";
import MiniPage from "./components/MiniPage";
import { usePathname } from "next/navigation";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectIcon from "./icons/ProjectIcon";
import BackArrow from "./icons/back-arrow";
import MyLinks from "./components/MyLinks";

export default function Home() {


  //State is probably not the best here.... maybe ref? 
  const [current, setCurrent] = useState(usePathname().substring(1))
  const [showBack, setShowBack] = useState(false)
  const pathName = usePathname().substring(1)


  useEffect(()=> {
    // console.log("current", current)
    if (current !== pathName) {
      setCurrent(pathName)
    }
  })

  return (
    <div className="flex w-screen h-screen text-md box-border fade-animation">
      <Layout>
        {/* <div></div> */}
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
        <div 
          id="home" 
          style={{width:"100%"}} 
          onClick={()=> setCurrent("")} 
          onMouseOver={() => setShowBack(true)} 
          onMouseOut={() => setShowBack(false)}
        >
          {current === "" ? 
            <div className="name-fade-animation">
              <h1>
                Monte Yoon
              </h1>
              <h2>
                Software Developer.
              </h2>
            </div> :
            <div 
              className="relative m-0"
            >
              <h1 className="name-fade-animation fixed lg:-rotate-90 lg:-right-20 lg:top-20 z-30 lg:mr-1 lg:mt-3 text-nowrap">
                Monte Yoon
              </h1>
              <div id="exitIcon" className={showBack ? `showExit exitIcon` : `exitIcon`}>
                {
                  <div className={`fixed bottom-0 right-0 m-2`} >
                    <BackArrow width={44}/>
                  </div> 
                }
              </div>

            </div>
          }
      </div>
      </Layout>
      <MyLinks current={current}/>
    </div>
  );
}
