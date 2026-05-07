import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../data";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export function Projects() {
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const dragStart = useRef<number | null>(null);
  const n = projects.length;

  const next = () => setActive((i) => (i + 1) % n);
  const prev = () => setActive((i) => (i - 1 + n) % n);

  useEffect(() => {
    if (openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.stopPropagation();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.stopPropagation();
        prev();
      }
    };
    // we don't bind globally to avoid hijacking section nav; rely on buttons + drag
    return () => undefined;
  }, [openId]);

  const open = projects.find((p) => p.id === openId) ?? null;

  return (
    <div className="relative h-full w-full flex flex-col px-6 md:px-20 pt-20 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-4 flex-wrap"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
            <span className="text-gradient">PROJECTS</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1.5 text-xs rounded-full glass tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 3-card carousel stage */}
      <div
        className="relative flex-1 mt-6 [perspective:1600px]"
        onPointerDown={(e) => (dragStart.current = e.clientX)}
        onPointerUp={(e) => {
          if (dragStart.current == null) return;
          const dx = e.clientX - dragStart.current;
          if (dx < -60) next();
          else if (dx > 60) prev();
          dragStart.current = null;
        }}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {projects.map((p, i) => {
            let off = i - active;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;

            const abs = Math.abs(off);
            const visible = abs <= 1; // only center + 2 neighbors
            const x = off * 320;
            const scale = abs === 0 ? 1 : 0.82;
            const opacity = !visible ? 0 : abs === 0 ? 1 : 0.55;
            const blur = abs === 0 ? 0 : 2;
            const rotY = off * -8;

            return (
              <motion.button
                key={p.id}
                onClick={() => (abs === 0 ? setOpenId(p.id) : setActive(i))}
                animate={{ x, rotateY: rotY, scale, opacity }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                style={{
                  transformStyle: "preserve-3d",
                  filter: `blur(${blur}px)`,
                  zIndex: 100 - abs,
                  pointerEvents: visible ? "auto" : "none",
                }}
                className="absolute w-[300px] sm:w-[360px] md:w-[420px] text-left cursor-pointer group"
                aria-label={p.title}
              >
                <CarouselCard project={p} emphasized={abs === 0} />
              </motion.button>
            );
          })}
        </div>

        {/* dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Detail page overlay */}
      <AnimatePresence>
        {open && <ProjectCaseStudy project={open} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </div>
  );
}

function CarouselCard({ project, emphasized }: { project: Project; emphasized: boolean }) {
  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden glass-strong transition-shadow ${
        emphasized ? "shadow-elegant glow-primary" : ""
      }`}
    >
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${project.accent} opacity-50`}
      />
      <div className="absolute inset-[1px] rounded-3xl bg-background/75 backdrop-blur-xl" />

      {/* Featured image 16:9 */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          loading="lazy"
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-15 mix-blend-overlay`}
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass text-[10px] uppercase tracking-[0.2em]">
          {project.year}
        </div>
      </div>

      {/* Body */}
      <div className="relative p-5 md:p-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary">{project.tag}</p>
        <h3 className="mt-1.5 text-xl md:text-2xl font-semibold leading-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] rounded-full glass">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{project.role}</span>
          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
            View <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
