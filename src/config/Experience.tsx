import Angular from "@/components/technologies/Angular";
import AWS from "@/components/technologies/AWS";
import CSS from "@/components/technologies/CSS";
import Docker from "@/components/technologies/Docker";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import Motion from "@/components/technologies/Motion";
import Mysql from "@/components/technologies/Mysql";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import Ollama from "@/components/technologies/Ollama";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Postman from "@/components/technologies/Postman";
import Prisma from "@/components/technologies/Prisma";
import Python from "@/components/technologies/Python";
import ReactIcon from "@/components/technologies/ReactIcon";
import Redis from "@/components/technologies/Redis";
import Redux from "@/components/technologies/Redux";
import SocketIo from "@/components/technologies/SocketIo";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import Zod from "@/components/technologies/Zod";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: "Boostmychild Pvt. Ltd.",
    position: "Junior Software Developer Intern",
    location: "Pune, India (On-site)",
    image: "/images/boostmychild.webp",
    description: [
      "Worked as a Full-Time Software Developer Intern contributing to web application development and maintenance.",
      "Developed and maintained frontend components using React and Angular following established coding standards.",
      "Assisted in backend development using Node.js, focusing on API integration and data handling.",
      "Worked with MySQL databases and utilized Redis for caching and performance optimization use cases.",
      "Supported application deployment workflows across development and staging environments.",
      "Collaborated with cross-functional teams, participated in debugging, testing, and documentation while adhering to NDA guidelines.",
    ],
    startDate: "December 2025",
    endDate: "June 2026",
    technologies: [
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "Angular",
        href: "https://angular.io/",
        icon: <Angular size="18" />,
      },
      {
        name: "Node.js",
        href: "https://nodejs.org/",
        icon: <NodeJs />,
      },
      {
        name: "Prisma",
        href: "https://www.prisma.io/",
        icon: <Prisma />,
      },
      {
        name: "MySQL",
        href: "https://www.mysql.com/",
        icon: <Mysql size="18" />,
      },
      {
        name: "Redis",
        href: "https://redis.com/",
        icon: <Redis />,
      },
      // {
      //   name: "Deployments",
      //   href: "#",
      //   icon: <Cloud />,
      // },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "Html",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: <Html />,
      },
      {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: <CSS />,
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "Zod",
        href: "https://zod.dev/",
        icon: <Zod />,
      },
      {
        name: "Redis",
        href: "https://redis.com/",
        icon: <Redis />,
      },
      {
        name: "Docker",
        href: "https://www.docker.com/",
        icon: <Docker />,
      },
    ],
    website: "https://www.boostmychild.com",
    github: "#",
    x: "#",
    linkedin: "https://www.linkedin.com/company/boostmychild/",
  },
  {
    isCurrent: false,
    isBlur: true,
    company: "Confidential Tech Startup",
    position: "Founding Full Stack Developer",
    location: "India (on-site)",
    image: "/company/promote.png",
    description: [
      "SaaS platform that automates client onboarding, lead routing, and recurring tasks from a unified dashboard.",
      "Designed the feature architecture and MVP roadmap, enabling small businesses to adopt workflow automation without multiple tools.",
      "Led integrations with WhatsApp Business API, Gmail API, and invoice-automation workflows without payment gateway dependency.",
      "Defined the AI assistant experience with auto-draft replies, follow-up suggestions, and workflow automation powered by LLM models.",
    ],
    startDate: "November 2025",
    endDate: "Present",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "Html",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: <Html />,
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/docs/",
        icon: <MongoDB />,
      },
      {
        name: "Ollama",
        href: "https://ollama.com/",
        icon: <Ollama />,
      },
      {
        name: "Python",
        href: "https://www.python.org/",
        icon: <Python />,
      },
      {
        name: "AWS",
        href: "https://aws.amazon.com/",
        icon: <AWS />,
      },
      {
        name: "Socket.IO",
        href: "https://socket.io/",
        icon: <SocketIo />,
      },
      {
        name: "Node.js",
        href: "https://nodejs.org/",
        icon: <NodeJs />,
      },
      {
        name: "Framer Motion",
        href: "https://www.framer.com/motion/",
        icon: <Motion />,
      },
      {
        name: "Redux",
        href: "https://redux.js.org/",
        icon: <Redux />,
      },
      {
        name: "Zod",
        href: "https://zod.dev/",
        icon: <Zod />,
      },
      {
        name: "Redis",
        href: "https://redis.com/",
        icon: <Redis />,
      },
      {
        name: "Docker",
        href: "https://www.docker.com/",
        icon: <Docker />,
      },
    ],
    website: "#",
    github: "#",
    x: "#",
  },
  {
    isCurrent: false,
    company: "Tastezy Marketplace",
    position: "Full Stack Developer Intern",
    location: "Hyderabad, India (Remote)",
    image: "/company/tastezy.jpg",
    description: [
      "Worked as a Full Stack Developer Intern at Tastezy Marketplace, contributing to the development and optimization of core platform features.",
      "Built and maintained scalable REST APIs using Node.js, Express, and Prisma ORM with PostgreSQL, ensuring reliability and consistent data flow.",
      "Integrated Next.js frontend with backend services using Redux Toolkit Query, improving API communication and user experience.",
      "Enhanced database schemas, optimized queries, and improved backend architecture for better performance and maintainability.",
      "Collaborated with the engineering team to design new modules, fix UI/UX issues, and streamline development processes through clean and modular code practices.",
    ],
    startDate: "June 2025",
    endDate: "July 2025",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Html",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: <Html />,
      },
      {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: <CSS />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/docs/",
        icon: <MongoDB />,
      },
      {
        name: "Figma",
        href: "https://figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
      {
        name: "Zod",
        href: "https://zod.dev/",
        icon: <Zod />,
      },
      {
        name: "Redux",
        href: "https://redux.js.org/",
        icon: <Redux />,
      },
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: <PostgreSQL />,
      },
      {
        name: "Prisma",
        href: "https://www.prisma.io/",
        icon: <Prisma />,
      },
    ],
    website: "https://www.neuxaglobal.com",
    github: "https://www.neuxaglobal.com",
    x: "https://www.neuxaglobal.com",
    linkedin: "https://www.linkedin.com/company/neuxa-global/about/",
  },
];
