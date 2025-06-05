import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

function AboutHistory() {
  const items = [
    {
      title: "Communication With all",
      image: "/images/avatar.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Another Hackthon",
      image: "/images/hackthon2.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "React & Redux Certification",
      image: "/images/reactCertificate.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "JavaScript Certification",
      image: "/images/javascriptCertificate.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Traveling with friends",
      image: "/images/travel.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "First Hackthon",
      image: "/images/hackathon1.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className=" mt-24 relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Success is Journey just enjoy it.
      </p>
      {items.map((item, idx) => (
        <DraggableCardBody className={item.className} key={idx}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

export default AboutHistory;
