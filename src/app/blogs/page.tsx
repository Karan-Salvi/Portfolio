import { Metadata } from "next";
import React from "react";
import { getBlogs } from "@/utils/mdx";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Badge } from "@/ui/badge";

import Link from "next/link";
import Calender from "@/components/svgs/Calender";
import ArrowRight from "@/components/svgs/ArrowRight";

export const metadata: Metadata = {
  title: "Karan Salvi's Blogs",
  description:
    "Karan Salvi's portfolio website showcasing blogs which involves technical insights, project updates, and personal reflections on software development.",
};

const BlogsPage = async () => {
  const allblogs = await getBlogs();

  return (
    <div className="mt-20 px-6  lg:px-0 relative max-w-3xl mx-auto sm:mb-10">
      <h1 className="text-3xl font-bold">All Blogs</h1>
      <p className="text-zinc-400 text-sm mt-6 mb-6">
        I have been Programming since 3-4 years now. Throughout these years. I
        have worked on various technolgies. I am here sharing that knowledge in
        the form of blogs
      </p>

      <BentoGrid className="w-full mx-auto sm:gap-y-28">
        {allblogs.map((item, idx) => (
          <div
            key={idx}
            className={
              "group/bento h-auto min-h-[24rem]  row-span-1 flex flex-col justify-between pb-2 rounded-xl border border-neutral-200   transition duration-200 hover:shadow-xl   dark:shadow-none cursor-pointer overflow-hidden w-full dark:border-gray-800 text-card-foreground shadow-sm dark:bg-neutral-900"
            }
          >
            <div className="relative w-full aspect-video min-h-48  overflow-hidden">
              <Image
                src={item?.image as string}
                alt="Blog Image"
                fill
                className="object-cover transition duration-200 group-hover/bento:scale-105"
              />
            </div>

            {/* {header} */}
            <div className="transition duration-200 group-hover/bento:translate-x-2 px-4 py-1">
              <div className="mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200">
                {item?.title}
              </div>
              <div className="text-xs font-normal text-neutral-800 dark:text-neutral-300 ">
                {item?.description}
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
                {item?.tags?.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className=" h-5 font-medium text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
                {item?.tags?.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{item?.tags?.length - 2} more
                  </Badge>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <time
                  className="text-secondary flex items-center gap-2 text-xs "
                  dateTime={item?.date}
                >
                  <Calender className="size-4" />{" "}
                  {new Date(item?.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blogs/${item?.slug}`}
                  className="text-white/85 text-sm font-semibold flex items-center justify-end gap-2 underline-offset-4"
                >
                  Read More <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </BentoGrid>
    </div>
  );
};

export default BlogsPage;
