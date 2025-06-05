import AboutHistory from "@/components/AboutHistory";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-18 md:mt-24 p-2">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-zinc-400 text-sm mt-6 max-w-md">
        Hi, I&apos;m{" "}
        <span className="font-semibold text-zinc-200">Karan Salvi</span>, a
        passionate and dedicated Computer Engineering student in my Final year,
        with a strong foundation in{" "}
        <span className="font-semibold text-zinc-200">
          Frontend Development
        </span>{" "}
        using <span className="font-semibold text-zinc-200">React.js</span> and
        a growing expertise in using{" "}
        <span className="font-semibold text-zinc-200">Backend Development</span>{" "}
        with the <span className="font-semibold text-zinc-200">MERN stack</span>
        . I enjoy turning complex problems into simple, beautiful, and intuitive
        solutions.
        <br />
        <br />
        {/* Over the past year, I’ve worked on several full-stack projects including
        <span className="font-bold">
          e-commerce platforms, job portals, and mentoring systems
        </span>
        . My development approach focuses on clean code, responsive design using
        <span className="font-bold">Tailwind CSS</span>, and performance-driven
        architecture. I’m also exploring advanced areas like
        <span className="font-bold">WebRTC video chat apps</span>,
        <span className="font-bold">Web3 payments</span> , and
        <span className="font-bold">AI-based solutions</span> such as crop
        disease detection and financial fraud analysis.
        <br />
        <br /> */}
        I&apos;m continuously learning new technologies and building real-world
        applications — whether it&apos;s experimenting with{" "}
        <span className="font-semibold text-zinc-200">Next.js</span>,
        fine-tuning{" "}
        <span className="font-semibold text-zinc-200">open-source LLMs</span>.
        Beyond coding, I believe in collaboration, adaptability, and building
        products that create meaningful impact.
        <br />
        <br />
        Let&apos;s build something amazing together !!!!
      </p>

      <AboutHistory />
    </section>
  );
};

export default page;
