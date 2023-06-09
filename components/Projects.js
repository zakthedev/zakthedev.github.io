import { projects } from "@/data/config";
import { PortSocials } from "./Hero";

export default function Projects() {
  const { items, desc, title, extraDesc } = projects;

  const ProjectsCards = ({ view }) => {
    return (
      <div className="w-full carousel rounded-box">
        {items.map((project, index) => {
          return (
            <span
              key={`project-${index}-${view}`}
              className="carousel-item w-full justify-center"
            >
              <ProjectCard project={project} />
            </span>
          );
        })}
        <span
          key={`project-${items.length}-${view}`}
          className="carousel-item w-full justify-center"
        >
          <ProjectCardLast />
        </span>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <div className="flex flex-row w-full space-x-4">
        <div className="flex flex-col space-y-2 w-1/2">
          <div>
            <h1>{desc}</h1>
          </div>
          <div>
            <p>{extraDesc}</p>
          </div>
        </div>
        <div className="w-1/2">
          <ProjectsCards view="desktop" />
        </div>
      </div>
    );
  };

  const MobileView = () => {
    return (
      <div className="flex flex-col w-full items-center justify-center space-y-2">
        <div className="w-full">
          <h1>{desc}</h1>
        </div>
        <div className="w-full">
          <ProjectsCards view="mobile" />
        </div>
        <div className="pt-2 w-full">
          <p>{extraDesc}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="projects">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {title}
        </h2>
        <div className="hidden md:block">
          <DesktopView />
        </div>
        <div className="block md:hidden">
          <MobileView />
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const { title, desc, img } = project;
  return (
    <div className="max-w-sm border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:focus:ring-gray-700 shadow">
      <img className="rounded-t-lg" src={img} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

const ProjectCardLast = () => {
  return (
    <div className="max-w-sm border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:focus:ring-gray-700 shadow">
      <div className="flex flex-col p-5 h-full">
        <div className="h-1/3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Want more?
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            If you want to see more of my projects you can:
          </p>
        </div>

        <div className="flex flex-col space-y-4 justify-center items-center h-2/3">
          <PortSocials />
          <h3>or</h3>
          <a href="#contact">
            <button
              type="button"
              className="text-gray-900 font-extrabold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5  dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
