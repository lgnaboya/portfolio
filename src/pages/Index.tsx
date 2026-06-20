import { useState } from "react";

import { CodeBackground } from "@/components/portfolio/CodeBackground";
import { RadialMenu } from "@/components/portfolio/RadialMenu";
import { SidePager } from "@/components/portfolio/SidePager";

import { type SectionId } from "@/components/portfolio/data";

import { Contact } from "@/components/portfolio/sections/Contact";
import { Hero } from "@/components/portfolio/sections/Hero";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Skills } from "@/components/portfolio/sections/Skills";

const Index = () => {
  const [active, setActive] = useState<SectionId>("home");

  const renderSection = () => {
    switch (active) {
      case "home":
        return <Hero onCTA={() => setActive("projects")} />;

      case "skills":
        return <Skills />;

      case "projects":
        return <Projects />;

      case "contact":
        return <Contact />;

      default:
        return <Hero onCTA={() => setActive("projects")} />;
    }
  };

  return (
    <main className="relative w-screen min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-background text-foreground grid-bg">
      <CodeBackground />

      {/* Background glow */}
      <div className="absolute inset-0 bg-hero opacity-50" />

      {/* Left Side Navigation */}
      <SidePager active={active} onSelect={setActive} />

      {/* Main Content */}
      <section className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-20">
        {renderSection()}
      </section>

      {/* Bottom Right Floating Menu */}
      <RadialMenu active={active} onSelect={setActive} />
    </main>
  );
};

export default Index;
