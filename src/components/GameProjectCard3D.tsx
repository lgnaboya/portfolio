import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface GameProjectCard3DProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageBackground?: string;
  slug: string;
}

const GameProjectCard3D = ({
  title,
  subtitle,
  description,
  imageBackground,
  slug,
}: GameProjectCard3DProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="w-full h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden
      shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]
      transition-all duration-300 cursor-pointer group"
    >
      {/* IMAGE */}
      <div
        className="w-full h-48 relative overflow-hidden bg-center"
        style={{
          backgroundImage: `url(${imageBackground})`,
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <h3 className="text-xl md:text-2xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-white/80 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-card">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* CTA */}
        <div className="pt-4 flex justify-end">
          <span
            className="inline-flex items-center gap-1 text-xs text-primary
            opacity-0 group-hover:opacity-100 transition"
          >
            View Case Study
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameProjectCard3D;
