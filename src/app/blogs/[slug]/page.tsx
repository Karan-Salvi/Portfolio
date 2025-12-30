// import { Metadata } from "next";
// import React from "react";
// import { getSingleBlog } from "@/utils/mdx";
// import { redirect } from "next/navigation";
// import Image from "next/image";
// import { stringToDate } from "@/utils/date";
// import { FaArrowLeft } from "react-icons/fa6";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Karan Salvi",
//   description:
//     "Karan Salvi's portfolio website showcasing projects and skills.",
// };

// export default async function SingleBlogPage(params: {
//   params: { slug: string };
// }) {
//   const { slug } = params.params;
//   const blog = await getSingleBlog(slug);

//   if (!blog) {
//     redirect("/blogs");
//   }

//   const { content, frontmatter } = blog;

//   console.log("SingleBlogPage Formatter : ", frontmatter);

//   return (
//     <div className="mt-24 bg-zinc-900 py-10 rounded-md">
//       <div className="pros dark:prose-invert prose max-w-3xl mx-auto mt-10">
//         <div className="flex flex-col gap-0">
//           <div className="flex justify-between items-center">
//             <h1 className="text-3xl font-extrabold mb-0">
//               {frontmatter.title}
//             </h1>
//             <Link
//               href={"/blogs"}
//               className="border-2 p-1 rounded-full hover:scale-115 transition-all duration-200"
//             >
//               <FaArrowLeft className="text-xl" />
//             </Link>
//           </div>

//           <div className="flex justify-start items-center gap-2 mb-0">
//             <Image
//               src="/images/avatar.jpg"
//               className="rounded-full"
//               alt="logo"
//               width={30}
//               height={30}
//             />
//             <p>
//               {frontmatter.author} / {stringToDate(frontmatter.date)}
//             </p>
//           </div>

//           <Image
//             src={frontmatter.image}
//             width={1600}
//             height={800}
//             className="w-full  aspect-video"
//             alt={frontmatter.title}
//           />
//         </div>
//         {content}
//         {/* <MDXRemote source={SingleBlog} /> */}
//       </div>
//     </div>
//   );
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { stringToDate } from "@/utils/date";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import FontSizeControls from "@/common/FontSizeControls";
import Container from "@/common/Container";
import { Button } from "@/ui/button";
import ArrowLeft from "@/components/svgs/ArrowLeft";
import { Separator } from "@/ui/separator";
import { BlogContent } from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Karan Salvi - Blog",
  description: "Blog post from Karan Salvi's portfolio",
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    notFound();
  }

  const { content, frontmatter } = blog;

  return (
    <>
      {/* <div className="mt-24 bg-zinc-900 py-10 rounded-md">
        <div className="prose dark:prose-invert max-w-3xl mx-auto mt-10">
          <div className="flex flex-col gap-0">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-extrabold mb-0">
                {frontmatter.title}
              </h1>
              <Link
                href="/blogs"
                className="border-2 p-1 rounded-full hover:scale-110 transition-all duration-200"
              >
                <FaArrowLeft className="text-xl" />
              </Link>
            </div>

            <div className="flex justify-start items-center gap-2 mb-0">
              <Image
                src="/images/avatar.jpg"
                className="rounded-full"
                alt="Author avatar"
                width={30}
                height={30}
              />
              <p>
                {frontmatter?.author} / {stringToDate(frontmatter?.date)}
              </p>
            </div>

            <Image
              src={frontmatter?.image}
              width={1600}
              height={800}
              className="w-full aspect-video"
              alt={frontmatter.title}
              priority
            />
          </div>
          {content}
        </div>
      </div> */}
      <Container className="py-16 ">
        <div className="space-y-12">
          {/* Back Button */}
          <div>
            <Button variant="ghost" asChild className="group">
              <Link href="/blogs" className="flex items-center space-x-2">
                <ArrowLeft className="size-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>

          {/* Blog Content */}
          <BlogContent frontmatter={frontmatter} content={content} />

          {/* Related Posts */}
          {/* {relatedPosts.length > 0 && (
            <div className="space-y-6">
              <Separator />
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Related Posts</h2>
                <BlogList posts={relatedPosts} />
              </div>
            </div>
          )} */}

          {/* Back to Blog CTA */}
          <div className="text-center">
            <Separator className="mb-8" />
            <Button asChild size="lg">
              <Link href="/blogs">View All Blogs</Link>
            </Button>
          </div>
        </div>
      </Container>
      <FontSizeControls />
    </>
  );
}
