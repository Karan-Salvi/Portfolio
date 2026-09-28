"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/ui/button";
import {
  IconClipboardCopy,
  IconCode,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import Projects from "./ProjectPage/Projects";
import SectionHeading from "./common/SectionHeading";

const items: {
  title: string;
  description: string;
  header: string;
  video?: string;
  icon: React.ReactNode;
  live?: string;
  github: string;
  tech: string[];
}[] = [
  {
    title: "CodeTrace",
    description:
      "AI-powered code intelligence platform for codebase understanding & automated PR review.",
    header: "/images/codetrace.png",
    video:
      "https://res.cloudinary.com/iczw3wg2/video/upload/v1790572010/codetrace_demo.mp4",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    live: "https://codetrace.formvista.in/",
    github: "https://github.com/Karan-Salvi/CodeTrace",
    tech: [
      "Python",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "pgvector",
      "Prisma",
      "Tree-sitter",
      "Docker",
      "AWS Lightsail",
    ],
  },
  {
    title: "CartLoop",
    description: "Multi-vendor e-commerce platform with advanced features.",
    header: "/images/cartloop.png",
    video:
      "https://res.cloudinary.com/iczw3wg2/video/upload/v1790571993/cartloop_demo.mp4",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    live: "https://cartloop.vercel.app",
    github: "https://github.com/Karan-Salvi/Eccomerce-Web-Application",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "Stripe",
      "Redis",
      "RTK Query",
    ],
  },

  {
    title: "UpNetic",
    description:
      "Build your professional network with live chat, dynamic feeds, seamless connections.",
    header: "/images/upnetic.png",
    video:
      "https://res.cloudinary.com/iczw3wg2/video/upload/v1790571985/upnetic_demo.mp4",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    live: "https://upnetic.vercel.app",
    github: "https://github.com/Karan-Salvi/UpNetic",
    tech: [
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
    title: "SkillCrest",
    description: "Comprehensive course management system for educators.",
    header: "/images/skillcrest.png",
    video:
      "https://res.cloudinary.com/iczw3wg2/video/upload/v1790571992/skillcrest_demo.mp4",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    live: "https://skillcrest.vercel.app",
    github: "https://github.com/Karan-Salvi/CourseCraft",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
  },

  // {
  //   title: "WorkWave",
  //   description: "Platform for freshers to connect and apply for companies.",
  //   header: "/images/workwave.png",
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  //   live: "https://workwave-ten.vercel.app/",
  //   github: "https://github.com/Karan-Salvi/WorkWave",
  //   tech: [
  //     "React.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Express",
  //     "RTK Query",
  //     "Redux",
  //     "RazorPay",
  //   ],
  // },

  // {
  //   title: "MentorFlux",
  //   description: "A platform connecting students with mentors for guidance.",
  //   header: "/images/mentorflux.png",
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  //   github: "https://github.com/Karan-Salvi/MentorFlux",
  //   tech: [
  //     "WebRTC",
  //     "Web Sockets",
  //     "React.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Express",
  //     "Redux",
  //   ],
  // },
];

const ProjectSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 text-start relative">
      <SectionHeading subHeading="Featured" heading="Projects" />
      <div className="h-4"></div>
      <Projects items={items} />
      <div className="flex justify-center items-center gap-1 hover:scale-105 duration-300 hover:-translate-y-1.5 mt-8 sm:mt-24">
        <Button variant="default" size="lg">
          <Link href="/projects">See More Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectSection;
