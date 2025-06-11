import { Metadata } from "next";
import React from "react";

import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import Image from "next/image";
import { stringToDate } from "@/utils/date";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karan Salvi",
  description:
    "Karan Salvi's portfolio website showcasing projects and skills.",
};

export default async function SingleBlogPage(params: {
  params: { slug: string };
}) {
  const { slug } = params.params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blogs");
  }

  const { content, frontmatter } = blog;

  console.log("SingleBlogPage Formatter : ", frontmatter);

  return (
    <div className="mt-24 bg-zinc-900 py-10 rounded-md">
      <div className="pros dark:prose-invert prose max-w-3xl mx-auto mt-10">
        <div className="flex flex-col gap-0">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold mb-0">
              {frontmatter.title}
            </h1>
            <Link
              href={"/blogs"}
              className="border-2 p-1 rounded-full hover:scale-115 transition-all duration-200"
            >
              <FaArrowLeft className="text-xl" />
            </Link>
          </div>

          <div className="flex justify-start items-center gap-2 mb-0">
            <Image
              src="/images/avatar.jpg"
              className="rounded-full"
              alt="logo"
              width={30}
              height={30}
            />
            <p>
              {frontmatter.author} / {stringToDate(frontmatter.date)}
            </p>
          </div>

          <Image
            src={frontmatter.image}
            width={1600}
            height={800}
            className="w-full  aspect-video"
            alt={frontmatter.title}
          />
        </div>
        {content}
        {/* <MDXRemote source={SingleBlog} /> */}
      </div>
    </div>
  );
}

export async function getBlogs() {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allblogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");

      const frontmatter = await getFrontMatterBySlug(slug);

      return {
        slug,
        ...frontmatter,
      };
    })
  );

  console.log("I am hear", allblogs);

  return allblogs;
}

const getFrontMatterBySlug = async (slug: string) => {
  const SingleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data/", `${slug}.mdx`),
    "utf-8"
  );

  if (!SingleBlog) {
    return null;
  }

  // const { content, frontmatter } = await compileMDX<{ title: string }>({
  //   source: SingleBlog,
  //   options: { parseFrontmatter: true },
  // });

  const { frontmatter } = await compileMDX<{ title: string }>({
    source: SingleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};
