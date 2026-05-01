import { useEffect, useRef, useState } from "react";
import CircularGallery3D from "./CircularGallery3D";

import { projects } from "../data/projects";

import aiRepTracker from "../assets/ai-rep-tracker.png";
import danceFitness from "../assets/dance-fitness.png";

const ProjectsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress =
        (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight);

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryProjects = projects.map((p) => ({
    title: p.title,
    date: p.subtitle ?? "", // reuse subtitle as date label
    description: p.description ?? "",

    features: p.sections?.features ?? [],

    links: [
      {
        label: "View Case Study",
        url: `/projects/${p.slug}`,
      },
    ],

    imageBackground:
      p.slug === "rental-locker"
        ? danceFitness
        : p.slug === "noface"
          ? danceFitness
          : p.slug === "booknest"
            ? danceFitness
            : p.slug === "exis-ims"
              ? danceFitness
              : p.slug === "palo-promotion"
                ? danceFitness
                : aiRepTracker,
  }));

  return (
    <section ref={sectionRef} id="projects" className="py-4 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl font-extrabold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated selection of projects that showcase my ability to blend
            design, functionality, and innovation across different platforms.
          </p>
        </div>

        <div className="space-y-2">
          <CircularGallery3D projects={galleryProjects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
