import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Presentation = () => {
  return (
    <div className="w-full h-screen text-center mt-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-10">
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600"> 
              David
            </span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">
            This is my portfolio
          </h1>
          <p className="py-4 text-gray-600 dark:text-white sm:max-w-[70%] m-auto">
            I'm an engineering student who like to code and learn new stuff.
          </p>
          <div className="mt-4 text-gray-600 dark:text-white flex items-center justify-around sm:w-full">
           <a className="w-96 rounded-xl border p-6 text-left border-black dark:border-gray-300">
             <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">Informations :</h3>
             <ul className="mt-4 list-disc ml-5">
              <li> Age : 21</li>
              <li> Phone number : 07 81 50 04 55</li>
              <li> Location : Around Paris, France</li>
              <li> School : E.C.E Paris </li>
             </ul>
           </a>
          </div>
          <a
            href="#skills"
            className=" mt-8 flex flex-col gap-2 max-w-[300px] m-auto items-center justify-center"
          >
            <span className="animate-waving-arrow text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">
              Discover more !
            </span>
            <AiOutlineArrowDown className="animate-sliding-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
