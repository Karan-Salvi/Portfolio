import { Metadata } from "next";
import React from "react";
import { getBlogs } from "./[slug]/page";
import Card from "@/components/BlogPage/Card";

export const metadata: Metadata = {
  title: "Karan Salvi's Blogs",
  description:
    "Karan Salvi's portfolio website showcasing blogs which involves technical insights, project updates, and personal reflections on software development.",
};

const BlogsPage = async () => {
  const allblogs: {
    author?: string;
    date?: string;
    description?: string;
    image?: string;
    title?: string;
    slug?: string;
  }[] = await getBlogs();

  console.log(allblogs);
  return (
    <div className="mt-20 px-6 md:px-20 lg:px-0">
      <h1 className="text-3xl font-bold">All Blogs</h1>
      <p className="text-zinc-400 text-sm mt-6 mb-6">
        I have been Programming since 3-4 years now. Throughout these years. I
        have worked on various technolgies. I am here sharing that knowledge in
        the form of blogs
      </p>

      <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {allblogs.map((blog, idx) => (
          <Card
            key={idx}
            author={blog.author ?? ""}
            date={blog.date ?? ""}
            description={blog.description ?? ""}
            image={blog.image ?? ""}
            slug={blog.slug ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
