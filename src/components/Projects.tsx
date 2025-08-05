"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const projects = [
  {
    title: "CartLoop",
    description:
      "A multi-vendor e-commerce platform that allows users to create their own online stores and sell products.",
    link: "https://cartloop.vercel.app",
    image: "/images/cartloop.png",
    skills: [
      "Frontend",
      "Analysis",
      "Backend",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "SkillCrest",
    description:
      "An online learning platform that allows users to create and sell their own courses.",
    link: "https://skillcrest.vercel.app",
    image: "/images/coursecraft.png",
    skills: [
      "Frontend",
      "Backend",
      "React.js",
      "Stripe",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  {
    title: "UpNetic",
    description:
      "Build your professional network with live chat, dynamic feeds, and seamless connections.",
    link: "https://upnetic.vercel.app",
    image: "/images/upnetic.png",
    skills: [
      "Websockets",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "RTK Query",
    ],
  },
  {
    title: "SerenoSphere",
    description:
      "Discover, create, and manage yoga, meditation, and mindfulness sessions all in one seamless platform.",
    link: "https://serenosphere.vercel.app",
    image: "/images/serenosphere.png",
    skills: [
      "Frontend",
      "Backend",
      "Redux Toolkit",
      "RTK Query",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 text-center">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Projects</h1>
      <HoverEffect items={projects} />
      <div className="flex justify-center items-center gap-1 hover:scale-105 duration-300 hover:-translate-y-1.5">
        <Link href={"/projects"} className="text-base font-bold  ">
          See More
        </Link>
        <IoArrowForwardCircleOutline className="text-2xl font-bold" />
      </div>
    </div>
  );
};

export default Projects;
