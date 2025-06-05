import Projects from "@/components/ProjectPage/Projects";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-20 ">
      <h1 className="text-4xl font-bold mb-8 p-2">Projects</h1>
      <Projects />
    </section>
  );
};

export default page;
