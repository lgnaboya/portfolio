import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageBackground?: string;
  slug: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  imageBackground,
  slug,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]"
    >
      {/* Background */}
      {imageBackground && (
        <img
          src={imageBackground}
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition"
        />
      )}

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative p-6 space-y-3">
        <p className="text-xs text-muted-foreground">{subtitle}</p>

        <h3 className="text-2xl font-bold group-hover:text-primary transition">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition">
          View Case Study →
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
