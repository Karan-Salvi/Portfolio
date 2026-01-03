import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import SectionHeading from "./common/SectionHeading";
import Image from "next/image";
import { BentoGrid } from "./ui/bento-grid";
import { Badge } from "@/ui/badge";
import Calender from "./svgs/Calender";
import ArrowRight from "./svgs/ArrowRight";
import { Button } from "@/ui/button";

type Blog = {
  title?: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
  date: string;
};

async function Blog() {
  const allblogs = await getBlogs();
  return (
    <div className="max-w-3xl mx-auto px-0 pt-24">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <BentoGrid className="w-full mx-auto sm:gap-y-28 mt-4">
        {allblogs?.splice(0, 4)?.map((item, idx) => (
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
      <div className="mt-32 flex justify-center hover:scale-105 duration-300 hover:-translate-y-1.5">
        <Button variant="default" size="lg" asChild>
          <Link href="/blogs">Show all blogs</Link>
        </Button>
      </div>
    </div>
  );
}

export default Blog;
