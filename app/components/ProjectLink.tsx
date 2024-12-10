import Image, { StaticImageData } from "next/image";

type PropTypes = {
  title: string;
  project_description: string;
  image: StaticImageData;
  link_to_case: string;
  link_to_site: string;
};

const ProjectLink = ({
  title,
  project_description,
  image,
  link_to_case,
  link_to_site,
}: PropTypes) => {
  return (
    <div className="w-full xl:w-3/4 p-4 m-5 bg-opacity-40 rounded-lg bg-gray-500 shadow-md duration-500 grid lg:grid-cols-3 grid-cols-1 gap-5">
      <div className="flex flex-col gap-5 col-span-2">
        <h2 className="font-semibold tracking-wide">{title}</h2>
        <p className="">{project_description}</p>
        <div className="gap-4 flex justify-center lg:justify-start">
          <a
            href={link_to_case}
            className="border-2 rounded p-2 border-primary_text hover:bg-primary_text/10 hover:no-underline"
            rel="noreferrer"
            target="_blank"
          >
            View Code
          </a>
          <a
            href={link_to_site}
            className="border-2 rounded p-2 border-primary_text hover:bg-primary_text/10 hover:no-underline"
            rel="noreferrer"
            target="_blank"
          >
            Link to Site
          </a>
        </div>
      </div>
      <div className="lg:block hidden rounded m-auto">
        <a href={link_to_site} rel="noreferrer" target="_blank">
          <Image
            className="flex items-center hover:ease-in-out z-10 rounded-lg box-border max-w-full max-h-full flex-shrink-0 object-contain"
            src={image}
            alt={`${image}`}
            height={180}
            width={300}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectLink;
