import Hero from "./Hero";
import StickyNav from "./StickyNav";
import Section from "./Section";
import Card from "./Card";

import type { Project } from "@/types/project";

interface Props {
  data: Project;
}

export default function CaseStudyTemplate({ data }: Props) {
  const s = data.sections ?? {};

  return (
    <main className="bg-[#0A0A0A] text-white">
      <Hero data={data} />

      <StickyNav sections={Object.keys(s)} />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {s.overview && (
          <Section id="overview" label="Overview" title={s.overview.title}>
            <p>{s.overview.content}</p>
          </Section>
        )}

        {s.problem && (
          <Section id="problem" label="Problem" title="Where It Fails">
            <div className="grid md:grid-cols-3 gap-6">
              {s.problem.map((p, i) => (
                <Card key={i} title={p.title} desc={p.desc} />
              ))}
            </div>
          </Section>
        )}

        {s.solution && (
          <Section id="solution" label="Solution" title={s.solution.title}>
            <p>{s.solution.content}</p>
          </Section>
        )}

        {s.features && (
          <Section id="features" label="Features" title="Key Features">
            <div className="grid md:grid-cols-2 gap-6">
              {s.features.map((f, i) => (
                <Card key={i} title={f} />
              ))}
            </div>
          </Section>
        )}

        {s.impact && (
          <Section id="impact" label="Impact" title="What It Delivers">
            <p>{s.impact}</p>
          </Section>
        )}

        {s.reflection && (
          <Section id="reflection" label="Reflection" title="Learnings">
            <p>{s.reflection}</p>
          </Section>
        )}
      </div>
    </main>
  );
}
