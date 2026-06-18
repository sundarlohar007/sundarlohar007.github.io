import { Navbar } from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Stats from "@/components/sections/stats";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Titles from "@/components/sections/titles";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Titles />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
