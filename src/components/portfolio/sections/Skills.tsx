import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "../data";

export function Skills() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center px-6 md:px-20 py-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Core Expertise
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
          Design Capabilities
          {/* <span className="text-gradient">Capabilities</span> */}
        </h2>

        <p className="mt-3 text-muted-foreground text-sm max-w-xl">
          A collection of design capabilities developed through hands-on
          projects, user-centered thinking, and continuous exploration.
        </p>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-5 max-w-5xl">
        {skillCategories.map((cat, i) => (
          <FlipCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({
  cat,
  index,
}: {
  cat: (typeof skillCategories)[number];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-60 [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl glass-strong p-7 overflow-hidden flex flex-col justify-between">
          <div
            className={`absolute inset-0 opacity-20 bg-gradient-to-br ${cat.accent}`}
          />
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative">
            <div className="relative w-8 h-8 rounded-2xl glass flex items-center justify-center px-2 gap-2 text-primary">
              <Icon className="w-4 h-4" />
            </div>
            {/* Pulse on the right */}
            <div className="absolute right-[8px] top-6 -translate-y-1/2">
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Strong pulse ring */}
                <span className="absolute w-full h-full rounded-full border-2 border-primary/50 animate-ping" />

                {/* Secondary softer ring */}
                <span className="absolute w-full h-full rounded-full border border-primary/30" />

                {/* Glow */}
                <span className="absolute w-full h-full rounded-full bg-primary/10 blur-md" />
              </div>
            </div>
            <h3 className="mt-5 text-xl md:text-2xl font-semibold">
              {cat.title}
            </h3>
          </div>
          <div className="relative flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs rounded-full glass border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl glass-strong p-7 overflow-hidden flex flex-col items-center justify-center">
          <div
            className={`absolute inset-0 opacity-25 bg-gradient-to-tr ${cat.accent}`}
          />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              {cat.title}
            </p>
            <p className="mt-4 text-base md:text-md text-foreground/90 leading-relaxed text-justify">
              {cat.description}
            </p>
          </div>
          {/* <div className="relative flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 text-[11px] rounded-full bg-white/10 border border-white/15"
              >
                {s}
              </span>
            ))}
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
