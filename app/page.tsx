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
import MaxHomePage from "./components/MaxHomePage";
import MiniHomePage from "./components/MiniHomePage";

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
            <MaxHomePage/> :
            <MiniHomePage setShowBack={setShowBack} showBack={showBack}/>
          }
      </div>
      </Layout>
      <MyLinks current={current}/>
    </div>
  );
}
