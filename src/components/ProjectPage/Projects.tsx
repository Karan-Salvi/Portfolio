import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

function Projects({
  items,
}: {
  items: {
    title: string;
    description: string;
    header: string;
    icon: React.ReactNode;
    live?: string;
    github?: string;
    tech: string[];
  }[];
}) {
  return (
    <BentoGrid className="w-full mx-auto sm:gap-y-20 sm:px-4 md:px-0">
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
          tech={item.tech}
        />
      ))}
    </BentoGrid>
  );
}

export default Projects;
