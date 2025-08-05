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
    <section className="w-full min-h-screen mt-20 px-16 sm:px-5 md:px-0">
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
    title: "SkillCrest",
    description: "Comprehensive course management system for educators.",
    header: "/images/skillcrest.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    live: "https://skillcrest.vercel.app",
    github: "https://github.com/Karan-Salvi/CourseCraft",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
  },
  {
    title: "CartLoop",
    description: "Multi-vendor e-commerce platform with advanced features.",
    header: "/images/cartloopHome.png",
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
      "Build your professional network with live chat, dynamic feeds, and seamless connections.",
    header: "/images/upneticHome.png",
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
    title: "SerenoSphere",
    description:
      "Discover, create, and manage yoga, meditation, and mindfulness sessions all in one seamless platform.",
    header: "/images/serenosphereHome.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    live: "https://serenosphere.vercel.app",
    github: "https://github.com/Karan-Salvi/SerenoSphere",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "RTK Query"],
  },

  {
    title: "FlowLane",
    description:
      "Organize projects effortlessly with a sleek, drag-and-drop Kanban board built for speed and clarity.",
    header: "/images/flowlaneHome.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    live: "https://flowlane.vercel.app",
    github: "https://github.com/Karan-Salvi/FlowLane---Kanban-Dashboard",
    tech: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    title: "FoodSwift",
    description: "A food delivery app with a focus on speed and convenience.",
    header: "/images/fooswiftHome.png",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    live: "https://foodswift-web.vercel.app",
    github: "https://github.com/Karan-Salvi/FoodSwift",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
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
    description: "Frontend for a collaborative study platform for learners.",
    header: "/images/studysyncHome.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Web-Study",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default page;
