import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <ProjectSection />
      <About />
      <Blog />
      <TimelineSection />
      <Contact />
    </>
  );
}
