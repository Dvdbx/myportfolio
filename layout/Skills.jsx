import Image from "next/image";
import React from "react";

import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/nextjs.png";
import VS from "../public/assets/skills/vscode.png";
import Mongo from "../public/assets/skills/mongo.png";

import C from "../public/assets/skills/c.png";
import CP from "../public/assets/skills/c++.png";
import CSS from "../public/assets/skills/css.png";
import Html from "../public/assets/skills/html.png";
import JS from "../public/assets/skills/js.png";
import SQL from "../public/assets/skills/sql.png";

import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-5 dark:text-gray-100">
      <div className="flex items-center justify-center mt-12">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dvdbx"
            className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg hover:text-black bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 text-white font-bold text-sm cursor-pointer"
          >
            <FaGithub className="h-6 w-6" /> View my projects on GitHub
          </a>
        </div>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-bold text-xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">
          Skills
        </p>
        <h2 className="py-4">My tools</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={C} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CP} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SQL} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={VS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>VS Code</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-black border-opacity-40 rounded-xl ease-in duration-300 dark:border-gray-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
