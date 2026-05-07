import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections, type SectionId } from "./data";
import { cn } from "@/lib/utils";

interface Props {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export function RadialMenu({ active, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const radius = 110;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-7 right-7"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {sections.map((s, i) => {
              const angle = (-90 - i * (90 / (sections.length - 1))) * (Math.PI / 180);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const Icon = s.icon;
              const isActive = s.id === active;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => {
                    onSelect(s.id);
                    setOpen(false);
                  }}
                  variants={{
                    closed: { x: 0, y: 0, opacity: 0, scale: 0.5 },
                    open: { x, y, opacity: 1, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.04 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full glass-strong text-foreground group",
                    isActive && "glow-primary !bg-primary !text-primary-foreground"
                  )}
                  aria-label={s.label}
                >
                  <Icon className="w-5 h-5" />
                  <span className="absolute right-14 px-2 py-1 rounded-md glass text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    {s.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground glow-primary flex items-center justify-center"
        aria-label="Menu"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}