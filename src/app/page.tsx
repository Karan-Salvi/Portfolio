import Hero from "@/components/Hero";
import NavbarMain from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-2">
        <NavbarMain />
        <Hero />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
