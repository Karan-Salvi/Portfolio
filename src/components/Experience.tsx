import { type Experience, experiences } from "@/config/Experience";

import React from "react";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";
import { ExperienceCard } from "./experience/ExperienceCard";
import { Button } from "@/ui/button";
import Link from "next/link";

export default function Experience() {
  return (
    <Container className="mt-20 mb-10">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 3).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-8 flex justify-center hover:scale-105 duration-300 hover:-translate-y-1.5">
        <Button variant="default" size="lg" asChild>
          <Link href="/about">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
