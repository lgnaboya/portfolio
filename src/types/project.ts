export interface Project {
  title: string;
  slug: string;
  template?: "default" | "palo";

  subtitle?: string;
  description?: string;

  meta?: {
    role?: string;
    type?: string;
    tech?: string[];
  };

  sections?: {
    overview?: {
      title: string;
      content: string;
    };

    problem?: {
      title: string;
      desc: string;
    }[];

    solution?: {
      title: string;
      content: string;
    };

    features?: string[];

    impact?: string;

    reflection?: string;
  };
}
