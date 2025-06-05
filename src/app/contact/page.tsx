"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Detail = [
  {
    icon: <CiMail className="text-white text-2xl font-bold" />,
    title: "Email",
    info: "karansalviwork@gmail.com",
  },
  {
    icon: <CiPhone className="text-white text-2xl font-bold" />,
    title: "Phone",
    info: "+91 7798989083",
  },
  {
    icon: <CiLocationOn className="text-white text-2xl font-bold" />,
    title: "Location",
    info: "Pune, India",
  },
  {
    icon: <FaLinkedinIn className="text-white text-2xl font-bold" />,
    title: "LinkedIn",
    info: "linkedin.com/in/karan-salvi-142813267",
  },
  {
    icon: <IoLogoGithub className="text-white text-2xl font-bold" />,
    title: "GitHub",
    info: "https://github.com/Karan-Salvi",
  },
];
const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="mt-20 shadow-input mx-auto w-full max-w-3xl rounded-none  px-4 md:rounded-2xl md:pt-8 ">
      <h1 className="text-xl mx-auto sm:text-2xl md:text-4xl font-bold text-center">
        Contact Me
      </h1>

      <div className="w-full flex justify-between items-start mt-14">
        <div className="w-full flex flex-col items-start justify-start gap-5">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-center">
            Get In Touch
          </h2>
          {Detail.map((item, idx) => (
            <div
              className="w-full flex justify-start items-center space-x-3"
              key={idx}
            >
              <div className="rounded-full bg-zinc-800 p-2">{item.icon}</div>
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-sm font-bold text-zinc-700">
                  {item.title}
                </h2>
                <p className=" text-sm font-light text-zinc-300">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-start">
            Send Me a Message
          </h2>
          <form className="mt-4 w-full" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4 mt-5">
              <Label htmlFor="firstname">Full name</Label>
              <Input id="firstname" placeholder="Karan Salvi" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="karansalvi@gmail.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="lastname">Your Message</Label>
              <Input
                id="lastname"
                placeholder="Hi Karan, I want to connect and word with you !"
                type="text"
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Connect With Me &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default page;
