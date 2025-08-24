import AboutHistory from "@/components/AboutHistory";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-18 md:mt-24 p-2 relative">
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

      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Experience</h1>
        <div className="flex justify-between items-start mt-10 w-full">
          <div className="flex flex-col gap-1">
            <h3 className="text-base text-zinc-300 font-bold">
              TastEzy MarketPlace LLP
            </h3>
            <p className="text-zinc-400 text-sm">Full Stack Developer</p>
          </div>

          <p className="text-zinc-500 text-sm">Jan 2025 - March 2025</p>
        </div>

        <ul className="list-disc pl-6 text-zinc-300 text-sm mt-2 flex flex-col gap-2">
          <li>
            Implemented a responsive and user-friendly web application
            leveraging React.js and Tailwind CSS, resulting in a 20% increase in
            user engagement.
          </li>
          <li>
            Collaborated with a dynamic team of 10 to design and implement a
            robust RESTful API using Node.js and Express, ensuring seamless data
            flow and backend efficiency.
          </li>
          <li>
            Integrated JWT-based authentication to enhance security and
            streamline user session management across the platform.
          </li>
          <li>
            Actively participated in code reviews, driving improvements in code
            quality, maintainability, and development efficiency.
          </li>
          <li>
            Built a scalable full-stack application using Next.js, meeting
            complex requirements with optimized performance.
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mt-16">
        <h1 className="text-3xl font-bold">Education</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start mt-6 w-full">
            <h3 className="text-base text-zinc-300 font-bold">
              Modern Education Society&apos;s Wadia College of Engineering, Pune
            </h3>

            <p className="text-zinc-500 text-sm">2022 - 2026</p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-zinc-400 text-[12.5px] font-medium ">
              Bachelor of Engineering (B.E) in Computer Engineering (currently
              in Final Year)
            </p>
            <p className="text-zinc-300 text-sm font-semibold">CGPA: 8.64/10</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start mt-6 w-full">
            <h3 className="text-base text-zinc-300 font-bold">
              Shri Dev Gopal Krishna Junior College, Guhagar
            </h3>

            <p className="text-zinc-500 text-sm">2022 - 2026</p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-zinc-400 text-[12.5px] font-medium ">
              HSC in Science (Maharashtra State Board of Secondary and Higher
              Secondary Education)
            </p>
            <p className="text-zinc-300 text-sm font-semibold">
              Percentage: 79.83%
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start mt-6 w-full">
            <h3 className="text-base text-zinc-300 font-bold">
              Madhymik Vidyalaya, Adur
            </h3>

            <p className="text-zinc-500 text-sm">2022 - 2026</p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-zinc-400 text-[12.5px] font-medium ">
              SSC (Maharashtra State Board of Secondary and Higher Secondary
              Education)
            </p>
            <p className="text-zinc-300 text-sm font-semibold">
              Percentage: 92.00%
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
