// "use client";
// import React, { useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { FiGithub } from "react-icons/fi";
// import { CiGlobe } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Link from "next/link";

// const experiences = [
//   {
//     company: "Upsurge Labs",
//     role: "Backend Developer Intern",
//     period: "June 2025 - July 2025",
//     location: "Bangalore, India (On-Site)",
//     tools: ["Node.js", "MongoDB", "Express", "Docker"],
//     points: [
//       "Worked on backend services and optimized APIs for production usage.",
//       "Implemented database schemas and improved query performance.",
//       "Worked on backend services and optimized APIs for production usage.",
//       "Implemented database schemas and improved query performance.",
//     ],
//     logo: "https://user-images.githubusercontent.com/9349166/233999152-c3e46d16-08c3-4eff-8e47-85bc1623fa9f.png",
//   },
//   {
//     company: "Prepeasy",
//     role: "Founding Engineer",
//     period: "April 2025 - June 2025",
//     location: "Remote (India)",
//     tools: ["Next.js", "Supabase", "TypeScript"],
//     points: [
//       "Built core product features and collaborated on full‑stack development.",
//       "Worked on backend services and optimized APIs for production usage.",
//       "Implemented database schemas and improved query performance.",
//     ],
//     logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
//   },
//   {
//     company: "Expelee",
//     role: "SDE-1 (Full Stack) Intern",
//     period: "Aug 2023 - April 2025",
//     location: "Dubai, UAE (Remote)",
//     tools: ["React", "Node.js", "MySQL", "AWS"],
//     points: [
//       "Developed scalable backend and frontend modules used across the platform",
//       "Implemented database schemas and improved query performance.",
//       "Worked on backend services and optimized APIs for production usage.",
//       "Implemented database schemas and improved query performance.",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Expelee_logo.png/480px-Expelee_logo.png",
//   },
// ];

// const ExperienceCard = ({ experience }: any) => {
//   const { company, role, period, location, logo } = experience;
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between items-start">
//         <div className="flex space-x-4 items-center flex-1">
//           {/* Company Logo */}
//           <img
//             src={logo}
//             alt={`${company} logo`}
//             className="w-12 h-12 rounded-md object-cover bg-zinc-900"
//           />
//           <div>
//             <div className="flex items-center space-x-2 mb-1 font-bold text-white">
//               <span>{company}</span>
//               <Link href="https://karansalvi.vercel.app">
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <CiGlobe className="cursor-pointer text-xl text-gray-500 " />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Website</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </Link>

//               <Link href="https://github.com/Karan-Salvi">
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <FiGithub className="cursor-pointer text-lg text-gray-500" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>GitHub</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </Link>

//               <Link href="https://x.com/KaranSalvi38858">
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <FaXTwitter className="cursor-pointer text-lg text-gray-500" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Twitter</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </Link>

//               <Tooltip>
//                 <TooltipTrigger onClick={() => setIsOpen(!isOpen)}>
//                   <RiArrowDropDownLine className="text-4xl cursor-pointer text-gray-500" />
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Expand Down</p>
//                 </TooltipContent>
//               </Tooltip>
//             </div>
//             <p className="text-gray-400">{role}</p>
//           </div>
//         </div>
//         <div className="text-right text-gray-400 whitespace-nowrap">
//           <p>{period}</p>
//           <p>{location}</p>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="mt-6">
//           <div className="mb-6">
//             <p className="font-semibold mb-2">Technologies & Tools</p>
//             <div className="flex flex-wrap gap-2">
//               {/* Manually customized badges */}
//               <span className="text-xs font-bold bg-gray-900 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 <span className="font-bold">N</span> Next.js
//               </span>
//               <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-cyan-500 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//                   <path stroke="#38bdf8" strokeWidth="2" d="M9 6L15 6" />
//                 </svg>
//                 Tailwind CSS
//               </span>
//               <span className="text-xs font-bold bg-blue-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 TS
//                 <span>TypeScript</span>
//               </span>
//               <span className="text-xs font-bold bg-cyan-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 React
//               </span>
//               <span className="text-xs font-bold bg-pink-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 Figma
//               </span>
//               <span className="text-xs font-bold bg-gray-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 Vercel
//               </span>
//               <span className="text-xs font-bold bg-yellow-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 AWS
//               </span>
//               <span className="text-xs font-bold bg-orange-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 Postman
//               </span>
//               <span className="text-xs font-bold bg-neutral-800 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//                 Bun
//               </span>
//             </div>
//           </div>

//           {/* Description */}
//           <ul className="text-gray-500 list-inside space-y-2 mb-12">
//             <li>
//               Architected and developed the complete frontend infrastructure for
//               the platform, a comprehensive solution for creating and managing
//               promotional campaigns.
//             </li>
//             <li>
//               Led a comprehensive codebase refactoring initiative that improved
//               maintainability, scalability, and development velocity across the
//               entire platform.
//             </li>
//             <li>
//               Integrated and optimized backend API connections, implementing
//               efficient data fetching strategies and error handling mechanisms.
//             </li>
//             <li>
//               Enhanced user experience and interface design through
//               implementation of consistent design systems, accessibility
//               standards, and performance optimizations.
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// const Experience = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(1);

//   return (
//     <div className="p-8 text-white font-sans max-w-4xl mx-auto">
//       <div className="mb-8">
//         <p className="text-sm text-gray-500 font-semibold uppercase">
//           Featured
//         </p>
//         <h2 className="text-3xl font-extrabold mb-6">Experience</h2>

//         {/* Main Featured Job */}
//         <div className="flex justify-between items-start mb-6">
//           <div className="flex space-x-4 items-center flex-1">
//             {/* Company Logo */}
//             <div className="w-12 h-12 rounded-md bg-zinc-900 flex items-center justify-center">
//               <span
//                 role="img"
//                 aria-label="main-company-logo"
//                 className="text-2xl"
//               >
//                 📢
//               </span>
//             </div>
//             <div>
//               <div className="flex items-center space-x-2 mb-1">
//                 <span className="text-lg font-bold blur-[0.5px]">
//                   AutoOperate
//                 </span>

//                 <Link href="https://karansalvi.vercel.app">
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <CiGlobe className="cursor-pointer text-xl text-gray-500 " />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Website</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </Link>

//                 <Link href="https://github.com/Karan-Salvi">
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <FiGithub className="cursor-pointer text-lg text-gray-500" />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>GitHub</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </Link>

//                 <Link href="https://x.com/KaranSalvi38858">
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <FaXTwitter className="cursor-pointer text-lg text-gray-500" />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Twitter</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </Link>

//                 <span className="bg-green-800 text-green-300 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
//                   <span className="w-2 h-2 rounded-full bg-green-300 inline-block"></span>
//                   Working
//                 </span>
//               </div>
//               <p className="text-gray-400">Founding Frontend Engineer</p>
//             </div>
//           </div>
//           <div className="text-right text-gray-400">
//             <p>August 2025 - Present</p>
//             <p>United States (Remote)</p>
//           </div>
//         </div>

//         {/* Technologies & Tools */}
//         <div className="mb-6">
//           <p className="font-semibold mb-2">Technologies & Tools</p>
//           <div className="flex flex-wrap gap-2">
//             {/* Manually customized badges */}
//             <span className="text-xs font-bold bg-gray-900 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               <span className="font-bold">N</span> Next.js
//             </span>
//             <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-cyan-500 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//                 <path stroke="#38bdf8" strokeWidth="2" d="M9 6L15 6" />
//               </svg>
//               Tailwind CSS
//             </span>
//             <span className="text-xs font-bold bg-blue-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               TS
//               <span>TypeScript</span>
//             </span>
//             <span className="text-xs font-bold bg-cyan-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               React
//             </span>
//             <span className="text-xs font-bold bg-pink-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               Figma
//             </span>
//             <span className="text-xs font-bold bg-gray-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               Vercel
//             </span>
//             <span className="text-xs font-bold bg-yellow-700 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               AWS
//             </span>
//             <span className="text-xs font-bold bg-orange-600 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               Postman
//             </span>
//             <span className="text-xs font-bold bg-neutral-800 border border-gray-700 rounded-md px-3 py-1 flex items-center gap-1">
//               Bun
//             </span>
//           </div>
//         </div>

//         {/* Description */}
//         <ul className="text-gray-500 list-inside space-y-2 mb-12">
//           <li>
//             Architected and developed the complete frontend infrastructure for
//             the platform, a comprehensive solution for creating and managing
//             promotional campaigns.
//           </li>
//           <li>
//             Led a comprehensive codebase refactoring initiative that improved
//             maintainability, scalability, and development velocity across the
//             entire platform.
//           </li>
//           <li>
//             Integrated and optimized backend API connections, implementing
//             efficient data fetching strategies and error handling mechanisms.
//           </li>
//           <li>
//             Enhanced user experience and interface design through implementation
//             of consistent design systems, accessibility standards, and
//             performance optimizations.
//           </li>
//         </ul>
//       </div>

//       {/* Other Experiences */}
//       <div className="space-y-8">
//         {experiences.map((exp: any, i: number) => (
//           <ExperienceCard key={i} experience={exp} />
//         ))}
//       </div>

//       {/* Show all button */}
//       {/* <div className="mt-12 flex justify-center">
//         <button className="py-2 px-5 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition">
//           Show all work experiences
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default Experience;

import { type Experience, experiences } from "@/config/Experience";
import Link from "next/link";
import React from "react";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";
import { ExperienceCard } from "./experience/ExperienceCard";
import { Button } from "./ui/button";

export default function Experience() {
  return (
    <Container className="mt-20 mb-10">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      {/* <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div> */}
    </Container>
  );
}
