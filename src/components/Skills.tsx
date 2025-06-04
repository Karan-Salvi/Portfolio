"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// importing the icons from react icons
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiExpress } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
function Skills() {
  return (
    <div className="h-[15rem] mt-24 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold py-5">Skills</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: <BiLogoReact className="w-7 h-7" />,
    title: "React.js",
  },
  {
    image: <TbBrandNextjs className="w-7 h-7" />,
    title: "Next.js",
  },
  {
    image: <FaNode className="w-7 h-7" />,
    title: "Node.js",
  },
  {
    image: <MdOutlineWeb className="w-7 h-7" />,
    title: "Web Design",
  },
  {
    image: <SiExpress className="w-7 h-7" />,
    title: "Express",
  },
  {
    image: <AiFillDatabase className="w-7 h-7" />,
    title: "Databases",
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
    image: <RiTailwindCssFill className="w-7 h-7" />,
    title: "Tailwind CSS",
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
    image: <FaGithub className="w-7 h-7" />,
    title: "GitHub",
  },
];

export default Skills;
