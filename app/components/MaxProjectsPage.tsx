import ProjectLink from "./ProjectLink"
import ProjectIcon from "../icons/ProjectIcon"
import movieNextjs from "@images/movie-nextjs.jpg"
import simplePop from "@images/simple-population.jpg"
import patina from "@images/patina-image.jpg"

const MaxProjectsPage = () => {
  return (
    <main className="fade-animation flex flex-col items-center p-4 overflow-y-auto scroll-style delayed-fade-animation">
      <div className="m-5">
        <ProjectIcon width={40} />
      </div>
      <h1>My Projects</h1>

      <div className="flex flex-col items-center p-4">
        <ProjectLink
          title="Simple Pop Sim - Population Simulator"
          project_description="Small application that shows a simulation of the births and deaths around the world. Techstack: React, Vite, D3.js"
          image={simplePop}
          link_to_case="https://github.com/Yontemoon/population-simulator"
          link_to_site="https://simplepopsim.com/"
        />
        <ProjectLink
          title="Patina - Marketing Website"
          project_description="Static website for a catering company. Showcases services, menus, and customer testimonials with a modern, responsive design. Integrated a CMS for the owner to easily manage the image gallery. Tech stack: Next.js, React, Tailwind CSS, Prismic"
          image={patina}
          link_to_site="https://patina-llc.com/"
        />

        <ProjectLink
          title="Monte Movies - Movie Tracker"
          project_description="Application to search for movies. Add movies to your own watchlist, rate movies, and add them to your favorites. V2 coming soon..."
          image={movieNextjs}
          link_to_case="https://github.com/Yontemoon/movie-nextjs"
          link_to_site="https://movie-nextjs-chi.vercel.app/"
        />
      </div>

      {/* <p className="text-start">
                View My Résumé
            </p> */}
    </main>
  )
}

export default MaxProjectsPage
