import portrait from "@/assets/portrait.jpg";
import { motion } from "framer-motion";
import { ArrowRight, CircleDotDashed } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const roles = ["UI/UX Designer", "Web Developer", "System Thinker", "Problem Solver"];

export function Hero({ onCTA }: { onCTA: () => void }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // ===== LANYARD STATE =====
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [swingRotation, setSwingRotation] = useState(0);

  const dragRef = useRef({
    startX: 0,
    startY: 0,
    elemX: 0,
    elemY: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const animationRef = useRef<number | null>(null);

  // ===== TYPEWRITER =====
  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  // ===== PHYSICS =====
  useEffect(() => {
    if (isDragging) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = () => {
      setPosition((prev) => ({
        x: (prev.x + velocity.x) * 0.95,
        y: (prev.y + velocity.y) * 0.95,
      }));

      setVelocity((prev) => ({
        x: prev.x * 0.95,
        y: prev.y * 0.95,
      }));

      setSwingRotation((prev) => {
        const target = velocity.x * -0.5;
        return prev + (target - prev) * 0.1;
      });

      if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [velocity, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const now = Date.now();

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      elemX: position.x,
      elemY: position.y,
      lastTime: now,
      lastX: e.clientX,
      lastY: e.clientY,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const now = Date.now();
    const dt = now - dragRef.current.lastTime;

    if (dt > 0) {
      const vx = ((e.clientX - dragRef.current.lastX) / dt) * 16;
      const vy = ((e.clientY - dragRef.current.lastY) / dt) * 16;
      setVelocity({ x: vx, y: vy });
    }

    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;

    setPosition({
      x: dragRef.current.elemX + deltaX,
      y: dragRef.current.elemY + deltaY,
    });

    dragRef.current.lastTime = now;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => setIsDragging(false);

  const [copied, setCopied] = useState(false);

  return (
    <div
      className="relative h-full w-full grid-bg flex items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* BG blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute top-[10%] right-[8%] w-80 h-80 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute bottom-[5%] left-[8%] w-96 h-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative w-full max-w-6xl grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
        {/* ===== LANYARD PORTRAIT (MOBILE FIX ONLY) ===== */}
        <div className="flex justify-center md:justify-end animate-fade-in scale-90 sm:scale-100">
          <div
            className="relative pt-24 sm:pt-32"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) rotate(${swingRotation}deg)`,
              transformOrigin: "top center",
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            {/* Lanyard */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-24 sm:h-32">
              <div className="relative w-full h-full bg-gradient-to-b from-primary via-primary/80 to-primary/60 rounded-sm shadow-xl overflow-hidden">
                <div className="absolute inset-0 opacity-30" />
                <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-primary-foreground/20" />
              </div>
            </div>

            {/* Clip */}
            <div className="absolute top-20 sm:top-28 left-1/2 -translate-x-1/2 z-10">
              <div className="relative w-10 h-6 bg-zinc-500 rounded-md shadow-lg" />
            </div>

            {/* CARD (mobile width fix only) */}
            <div style={{ perspective: "1000px" }}>
              <div
                style={{
                  transformStyle: "preserve-3d",
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                className="relative bg-gradient-card backdrop-blur-xl border-2 border-[var(--glass-border)] rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-card)] w-[280px] sm:w-80"
              >
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-primary rounded-t-3xl" />

                <div className="flex flex-col items-center gap-6 pt-4">
                  <div className="w-full h-60 sm:h-72 rounded-xl overflow-hidden">
                    <img
                      src={portrait}
                      alt="Portrait of Loudette"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>

                <h1 className="mt-5 text-lg sm:text-xl text-center font-semibold leading-[0.95]">
                  Loudette Glea <span className="text-gradient">Naboya</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTENT (UNCHANGED) ===== */}
        <div className="text-center md:text-left">
          <div className="mt-2 sm:mt-24 inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <CircleDotDashed className="w-3.5 h-3.5 text-primary" />
            Taking on curated projects
          </div>

          <p className="mt-8 text-lg md:text-2xl text-muted-foreground">
            I'm a <span className="text-foreground font-medium">{text}</span>
            <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse" />
          </p>

          <p className="mt-4 max-w-xl text-sm md:text-md text-justify text-muted-foreground">
            I design and build structured digital products.
            <br />
            Clear. Scalable. Intentional.
            <br />
            <br />
            Driven by curiosity and continuous learning, I thrive in dynamic environments where I
            explore new tools, solve complex problems, and transform ideas into functional solutions
            that deliver real-world value.
          </p>

          <div className="mt-8 sm:mt-16 flex gap-3 justify-center md:justify-start">
            <button
              onClick={onCTA}
              className="group px-6 py-3 rounded-md bg-primary text-primary-foreground"
            >
              View Projects <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>

            <div className="relative flex flex-col items-end">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("loudettgleacnaboya@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center justify-center border border-gray-500 text-gray-500 rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-gray-300/10"
              >
                Get In Touch
              </a>

              {copied && (
                <span className="absolute -bottom-5 text-xs text-green-700">✓ Email Copied</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
