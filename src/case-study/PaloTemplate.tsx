import type { Project } from "@/types/project";

export default function PaloTemplate({ data }: { data: Project }) {
  return (
    <main className="bg-black text-white p-20">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-muted-foreground mt-4">
        Palo Template coming soon (premium layout)
      </p>
    </main>
  );
}
