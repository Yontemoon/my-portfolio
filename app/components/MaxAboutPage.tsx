import Image from "next/image";
import aboutIcon from "../icons/about-icon.svg" 
import AboutIcon from "../icons/AboutIcon";

const MaxAboutPage = () => {
    return (
       
        <main className='m-4 max-w-screen-sm fade-animation'>
            <div className="flex justify-center m-5">
                <AboutIcon color={"black"} width={40}/>
            </div>
            <h1 className='flex justify-center'>About Me</h1>
            <br/>
            <br/>
            <p className='text-lg'>
                I am junior developer currently based in Seattle, Washington.
            </p>
            <br/>
            <p className='text-lg'>
                My joy comes from creating applications that not only make users&apos; lives easier but also deliver seamless 
                experiences from frontend to backend. As a junior developer, I thrive on tackling intricate challenges 
                in software development.
            </p>
            <br/>
            <p className='text-lg'>
                I find satisfaction in architecting and implementing fullstack solutions for large-scale projects. 
                This holistic approach allows me to contribute to the entire software stack, ensuring robust and scalable applications. 
                My goal is to continue honing my skills in both frontend and backend development, making meaningful contributions to the 
                dynamic field of fullstack engineering.
            </p>
            <br/>
            <p className='text-lg'>
                When I&apos;m not on the computer banging my head against the screen, I like to unwind by watching&nbsp;
                <a href="https://letterboxd.com/Holycrabs/" rel="noopener noreferrer" target="_blank" >movies</a>, 
                practicing jui-jitsu, and going for long walks around the neighborhood.
            </p>
            
        </main>
        
    );
};

export default MaxAboutPage;