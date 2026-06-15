import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryCard } from "@/components/ui/StoryCard";
import { Reveal } from "@/components/ui/Reveal";
import { STORIES } from "@/lib/stories";

export function Stories() {
  const featured = [STORIES[0], STORIES[1], STORIES[2]];
  return (
    <Section tone="ink">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          tone="light"
          eyebrow="Our people"
          title="Real journeys, real ambition"
          intro="From Al Darb graduates to pilots who chose the world's best — meet the people behind Qatar Airways."
        />
        <Link
          href="/stories"
          className="hidden shrink-0 text-sm font-semibold text-lavender-300 hover:text-white md:inline-block"
        >
          Read all stories →
        </Link>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {featured.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.07}>
            <StoryCard story={s} />
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs text-indigo-400">
        Stories shown are illustrative and will be replaced with real, verified
        employee stories.
      </p>
    </Section>
  );
}
