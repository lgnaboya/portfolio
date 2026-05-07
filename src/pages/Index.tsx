import { useState } from "react";

import { RadialMenu } from "@/components/portfolio/RadialMenu";
import { SidePager } from "@/components/portfolio/SidePager";

import { sections, type SectionId } from "@/components/portfolio/data";

import { Hero } from "@/components/portfolio/sections/Hero";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Contact } from "@/components/portfolio/sections/Contact";

const Index = () => {
  const [active, setActive] = useState<SectionId>("home");

const renderSection = () => {
  switch (active) {
    case "home":
      return (
        <Hero
          onCTA={() => setActive("projects")}
        />
      );

    case "skills":
      return <Skills />;

    case "projects":
      return <Projects />;

    case "contact":
      return <Contact />;

    default:
      return (
        <Hero
          onCTA={() => setActive("projects")}
        />
      );
  }
};

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background text-foreground grid-bg">

      {/* Background glow */}
      <div className="absolute inset-0 bg-hero opacity-90" />

      {/* Left Side Navigation */}
      <SidePager
        active={active}
        onSelect={setActive}
      />

      {/* Main Content */}
      <section className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-20">
        {renderSection()}
      </section>

      {/* Bottom Right Floating Menu */}
      <RadialMenu
        active={active}
        onSelect={setActive}
      />
    </main>
  );
};

export default Index;
