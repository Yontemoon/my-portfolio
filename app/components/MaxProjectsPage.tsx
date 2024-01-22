import ProjectLink from "./ProjectLink";
import templateImg from "../images/template-image.jpg"
import ProjectIcon from "../icons/ProjectIcon";

const MaxProjectsPage = () => {


    return (
        <main className="fade-animation flex flex-col items-center text-white m-6" style={{overflowY: "scroll", scrollBehavior: "smooth" }}>
            <div className="m-5">
                <ProjectIcon color="white" width={40}/>
            </div>
                <h1>My Projects</h1>


            <div className="flex flex-col items-center p-4">
                <ProjectLink 
                    title={"Movie List"}
                    project_description="Application to search for movies to add onto your watchlist or favorite it if you've already watched it."
                    image={templateImg}
                    descriptors={["React", "Web Design", "Full Stack"]}
                    link_to_case="/case-movie-app"
                    link_to_site="youtube.com"
                />
                <ProjectLink 
                    title={"Movie List"}
                    project_description="Application to search for movies to add onto your watchlist or favorite it if you've already watched it."
                    image={templateImg}
                    descriptors={["React", "Web Design", "Full Stack"]}
                    link_to_case="/case-movie-app"
                    link_to_site="youtube.com"
                />
                <ProjectLink 
                    title={"Movie List"}
                    project_description="Application to search for movies to add onto your watchlist or favorite it if you've already watched it."
                    image={templateImg}
                    descriptors={["React", "Web Design", "Full Stack"]}
                    link_to_case="/case-movie-app"
                    link_to_site="youtube.com"
                />
                <ProjectLink 
                    title={"Movie List"}
                    project_description="Application to search for movies to add onto your watchlist or favorite it if you've already watched it."
                    image={templateImg}
                    descriptors={["React", "Web Design", "Full Stack"]}
                    link_to_case="/case-movie-app"
                    link_to_site="youtube.com"
                />
            </div>
            {/* <p className="text-start">
                View My Résumé
            </p> */}
        </main>
    );
};

export default MaxProjectsPage;