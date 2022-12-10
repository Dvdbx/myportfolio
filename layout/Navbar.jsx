import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";
import useDarkMode from "../hooks/useDarkMode";
const CustomButton = ({ children, link, title }) => (
  <Tooltip content={title}>
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex items-center text-2xl gap-2 dark:text-gray-100 px-3 py-2 rounded-lg cursor-pointer dark:hover:text-black hover:text-gray-50 ease-in duration-100">
        {children}
      </div>
    </a>
  </Tooltip>
);
const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
      <nav className=" relative w-full flex sm:justify-center space-x-4 flex-wrap items-center justify-between py-3 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 dark:bg-gray-800 dark:text-gray-50 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <CustomButton
          link={"https://github.com/Dvdbx"}
          title={"My github"}
        >
          <FaGithub />
        </CustomButton>
        <CustomButton
          link={"https://www.linkedin.com/in/sudavidbx/"}
          title={"My Linkedin"}
        >
          <FaLinkedinIn />
        </CustomButton>
        <CustomButton
          link={"https://dvdbx.github.io/"}
          title={"My resume"}
        >
          <IoIosPaper />
        </CustomButton>
        <CustomButton
          link={"mailto:davidboxiang.su@edu.ece.fr"}
          title={"My email"}
        >
          <AiOutlineMail />
        </CustomButton>
      {colorTheme === "light" ? (
          <button
            onClick={() => setTheme("light")}
            className="flex items-center  gap-2 text-slate-700 px-2 py-2 rounded-lg cursor-pointer dark:text-gray-50 dark:hover:text-indigo-500 hover:text-indigo-500 ease-in duration-100"
          >
            <BsSun />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center gap-2 text-slate-700 px-2 py-2 rounded-lg cursor-pointer dark:text-indigo-500 dark:hover:text-gray-50 hover:text-indigo-500 ease-in duration-100"
          >
            <FiMoon />
          </button>
        )}
    </nav>
  );
};

export default Navigation;
