"use client";
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { BiLoaderAlt } from "react-icons/bi";
import { env } from "process";

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

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Message:", message);

  //   const form: {
  //     name: string;
  //     email: string;
  //     message: string;
  //   } = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   emailjs
  //     .sendForm("service_z28rsn8", "template_7xydsa7", form, {
  //       publicKey: "20rEzkTzn03iD066b",
  //     })
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //       }
  //     );
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Message:", message);

  //   const templateParams = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   emailjs
  //     .send("service_z28rsn8", "template_7xydsa7", templateParams, {
  //       publicKey: "20rEzkTzn03iD066b",
  //     })
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //       }
  //     );
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setLoader(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_z28rsn8", "template_7xydsa7", templateParams, {
        publicKey: "20rEzkTzn03iD066b",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      )
      .finally(() => {
        setLoader(false);
        setMessageSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-3xl rounded-none  px-4 md:rounded-2xl md:pt-8 ">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
        Contact Me
      </h1>

      <div className="w-full flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row sm:justify-between items-start mt-10 ">
        <div className="w-full flex flex-col sm:items-start sm:justify-start gap-5">
          <h2 className="text-lg md:text-xl font-bold text-center">
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
          <h2 className="text-lg sm:text-lg md:text-xl font-bold sm:text-start text-center">
            Send Me a Message
          </h2>
          <form className="mt-4 w-full" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4 mt-5">
              <Label htmlFor="firstname">Full name</Label>
              <Input
                id="firstname"
                placeholder="Karan Salvi"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="karansalvi@gmail.com"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="lastname">Your Message</Label>
              <Input
                id="lastname"
                placeholder="Hi Karan, I want to connect and word with you !"
                type="text"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              {loader ? (
                <p className="flex items-center justify-center space-x-2">
                  <BiLoaderAlt className="text-2xl animate-spin" />
                  <span className="text-sm">Sending Message</span>
                </p>
              ) : messageSuccess ? (
                <p className="text-sm font-bold text-green-500">
                  Message Sent!
                </p>
              ) : (
                <p className="text-sm font-bold">Send Message</p>
              )}
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

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

export default Contact;
