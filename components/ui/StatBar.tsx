import { Container } from "@/components/layout/Container";
import { Reveal } from "./Reveal";

export function StatBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="bg-indigo-vivid py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <div className="font-display text-3xl font-semibold text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-lavender-100">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
