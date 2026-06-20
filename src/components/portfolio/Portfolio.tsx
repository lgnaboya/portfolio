import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { CodeBackground } from "./CodeBackground";
import { sections, type SectionId } from "./data";
import { RadialMenu } from "./RadialMenu";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { SidePager } from "./SidePager";

export function Portfolio() {
  const [active, setActive] = useState<SectionId>("home");
  const [direction, setDirection] = useState(1);

  const indexOf = (id: SectionId) => sections.findIndex((s) => s.id === id);

  const goTo = useCallback(
    (id: SectionId) => {
      setDirection(indexOf(id) > indexOf(active) ? 1 : -1);
      setActive(id);
    },
    [active],
  );

  const next = useCallback(() => {
    const i = indexOf(active);
    const n = sections[(i + 1) % sections.length];
    setDirection(1);
    setActive(n.id);
  }, [active]);

  const prev = useCallback(() => {
    const i = indexOf(active);
    const n = sections[(i - 1 + sections.length) % sections.length];
    setDirection(-1);
    setActive(n.id);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
  };

  const renderSection = (id: SectionId) => {
    switch (id) {
      case "home":
        return <Hero onCTA={() => goTo("projects")} />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
    }
  };

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.98,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.98 }),
  };

  return (
    <div className="relative min-h-screen w-screen md:h-screen md:overflow-hidden text-foreground">
      <CodeBackground />
      {/* Top brand bar */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-40 flex items-center gap-2 px-4 py-2 rounded-full glass">
        <span className="w-2 h-2 rounded-full bg-primary glow-primary" />
        <span className="text-xs uppercase tracking-[0.25em]">Portfolio</span>
      </div>

      {/* Section indicator */}
      {/* <div className="absolute top-5 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2 rounded-full glass">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {String(indexOf(active) + 1).padStart(2, "0")}
        </span>
        <span className="w-px h-3 bg-border" />
        <span className="text-xs uppercase tracking-[0.25em]">
          {sections[indexOf(active)].label}
        </span>
      </div> */}

      <SidePager active={active} onSelect={goTo} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
          className="absolute inset-0"
        >
          {renderSection(active)}
        </motion.div>
      </AnimatePresence>

      <RadialMenu active={active} onSelect={goTo} />
    </div>
  );
}
