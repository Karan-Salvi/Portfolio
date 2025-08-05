import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-full max-w-screen md:max-w-4xl text-gray-500 px-6 py-12 flex flex-col items-center">
      <div className="m-10 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-500" />
      <div className="max-w-4xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-2 grid grid-cols-1">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blogs"}>Blog</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/links"}>Links</Link>
        </div>
        <div className="space-y-2 grid grid-cols-1">
          <Link href="https://github.com/Karan-Salvi">GitHub</Link>
          <Link href="https://www.linkedin.com/in/karan-salvi-142813267/">
            LinkedIn
          </Link>
          <Link href="https://x.com/KaranSalvi38858">Twitter</Link>
          <Link href="https://www.instagram.com/karan_salvi_786/">
            Instagram
          </Link>
          <Link href="/">Freelancing</Link>
        </div>
        <div className="space-y-2">
          <p>Snippets</p>
          <p>Tweets</p>
          <p>Resources</p>
          <p>Live Demos</p>
        </div>
        <div className="space-y-2">
          <p>freeCodeCamp</p>
          <p>Box Shadows</p>
          <p>Design Inspiration</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 text-sm text-gray-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href={"https://x.com/KaranSalvi38858"}
          className="flex items-center gap-2"
        >
          <span>Find me on</span> <FaXTwitter className="text-white" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
