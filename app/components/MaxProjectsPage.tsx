import ProjectLink from "./ProjectLink";
import templateImg from "../images/template-image.jpg"
import ProjectIcon from "../icons/ProjectIcon";
import MovieNextjs from "../images/movie-nextjs.jpg"

const MaxProjectsPage = () => {


    return (
        <main className="fade-animation flex flex-col items-center text-white m-6" style={{overflowY: "scroll", scrollBehavior: "smooth" }}>
            <div className="m-5">
                <ProjectIcon color="white" width={40}/>
            </div>
                <h1>My Projects</h1>


            <div className="flex flex-col items-center p-4">
                <ProjectLink 
                    title="Monte Movies - Movie Tracker"
                    project_description="Application to search for movies. Add movies to your own watchlist, rate movies, and add them to your favorites. Used Third Party API (TMDb)."
                    image={MovieNextjs}
                    descriptors={["Next.js", "Authentication", "Frontend", "API"]}
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