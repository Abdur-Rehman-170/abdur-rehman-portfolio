import About from "../components/About";
import Contact from "../components/Contact";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import InteractiveBackground from "../components/InteractiveBackground";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080808] text-[#F5F5F5]">
      <InteractiveBackground />
      <CustomCursor />
      <Navigation />

      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}