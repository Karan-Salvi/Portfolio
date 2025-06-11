"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import Contact from "@/components/Contact";

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
const page = () => {
 
  return (
    <div className="mt-16 shadow-input mx-auto w-full max-w-3xl rounded-none  px-4 md:rounded-2xl md:pt-8 ">
      <Contact />
    </div>
  );
};

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
//       <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex w-full flex-col space-y-2", className)}>
//       {children}
//     </div>
//   );
// };

export default page;
