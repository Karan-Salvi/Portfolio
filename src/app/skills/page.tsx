import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { SiHiveBlockchain, SiWebrtc } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { IconInfinity, IconPlugConnected } from "@tabler/icons-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Skill from "@/components/common/Skill";
import ReactIcon from "@/components/technologies/ReactIcon";
import JavaScript from "@/components/technologies/JavaScript";
import NextJs from "@/components/technologies/NextJs";
import Html from "@/components/technologies/Html";
import CSS from "@/components/technologies/CSS";
import TailwindCss from "@/components/technologies/TailwindCss";
import BootStrap from "@/components/technologies/BootStrap";
import NodeJs from "@/components/technologies/NodeJs";
import ExpressJs from "@/components/technologies/ExpressJs";
import MongoDB from "@/components/technologies/MongoDB";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Docker from "@/components/technologies/Docker";
import Python from "@/components/technologies/Python";
import Github from "@/components/technologies/Github";
import Redis from "@/components/technologies/Redis";
import Redux from "@/components/technologies/Redux";
import Prisma from "@/components/technologies/Prisma";
import AWS from "@/components/technologies/AWS";

// Local sizing guard: several of the shared technology icons ship as bare
// viewBox svgs with no width/height/className, so force their rendered size
// here rather than editing every icon component.
const icon = (node: React.ReactNode) => (
  <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full">
    {node}
  </span>
);

interface SkillItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const groups: { heading: string; items: SkillItem[] }[] = [
  {
    heading: "Frontend",
    items: [
      { name: "React.js", href: "https://react.dev/", icon: icon(<ReactIcon />) },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: icon(<JavaScript />),
      },
      { name: "Next.js", href: "https://nextjs.org/", icon: icon(<NextJs />) },
      {
        name: "HTML5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: icon(<Html />),
      },
      {
        name: "CSS3",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: icon(<CSS />),
      },
      {
        name: "Web Design",
        href: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
        icon: icon(<MdOutlineWeb className="h-full w-full" />),
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: icon(<TailwindCss className="h-full w-full" />),
      },
      {
        name: "Bootstrap",
        href: "https://getbootstrap.com/",
        icon: icon(<BootStrap />),
      },
      {
        name: "Redux",
        href: "https://redux.js.org/",
        icon: icon(<Redux className="h-full w-full" />),
      },
    ],
  },
  {
    heading: "Backend",
    items: [
      { name: "Node.js", href: "https://nodejs.org/", icon: icon(<NodeJs />) },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: icon(<ExpressJs />),
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/docs/",
        icon: icon(<MongoDB />),
      },
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: icon(<PostgreSQL />),
      },
      {
        name: "Prisma",
        href: "https://www.prisma.io/",
        icon: icon(<Prisma />),
      },
    ],
  },
  {
    heading: "Tools & Platforms",
    items: [
      {
        name: "C++",
        href: "https://en.cppreference.com/",
        icon: icon(<CgCPlusPlus className="h-full w-full" />),
      },
      {
        name: "Blockchain",
        href: "https://ethereum.org/en/developers/docs/",
        icon: icon(<SiHiveBlockchain className="h-full w-full" />),
      },
      {
        name: "Docker",
        href: "https://www.docker.com/",
        icon: icon(<Docker className="h-full w-full" />),
      },
      {
        name: "Python",
        href: "https://www.python.org/",
        icon: icon(<Python className="h-full w-full" />),
      },
      {
        name: "GitHub",
        href: "https://github.com/",
        icon: icon(<Github className="h-full w-full" />),
      },
      {
        name: "Redis",
        href: "https://redis.io/",
        icon: icon(<Redis className="h-full w-full" />),
      },
      {
        name: "CI/CD",
        href: "https://docs.github.com/en/actions",
        icon: icon(<IconInfinity className="h-full w-full" stroke={1.5} />),
      },
      {
        name: "WebSockets",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        icon: icon(
          <IconPlugConnected className="h-full w-full" stroke={1.5} />
        ),
      },
      {
        name: "WebRTC",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
        icon: icon(<SiWebrtc className="h-full w-full" />),
      },
      {
        name: "AWS Lightsail",
        href: "https://aws.amazon.com/lightsail/",
        icon: icon(<AWS />),
      },
    ],
  },
];

const page = () => {
  return (
    <Container className="mt-18 md:mt-24 px-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Skills
      </h1>
      <p
        className="text-zinc-400 text-base mt-4 max-w-[60ch]"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400 }}
      >
        Technologies I reach for most, grouped by where they sit in the
        stack.
      </p>

      <div className="mt-14 flex flex-col gap-14">
        {groups.map((group) => (
          <section key={group.heading}>
            <SectionHeading heading={group.heading} />
            <div className="flex flex-wrap gap-2.5 mt-5">
              {group.items.map((item) => (
                <Skill key={item.name} name={item.name} href={item.href}>
                  {item.icon}
                </Skill>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default page;
