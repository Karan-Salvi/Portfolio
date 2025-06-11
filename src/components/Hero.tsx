"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

import { env } from "process";
import { useRouter } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Designer",
    "Blockchain Developer",
  ];

  return (
    <BackgroundLines className="max-w-screen min-h-screen flex items-center justify-center w-full flex-col px-4 gap-10 max-h-screen">
      <Image
        width={128}
        height={128}
        src="/images/avatar.jpg"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto z-20"
        alt=""
      />

      <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I am a
        <FlipWords words={words} /> <br />
      </div>

      {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sanjana Airlines, <br /> Sajana Textiles.
      </h2> */}
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I am a Software Engineer with passion in building scalable web
        applications and exploring new technologies.I can build web apps that
        are fast, secure, and attractive. I love to create intuitive user
        experiences and write clean, maintainable code.
      </p>
    </BackgroundLines>
  );
};

// const Detail = [
//   {
//     icon: <CiMail className="text-white text-2xl font-bold" />,
//     title: "Email",
//     info: "karansalviwork@gmail.com",
//   },
//   {
//     icon: <CiPhone className="text-white text-2xl font-bold" />,
//     title: "Phone",
//     info: "+91 7798989083",
//   },
//   {
//     icon: <CiLocationOn className="text-white text-2xl font-bold" />,
//     title: "Location",
//     info: "Pune, India",
//   },
//   {
//     icon: <FaLinkedinIn className="text-white text-2xl font-bold" />,
//     title: "LinkedIn",
//     info: "linkedin.com/in/karan-salvi-142813267",
//   },
//   {
//     icon: <IoLogoGithub className="text-white text-2xl font-bold" />,
//     title: "GitHub",
//     info: "https://github.com/Karan-Salvi",
//   },
// ];

export default Hero;
