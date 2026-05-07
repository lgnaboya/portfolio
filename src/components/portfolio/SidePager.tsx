import { sections, type SectionId } from "./data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export function SidePager({ active, onSelect }: Props) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {sections.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className="group flex items-center gap-3"
            aria-label={s.label}
          >
            <motion.span
              animate={{ width: isActive ? 36 : 12, opacity: isActive ? 1 : 0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={cn(
                "h-[2px] rounded-full bg-foreground",
                isActive && "bg-primary"
              )}
            />
            <span
              className={cn(
                "text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-70 transition",
                isActive && "opacity-100 text-primary"
              )}
            >
              {s.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}