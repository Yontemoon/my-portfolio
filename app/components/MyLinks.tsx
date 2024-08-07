import LetterBoxd from "../icons/LetterBoxedLogo";
import Linkedin from "../icons/LinkedinIcon";
import Github from "../icons/GithubIcon";

const MyLinks = () => {
  return (
    <div className="delayed-fade-animation flex lg:flex-col flex-row content-center m-auto">
      <a
        href="https://www.linkedin.com/in/monte-yoon-a1108114a/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/Yontemoon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="https://letterboxd.com/Holycrabs/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LetterBoxd />
      </a>
    </div>
  );
};

export default MyLinks;
