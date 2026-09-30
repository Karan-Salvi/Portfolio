import Image from "next/image";
import Link from "next/link";

import AboutHistory from "@/components/AboutHistory";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { experiences } from "@/config/Experience";
import { Button } from "@/ui/button";

const page = () => {
  return (
    <section className="w-full min-h-screen mt-18 md:mt-24 p-2 relative">
      <Container className="px-2 sm:px-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>
            <p
              className="text-zinc-400 text-base mt-6 leading-[1.7] max-w-[62ch]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400 }}
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-zinc-200">Karan Salvi</span>,
              a passionate and dedicated Computer Engineering student in my
              final year, with a strong foundation in{" "}
              <span className="font-semibold text-zinc-200">
                Frontend Development
              </span>{" "}
              using{" "}
              <span className="font-semibold text-zinc-200">React.js</span>{" "}
              and a growing expertise in{" "}
              <span className="font-semibold text-zinc-200">
                Backend Development
              </span>{" "}
              with the{" "}
              <span className="font-semibold text-zinc-200">MERN stack</span>.
              I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions.
              <br />
              <br />
              I&apos;m continuously learning new technologies and building
              real-world applications, whether it&apos;s experimenting with{" "}
              <span className="font-semibold text-zinc-200">Next.js</span> or
              fine-tuning{" "}
              <span className="font-semibold text-zinc-200">
                open-source LLMs
              </span>
              . Beyond coding, I believe in collaboration, adaptability, and
              building products that create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_RESUME_URL as string}
                  target="_blank"
                >
                  Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-input -rotate-2">
              <Image
                src="/images/avatar.jpg"
                alt="Karan Salvi"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      <AboutHistory />

      <Container className="px-2 sm:px-4 mt-16 mb-16">
        <SectionHeading subHeading="Featured" heading="Experience" />
        <div className="mt-6">
          <ExperienceList experiences={experiences} />
        </div>
      </Container>
    </section>
  );
};

export default page;
