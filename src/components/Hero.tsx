import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Designer",
    "Blockchain Developer",
  ];
  return (
    <BackgroundLines className="max-w-screen min-h-screen flex items-center justify-center w-full flex-col px-4 gap-10 max-h-screen">
      <img
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

export default Hero;
