import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { REAL } from "@/lib/content";

const icons = ["✦", "↗", "♡"];

export function WhyQatar() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow={REAL.whyEyebrow}
        title={REAL.whyTitle}
        intro="The three things every candidate weighs before they apply — answered honestly, in our own words."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {REAL.whyPillars.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.08}
            className="group flex flex-col rounded-xl border border-indigo-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lavender-200 hover:shadow-[0_30px_60px_-30px_rgba(104,102,204,0.5)]"
          >
            <span className="bg-iris grid h-12 w-12 place-items-center rounded-lg text-xl text-white">
              {icons[i]}
            </span>
            <h3 className="mt-6 text-xl font-semibold text-indigo-800">
              {p.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-indigo-500">
              {p.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
