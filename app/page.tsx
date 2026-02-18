import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/3d/Scene";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
