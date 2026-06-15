import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
  {
    icon: "✈",
    title: "Travel",
    body: "Explore a growing global network with travel benefits for you and your family.",
  },
  {
    icon: "⌂",
    title: "Accommodation",
    body: "Relocation and accommodation support to help you settle into life in Doha.",
  },
  {
    icon: "↗",
    title: "Development",
    body: "Training and development programmes that open doors at every stage of your career.",
  },
  {
    icon: "♡",
    title: "Health & wellbeing",
    body: "Comprehensive health cover and wellbeing support built for aviation life.",
  },
];

export function BenefitsTeaser() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        eyebrow="Rewards & benefits"
        title="A journey as rewarding as it is inspiring"
        intro="The benefits that matter most — explained in full inside Life at Qatar Airways."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 0.06}
            className="rounded-xl bg-panel-light p-7 text-center"
          >
            <span className="bg-iris mx-auto grid h-12 w-12 place-items-center rounded-lg text-xl text-white">
              {b.icon}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-indigo-800">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-indigo-500">{b.body}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/life"
          className="text-sm font-semibold text-lavender-500 hover:text-lavender-700"
        >
          Explore all benefits →
        </Link>
      </div>
    </Section>
  );
}
