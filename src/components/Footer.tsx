import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-500 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-2">
          <p>Home</p>
          <p>Blog</p>
          <p>Dashboard</p>
          <p>Projects</p>
          <p>Links</p>
        </div>
        <div className="space-y-2">
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Freelancing</p>
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
        <div className="flex items-center gap-2">
          <span>Find me on</span>
          <FaXTwitter className="text-white" />
          <span>and</span>
          <SiProducthunt className="text-green-400 bg-white rounded p-0.5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
