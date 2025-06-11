import Projects from "@/components/ProjectPage/Projects";
import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-20 ">
      <h1 className="text-4xl font-bold mb-8 p-2">Projects</h1>
      <Projects items={items} />
    </section>
  );
};

const items: {
  title: string;
  description: string;
  header: string;
  icon: React.ReactNode;
  live?: string;
  github: string;
  tech: string[];
}[] = [
  {
    title: "TrendyCart",
    description: "Multi-vendor e-commerce platform with advanced features.",
    header: "/images/trendycartHome.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    live: "https://trendycart-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/Eccomerce-Web-Application",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "RazorPay"],
  },
  {
    title: "CourseCraft",
    description: "Comprehensive course management system for educators.",
    header: "/images/coursecraftHome.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    live: "https://coursecraft-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/CourseCraft",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
  },
  {
    title: "WorkWave",
    description: "Platform for freshers to connect and apply for companies.",
    header: "/images/workwaveHome.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    live: "https://workwave-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/WorkWave",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "RTK Query",
      "Redux",
      "RazorPay",
    ],
  },
  {
    title: "FoodSwift",
    description: "A food delivery app with a focus on speed and convenience.",
    header: "/images/foodswiftHome.png",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    live: "https://full-stack-task-management-app-liart-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/FoodSwift",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "MentorFlux",
    description: "A platform connecting students with mentors for guidance.",
    header: "/images/mentorfluxHome.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/MentorFlux",
    tech: [
      "WebRTC",
      "Web Sockets",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
    ],
  },
  {
    title: "FarmCraft",
    description: "Multi agent based farmer assistant for crop management.",
    header: "/images/farmHome.png",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Wadians-FarmCraft",
    tech: ["Fast API", "LangChain", "Python", "AI agent", "Ollama", "React.js"],
  },
  {
    title: "Yatra Cabs",
    description: "Frontend for a cab booking service.",
    header: "/images/yatraHome.png",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/YatraaCabs",
    tech: ["Next.js", "CSS"],
  },
  {
    title: "Notepal",
    description:
      "A note-taking app with a focus on simplicity and organization.",
    header: "/images/notepalHome.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Notepal-App",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "StudySync",
    description: "Frontend for a collaborative study platform.",
    header: "/images/studysyncHome.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Web-Study",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default page;
