import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


function Projects({items }:{
  items: {
    title: string;
    description: string;
    header: string;
    icon: React.ReactNode;
    live?: string;
    github?: string;
  }[];
}) {
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

export default Projects;
