import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function Projects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={""}
          live={item.live}
          github={item.github}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
  {
    title: "TrendyCart",
    description: "Multi-vendor e-commerce platform with advanced features.",
    header: "/images/trendycartHome.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    live: "https://trendycart-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/Eccomerce-Web-Application",
  },
  {
    title: "CourseCraft",
    description: "Comprehensive course management system for educators.",
    header: "/images/coursecraftHome.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    live: "https://coursecraft-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/CourseCraft",
  },
  {
    title: "WorkWave",
    description: "Platform for freshers to connect and apply for companies.",
    header: "/images/workwaveHome.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    live: "https://workwave-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/WorkWave",
  },
  {
    title: "FoodSwift",
    description: "A food delivery app with a focus on speed and convenience.",
    header: "/images/foodswiftHome.png",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    live: "https://full-stack-task-management-app-liart-ten.vercel.app/",
    github: "https://github.com/Karan-Salvi/FoodSwift",
  },
  {
    title: "Notepal",
    description:
      "A note-taking app with a focus on simplicity and organization.",
    header: "/images/notepalHome.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Notepal-App",
  },
  {
    title: "StudySync",
    description: "Frontend for a collaborative study platform.",
    header: "/images/studysyncHome.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/Web-Study",
  },
  {
    title: "Yatra Cabs",
    description: "Frontend for a cab booking service.",
    header: "/images/yatraHome.png",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    github: "https://github.com/Karan-Salvi/YatraaCabs",
  },
];

export default Projects;
