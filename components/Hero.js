import { hero } from "@/data/config";
import Image from "next/image";

export default function Hero() {
  const { greeting, title, name, description } = hero;
  return (
    <div
      id="about"
      className="flex flex-col justify-center min-h-[87vh] pb-8 md:pb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 pt-6">
        <div className="col-span-1 md:col-span-1 flex justify-center items-center">
          <PortImage />
        </div>
        <div className="flex flex-col justify-center col-span-1 md:col-span-1 md:order-first">
          <div className="pt-2 md:pt-0">
            <PortTitle />
          </div>
          <div className="pt-4">
            <PortDesc />
          </div>
          <div className="pt-2">
            <PortSocials />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-center pt-12">
        <PortCTA />
      </div>
    </div>
  );
}

const PortImage = () => {
  return (
    <div className="avatar">
      <div className="w-36 md:w-48 mask mask-hexagon">
        <img src="/static/profile.jpg" alt="Zakarya"></img>
      </div>
    </div>
  );
};

const PortTitle = () => {
  const { greeting, title, name } = hero;
  return (
    <div className="flex flex-col space-y-2 w-full">
      <h1 className="text-4xl font-bold">{greeting}</h1>
      <span className="flex w-full justify-center items-center space-x-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="text-4xl about__name font-bold colorful">{name}</span>
      </span>
    </div>
  );
};

const PortDesc = () => {
  const { description } = hero;
  return (
    <div className="text-xl font-bold">
      <h1>{description}</h1>
    </div>
  );
};

const PortCTA = () => {
  const { description } = hero;
  return (
    <div className="flex space-x-2">
      <button
        type="button"
        className="text-gray-900 font-extrabold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        VIEW RESUME
      </button>
      <a href="#contact">
        <button
          type="button"
          className="text-gray-900 font-extrabold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <span className="colorful">{`➜ HIRE ME`}</span>
        </button>
      </a>
    </div>
  );
};

export const PortSocials = () => {
  return (
    <div className="flex justify-center  md:justify-start items-center">
      <a
        className="w-12 h-12 flex justify-center items-center rounded-full  transition hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:text-white"
        href="https://www.linkedin.com/in/zakthedev"
        target="__blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
      <a
        className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-600 transition dark:text-white"
        href="https://github.com/zakthedev"
        target="__blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
          ></path>
        </svg>
      </a>
      <a
        className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-600 transition  dark:text-white"
        href="tel:+213554735214"
        target="__blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
      <a
        className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-600 transition dark:text-white"
        href="mailto:mamouni.zakarya@gmail.com?mailto=mamouni.zakarya@gmail.com"
        target="__blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="h-5 w-5"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
        </svg>
      </a>
    </div>
  );
};
