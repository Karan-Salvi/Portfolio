"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function Skills() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image:"",
    title: "React.js",
  },
  {
    
    title: "Hamlet",
  },
  {
    
    title: "A Dream Within a Dream",
  },
  {
    
    title: "Pride and Prejudice",
  },
  {
    
    title: "Moby-Dick",
  },
];

export default Skills;
