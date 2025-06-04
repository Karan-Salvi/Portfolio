import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarMain from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-2">
        <NavbarMain />
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <TimelineSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
