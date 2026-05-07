import { useState } from "react";

import { Hero } from "@/components/portfolio/sections/Hero";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Contact } from "@/components/portfolio/sections/Contact";

import { CodeBackground } from "@/components/portfolio/CodeBackground";

const sections = ["home", "projects", "skills", "contact"] as const;

type Section = (typeof sections)[number];

const Index = () => {
  const [active, setActive] = useState<Section>("home");

  return (
    <div className="h-screen overflow-hidden bg-background relative">
      <CodeBackground />

      {/* NAV */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition ${
                active === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* VIEWPORT */}
      <div className="relative w-full h-full">
        <div className={active === "home" ? "block h-full" : "hidden"}>
          <Hero onCTA={() => setActive("projects")} />
        </div>

        <div className={active === "projects" ? "block h-full" : "hidden"}>
          <Projects />
        </div>

        <div className={active === "skills" ? "block h-full" : "hidden"}>
          <Skills />
        </div>

        <div className={active === "contact" ? "block h-full" : "hidden"}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
