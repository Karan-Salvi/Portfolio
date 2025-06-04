"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const projects = [
  {
    title: "FoodSwift",
    description:
      "A food delivery app that connects users with local restaurants and allows them to order food online.",
    link: "https://full-stack-task-management-app-liart-ten.vercel.app/",
    image: "/images/foodswift.png",
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
  {
    title: "TrendyCart",
    description:
      "A multi-vendor e-commerce platform that allows users to create their own online stores and sell products.",
    link: "https://trendycart-ten.vercel.app/",
    image: "/images/trendycart.png",
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
    title: "CourseCraft",
    description:
      "An online learning platform that allows users to create and sell their own courses.",
    link: "https://coursecraft-ten.vercel.app/",
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
    title: "WorkWave",
    description:
      "A Job board platform that connects job seekers with employers across various industries.",
    link: "https://github.com/Karan-Salvi/WorkWave",
    image: "/images/workwave.png",
    skills: [
      "Frontend",
      "Backend",
      "React.js",
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
