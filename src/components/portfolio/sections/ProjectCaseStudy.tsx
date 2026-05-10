/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Calendar, Wrench, X } from "lucide-react";
import lockerhardware from "@/assets/projects/locker-hardware.jpg";
import type { CaseStudySection, ProblemSection, Project, StrategySection } from "../data";

const TABS: { id: keyof Project["caseStudy"]; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "strategy", label: "Strategy" },
  { id: "design", label: "Design" },
  { id: "architecture", label: "Architecture" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

export function ProjectCaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const cs = project.caseStudy;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full overflow-y-auto"
      >
        {/* Top bar */}
      <div
        className="
        sticky top-0 z-[120]
        flex items-center justify-between
        px-6 md:px-12 py-4
        backdrop-blur-2xl
        bg-background/75
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        supports-[backdrop-filter]:bg-background/55
        "
    >
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground hidden md:block">
            {project.title}
          </span>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:inline-flex rounded-full p-[1px] group">
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500
                  bg-[linear-gradient(120deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)]
                  bg-[length:200%_200%]
                  group-hover:animate-gradientMove"
              />

              {/* Glass button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-4 py-2 rounded-full
               glass backdrop-blur-md
               text-xs uppercase tracking-[0.2em]
               text-foreground/80 hover:text-foreground
               border border-white/10
               transition-all duration-300"
              >
                View Project ↗
              </a>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero */}
        <section className="relative">
          <div className="relative h-[42vh] md:h-[50vh] w-full overflow-hidden">
            <img
              src={project.cover}
              alt={`${project.title} hero`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-30 mix-blend-overlay`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          </div>

          <div className="relative -mt-24 md:-mt-32 px-6 md:px-12 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2">
                <Pill icon={<Briefcase className="w-3 h-3" />}>{project.role}</Pill>
                <Pill icon={<Calendar className="w-3 h-3" />}>{project.year}</Pill>
                <Pill icon={<Wrench className="w-3 h-3" />}>{project.stack.join(" · ")}</Pill>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-muted-foreground">
                {cs.intro}
              </p>

              {/* Sticky tab nav */}
              <div className="mt-6 -mx-6 md:mx-0 overflow-x-auto">
                <div className="flex gap-1 px-6 md:px-0 min-w-max">
                  {TABS.filter((t) => cs[t.id]).map((t) => (
                    <a
                      key={t.id}
                      href={`#cs-${t.id}`}
                      className="px-3 py-1.5 text-xs rounded-full glass hover:bg-white/10 transition"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <div className="px-6 md:px-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <Meta project={project} />

            <CSBlock id="overview" eyebrow="Overview" section={cs.overview} />
            <ProblemBlock section={cs.problem} />
            <StrategyBlock section={cs.strategy} />
            <DesignBlock section={cs.design as any} />
            {cs.architecture && <ArchitectureSection />}
            <ImpactBlock section={cs.impact as any} />
            <ReflectionBlock section={cs.reflection as any} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.2em] text-foreground/85">
      {icon}
      {children}
    </span>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <MetaItem label="Project" value={project.title} />
      <MetaItem label="Type" value={project.category} />
      <MetaItem label="Role" value={project.role} />
      <MetaItem label="Year" value={project.year} />
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl glass p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}

function CSBlock({
  id,
  eyebrow,
  section,
  accent,
}: {
  id: string;
  eyebrow: string;
  section: CaseStudySection;
  accent?: string;
}) {
  return (
    <section id={`cs-${id}`} className="scroll-mt-24">
      <div className="relative rounded-3xl glass-strong p-6 md:p-8 overflow-hidden">
        {accent && (
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
        )}
        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">{section.title}</h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            {section.body}
          </p>

          {section.bullets && section.bullets.length > 0 && (
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {section.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3 rounded-2xl glass p-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 glow-primary" />
                  <span className="text-sm text-foreground/90">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProblemBlock({ section }: { section: CaseStudySection | ProblemSection }) {
  if (!("features" in section)) {
    return <CSBlock id="problem" eyebrow="The Problem" section={section} />;
  }

  return (
    <section id="cs-problem" className="scroll-mt-24">
      <div className="relative rounded-3xl glass-strong p-6 md:p-8 overflow-hidden">
        {/* Eyebrow */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary">The Problem</p>

        {/* Title */}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">{section.title}</h2>

        {/* Description */}
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {section.body}
        </p>

        {/* 3 Boxes */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {section.features.map((f: any, i: number) => {
            const Icon = f.icon;
            return (
              <div key={i} className="rounded-2xl glass p-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Goal Box */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent p-6">
          <h3 className="text-sm font-semibold">{section.goal.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {section.goal.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function StrategyBlock({ section }: { section: CaseStudySection | StrategySection }) {
  if (!("features" in section)) {
    return <CSBlock id="strategy" eyebrow="Product Strategy" section={section} />;
  }

  return (
    <section id="cs-strategy" className="scroll-mt-24">
      <div className="relative rounded-3xl glass-strong p-6 md:p-8 overflow-hidden">
        {/* Eyebrow */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Product Strategy</p>

        {/* Title */}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">{section.title}</h2>

        {/* Description */}
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {section.body}
        </p>

        {/* Feature Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {section.features.map((f: any, i: number) => {
            const Icon = f.icon;
            return (
              <div key={i} className="rounded-2xl glass p-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesignBlock({ section }: { section: any }) {
  return (
    <section id="cs-design" className="scroll-mt-24">
      <div className="rounded-3xl glass-strong p-6 md:p-10 space-y-12">
        {/* Header */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
            Key Design Decisions
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">{section.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">{section.intro}</p>
        </div>

        {/* Alternating items */}
        <div className="space-y-16">
          {section.items.map((item: any, i: number) => {
            const isReverse = i % 2 !== 0;

            return (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div className={isReverse ? "md:order-2" : "md:order-1"}>
                  <p className="text-4xl font-bold text-primary/40">{item.number}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                {item.image && (
                  <div
                    className={`rounded-2xl overflow-hidden ${isReverse ? "md:order-1" : "md:order-2"}`}
                  >
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Feature Box */}
        {section.footer && (
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold">{section.footer.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{section.footer.description}</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {section.footer.features.map((f: any, i: number) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="glass rounded-xl p-4">
                    <Icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium">{f.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="cs-architecture" className="scroll-mt-24">
      <div className="rounded-3xl glass-strong p-6 md:p-8 space-y-10">
        {/* TITLE */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">System Architecture</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Hardware Meets Software</h2>
        </div>

        {/* 1️⃣ HARDWARE & SOFTWARE LAYERS */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardware */}
          <div className="rounded-2xl glass p-6 space-y-4">
            <h3 className="font-semibold text-lg">Hardware Layer</h3>

            {[
              ["ESP32-S3 microcontroller", "Core control logic for all compartment operations"],
              ["LED indicators", "Visual status feedback"],
              ["Relay modules", "Electronic lock actuation"],
              ["ToF sensors + reed switches", "Accurate state detection"],
            ].map(([title, desc]) => (
              <div key={title}>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          {/* Software */}
          <div className="rounded-2xl glass p-6 space-y-4">
            <h3 className="font-semibold text-lg">Software Layer</h3>

            {[
              ["Android Studio", "App development"],
              ["FaceNet (512-d embeddings)", "Biometric face recognition engine"],
              ["Firebase Firestore", "Realtime cloud backend and user management"],
              ["Push Notifications", "Real-time system feedback"],
            ].map(([title, desc]) => (
              <div key={title}>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FLOW + HARDWARE IMAGE */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

        {/* FLOW */}
        <div className="md:col-span-1 rounded-2xl glass p-6 flex flex-col">
          <h3 className="font-sm mb-6 text-center text-sm">
            End-to-End Experience Flow
          </h3>

        <div className="flex flex-col items-center justify-center gap-2 flex-1">
          {[
            "Onboarding",
            "Face Authentication",
            "Real-time Availability",
            "Rent & Pay",
            "Unlock",
            "Notifications & Status",
            "Manage Rental",
          ].map((step, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 w-full"
        >
          {/* Step */}
          <div
            className="
              px-4 py-2
              rounded-full
              glass
              text-xs
              flex items-center justify-center gap-2
              w-full max-w-[220px]
              text-center
            "
          >
            <span className="text-primary font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>

            {step}
          </div>

          {/* Down Arrow */}
          {i !== 6 && (
            <span className="text-muted-foreground/60 text-xs">
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  </div>

        {/* HARDWARE IMAGE */}
        <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 min-h-[420px]">
        <img
          src={lockerhardware}
          alt="Hardware prototype"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
            Physical Prototype
          </p>
        </div>
      </div>
    </div>

        {/* 3️⃣ CONSTRAINTS BOX */}
        <div className="rounded-2xl glass p-6">
          <h3 className="font-semibold">Constraints & Trade-offs</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Balancing security, usability, and hardware limitations required careful system design
            decisions rather than hiding constraints.
          </p>

          {/* 3 CARDS */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: "Face recognition accuracy",
                sub: "vs speed",
                desc: "Tuned FaceNet threshold",
              },
              {
                title: "Hardware response delays",
                sub: "vs expectations",
                desc: "Loading states & indicators",
              },
              {
                title: "Real-time sync",
                sub: "vs network",
                desc: "Optimistic UI + recovery",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl glass p-4">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
                <p className="text-xs text-primary mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactBlock({ section }: { section: any }) {
  return (
    <section id="cs-impact" className="scroll-mt-24">
      <div className="rounded-3xl glass-strong p-6 md:p-8 overflow-hidden">
        {/* Header */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
            Impact
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
            {section.title}
          </h2>

          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            {section.body}
          </p>
        </div>

        {/* 2 Columns */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* User Value */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              User Value
            </h3>

            <div className="space-y-4">
              {section.userValue?.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Outcome */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Technical Outcome
            </h3>

            <div className="space-y-4">
              {section.technicalOutcome?.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Box */}
        <div className="mt-10 rounded-3xl border border-white/10 p-6 md:p-8">
          <h3 className="text-xl font-semibold">
            Key Features Delivered
          </h3>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {section.features?.map((feature: any, i: number) => {
              const Icon = feature.icon;

              return (
                <div
                  key={i}
                  className="
                    rounded-2xl
                    glass
                    px-5 py-4
                    flex items-center gap-3
                    hover:bg-white/[0.03]
                    transition
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <p className="text-sm font-medium">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReflectionBlock({ section }: { section: any }) {
  return (
    <section id="cs-reflection" className="scroll-mt-24">
      <div className="rounded-3xl glass-strong p-6 md:p-8 overflow-hidden">
        {/* Header */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
            Reflection
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
            {section.title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {section.subtitle}
          </p>
        </div>

        {/* 2 Columns */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Key Learnings */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Key Learnings
            </h3>

            <div className="space-y-5">
              {section.learnings?.map((item: string, i: number) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-muted-foreground leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Future Improvements
            </h3>

            <div className="space-y-4">
              {section.improvements?.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Quote */}
        {section.quote && (
          <div className="pt-8 text-center">
            <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              “{section.quote}”
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
