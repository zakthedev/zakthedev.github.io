import { footer } from "@/data/config";

export default function Footer() {
  const { logoTitle, links } = footer;
  return (
    <footer className="bg-white rounded-lg dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center md:justify-between ">
          <span className="hidden md:block colorful text-sm font-extrabold">
            {logoTitle}
          </span>
          <ul className="flex flex-wrap items-center justify-center md:justify-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((item, index) => {
              const style =
                index === links.length - 1
                  ? "hover:colorful"
                  : "mr-4 hover:colorful md:mr-6";
              return (
                <li key={`link-${index}`}>
                  <a href={`#${item.linkId}`} className={style}>
                    {item.linkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 md:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Your vision, Our expertise. © 2023
        </span>
        <span className="flex block md:hidden colorful text-sm font-extrabold justify-center">
          {logoTitle}
        </span>
      </div>
    </footer>
  );
}
