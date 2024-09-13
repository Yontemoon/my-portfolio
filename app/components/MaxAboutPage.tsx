import AboutIcon from "../icons/AboutIcon";

const MaxAboutPage = () => {
  return (
    <main className="delayed-fade-animation p-4 fade-animation w-full flex justify-center overflow-y-auto scroll-style">
      <div className="max-w-screen-sm m-4">
        <div className="flex justify-center m-5">
          <AboutIcon color={"black"} width={40} />
        </div>
        <h1 className="flex justify-center">About Me</h1>
        <br />
        <p className="text-lg">Hello! My name is Monte Yoon.</p>
        <br />
        <p className="text-lg">
          I am a front-end developer specializing in building web applications
          in Javascript, Typescript, React and its framework, Next.js.
          Currently, I work as a software developer for&nbsp;
          <a
            href="https://zoohilldata.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Zoo Hill Data
          </a>
          , a software development company based in Seattle, Washington.
        </p>
        <br />
        <p className="text-lg">
          In 2022, I graduated from the University of Washington with a degree
          in Construction Management. Although I started my career in that
          field, I soon discovered my passion for software development through
          content management via CMS at work. Since then, I pivoted towards
          software development and have not looked back since!
        </p>
        <br />
        <p className="text-lg">
          In my free time, I enjoy unwinding by watching&nbsp;
          <a
            href="https://letterboxd.com/Holycrabs/"
            rel="noopener noreferrer"
            target="_blank"
          >
            movies
          </a>
          , practicing jiu-jitsu, and climbing bouldering gyms.
        </p>
        <br />
        {/* <h2>Front-end Tools</h2>
        <div className="grid grid-cols-6 mt-5">
          <Javascript />
        </div> */}
      </div>
    </main>
  );
};

export default MaxAboutPage;
