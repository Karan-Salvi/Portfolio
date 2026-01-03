import Docker from "@/components/technologies/Docker";
import ExpressJs from "@/components/technologies/ExpressJs";
import Github from "@/components/technologies/Github";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Redis from "@/components/technologies/Redis";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Zod from "@/components/technologies/Zod";

export const mySkills = [
  <ReactIcon key="react" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
  <Zod key="zod" className="h-7 w-7" />,
  <Redis key="redis" className="h-6 w-6" />,
  <Docker key="docker" className="h-6 w-6" />,
  <Github key="github" className="h-6 w-6" />,
  <TailwindCss key="tailwindcss" />,
  <ExpressJs key="expressjs" />,
];

export const about = {
  name: "Karan Salvi",
  description: `I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.`,
};
