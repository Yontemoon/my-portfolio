import ProjectLink from "./ProjectLink";
import templateImg from "../images/template-image.jpg"

const MaxProjectsPage = () => {


    return (
        <main className="fade-animation text-white m-6  flex flex-col items-center" style={{overflowY: "scroll", scrollBehavior: "smooth" }}>

            <h1>My Projects</h1>

            <br/>
            <br/>
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
            <p className="text-start">
                View My Résumé
            </p>
        </main>
    );
};

export default MaxProjectsPage;