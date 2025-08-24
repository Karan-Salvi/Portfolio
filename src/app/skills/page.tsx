import React from "react";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

// importing the icons from react icons
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { SiExpress } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { DiRedis } from "react-icons/di";

const page = () => {
  return (
    <div className="w-full mt-24 px-16 sm:px-5 md:px-0 relative">
      <h1 className="text-2xl font-bold text-start">Frontend Skills </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-4 items-center justify-items-center">
        {frontend.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-1/2 p-4 "
          >
            <div className="flex flex-col items-center space-x-2 space-y-2">
              {skill.image}
              <span className="text-sm text-nowrap font-semibold">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-16 text-2xl font-bold text-start">Backend Skills </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-4 items-center justify-items-center">
        {backend.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-1/2 p-4 "
          >
            <div className="flex flex-col items-center space-x-2 space-y-2">
              {skill.image}
              <span className="text-sm text-nowrap font-semibold">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-16 text-2xl font-bold text-start">Other Skills </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-4 items-center justify-items-center">
        {others.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-1/2 p-4 "
          >
            <div className="flex flex-col items-center space-x-2 space-y-2">
              {skill.image}
              <span className="text-sm text-nowrap font-semibold">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const frontend = [
  {
    image: <BiLogoReact className="w-8 h-8" />,
    title: "React.js",
  },
  {
    image: <RiJavascriptFill className="w-7 h-7" />,
    title: "JavaScript",
  },
  {
    image: <TbBrandNextjs className="w-7 h-7" />,
    title: "Next.js",
  },
  {
    image: <FaHtml5 className="w-7 h-7" />,
    title: "HTML5",
  },
  {
    image: <IoLogoCss3 className="w-7 h-7" />,
    title: "CSS3",
  },
  {
    image: <MdOutlineWeb className="w-7 h-7" />,
    title: "Web Design",
  },

  {
    image: <RiTailwindCssFill className="w-7 h-7" />,
    title: "Tailwind CSS",
  },

  {
    image: <FaBootstrap className="w-7 h-7" />,
    title: "Bootstrap",
  },
];

const backend = [
  {
    image: <IoLogoNodejs className="text-4xl" />,
    title: "Node.js",
  },
  {
    image: <SiExpress className="text-4xl" />,
    title: "Express",
  },
  {
    image: <SiMongodb className="text-4xl" />,
    title: "MongoDB",
  },
  {
    image: <BiLogoPostgresql className=" text-4xl" />,
    title: "PostgreSQL",
  },
];

const others = [
  {
    image: <CgCPlusPlus className="w-7 h-7" />,
    title: "C++",
  },
  {
    image: <SiHiveBlockchain className="w-7 h-7" />,
    title: "Blockchain",
  },
  {
    image: <FaDocker className="w-7 h-7" />,
    title: "Docker",
  },
  {
    image: <DiPython className="text-4xl" />,
    title: "Python",
  },

  {
    image: <FaGithub className="text-4xl" />,
    title: "GitHub",
  },
  {
    image: <DiRedis className="text-4xl" />,
    title: "Redis",
  },
];

export default page;
