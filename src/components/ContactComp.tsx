"use client";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const ContactComp = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <button className="flex space-x-2 justify-center items-center border-2 px-3 py-2 rounded-4xl hover:scale-110 cursor-pointer">
        <IoNewspaperOutline />
        <span className="text-sm font-semibold">Resume</span>
      </button>

      <div className="rounded-full bg-zinc-700 p-2 cursor-pointer">
        <FaLinkedinIn className="text-white text-2xl font-bold" />
      </div>

      <div className="rounded-full bg-zinc-700 p-2 cursor-pointer">
        <IoLogoGithub className="text-white text-2xl font-bold" />
      </div>

      <div className="rounded-full bg-zinc-800 p-2 cursor-pointer">
        <FaXTwitter className="text-white text-2xl font-bold" />
      </div>
    </div>
  );
};

export default ContactComp;
