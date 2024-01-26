import LetterBoxd from "../icons/LetterBoxedLogo";
import Linkedin from "../icons/LinkedinIcon";
import Github from "../icons/GithubIcon";

const MyLinks = ({current}: {current: string}) => {
    return (
        <div className="name-fade-animation">
            {
                current === "" ? 
                <span className="fixed flex mb-2 mr-5 bottom-0 right-0 z-10">
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <Linkedin/>
                    </a>
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <Github/>
                    </a>
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <LetterBoxd/>
                    </a>
                </span> 
                :
                <div className="name-fade-animation fixed lg:right-0 lg:bottom-32 lg:mr-1 bottom-0 right-32 z-20 flex flex-row lg:flex-col">
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <Linkedin/>
                    </a>
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <Github/>
                    </a>
                    <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" className="name-fade-animation">
                        <LetterBoxd/>
                    </a>
                </div>}
        </div>
    );
};

export default MyLinks;