import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <TimelineSection />
      <Contact />
    </>
  );
}
