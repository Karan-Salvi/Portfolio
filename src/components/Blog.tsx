import { HoverEffect } from "@/components/ui/card-hover-effect2";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-24">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
        Recent Blogs
      </h1>
      <HoverEffect items={blogs} />
      <div className="flex justify-center items-center gap-1 hover:scale-105 duration-300 hover:-translate-y-1.5">
        <Link href={"/projects"} className="text-base font-bold  ">
          See More
        </Link>
        <IoArrowForwardCircleOutline className="text-2xl font-bold" />
      </div>
    </div>
  );
}
export const blogs = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/blogs",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/blogs",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/blogs",
  },
];

export default Blog;
