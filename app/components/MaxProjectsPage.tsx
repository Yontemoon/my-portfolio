import ProjectLink from "./ProjectLink";
import ProjectIcon from "../icons/ProjectIcon";
import MovieNextjs from "../images/movie-nextjs.jpg";
import SimplePop from "../images/simple-population.jpg";

const MaxProjectsPage = () => {
  return (
    <main className="fade-animation flex flex-col items-center p-4 overflow-y-auto scroll-style delayed-fade-animation">
      <div className="m-5">
        <ProjectIcon width={40} />
      </div>
      <h1>My Projects</h1>

      <div className="flex flex-col items-center p-4">
        <ProjectLink
          title="Simple World Simulator"
          project_description="Application that shows a simulations of the births and deaths around the world."
          image={SimplePop}
          link_to_case="https://github.com/Yontemoon/population-simulator"
          link_to_site="https://population-simulator-dun.vercel.app/"
        />
        <ProjectLink
          title="Monte Movies - Movie Tracker"
          project_description="Application to search for movies. Add movies to your own watchlist, rate movies, and add them to your favorites. V2 coming soon..."
          image={MovieNextjs}
          link_to_case="https://github.com/Yontemoon/movie-nextjs"
          link_to_site="https://movie-nextjs-chi.vercel.app/"
        />
      </div>

      {/* <p className="text-start">
                View My Résumé
            </p> */}
    </main>
  );
};

export default MaxProjectsPage;
