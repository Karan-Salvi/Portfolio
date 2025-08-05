"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

interface BentoGridItemType {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string | React.ReactNode;
  icon?: React.ReactNode;
  live?: string;
  github?: string;
  tech: string[];
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-14 md:auto-rows-[18rem] sm:grid-cols-2 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  live,
  github,
  tech,
}: BentoGridItemType) => {
  return (
    <div
      className={cn(
        "group/bento h-auto min-h-[20rem] shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none cursor-pointer ",
        className
      )}
      // onClick={() => {
      //   if (live) {
      //     router.push(live);
      //   } else if (github) {
      //     router.push(github);
      //   }
      // }}
    >
      <div className="flex flex-1 w-full h-full min-h-[8rem] max-h-8 rounded-xl bg-gradient-to-br from-pink-500  to-purple-700 overflow-hidden px-4 ">
        <Image
          src={header as string}
          width={128}
          height={128}
          className="object-cover w-full h-full transition duration-200 group-hover/bento:scale-105 rounded-t-sm mt-3"
          alt={"Project Image"}
        />
      </div>
      {/* {header} */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex items-center justify-between">
          {icon}
          <div className="flex items-center space-x-2">
            {live && (
              <Link href={live}>
                <VscPreview />
              </Link>
            )}

            {github && (
              <Link href={github}>
                <FaGithub />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
          {tech.map((a, idx) => (
            <p
              key={idx}
              className="text-[9px] font-bold text-neutral-600 dark:text-neutral-400 border-[1px] px-2  rounded-2xl"
            >
              {a}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
