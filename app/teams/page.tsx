import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StoryCard } from "@/components/ui/StoryCard";
import { TeamSelector } from "@/components/teams/TeamSelector";
import { DualCTA } from "@/components/shared/DualCTA";
import { TEAMS } from "@/lib/teams";
import { STORIES } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Our Teams — find where you belong | Qatar Airways Careers",
  description:
    "Explore the teams building Qatar Airways — Cabin Crew, Pilots, Engineering, Operations & Corporate, Cargo & Airport Operations and Customer Services.",
};

export default function TeamsPage() {
  const dayInLife = [STORIES[0], STORIES[1], STORIES[4]];

  return (
    <>
      <PageHero
        eyebrow="Find your team"
        title="Where do you fit in the story?"
        intro="Every great flight is the work of many teams. Explore what each one does, what the day-to-day really involves, and where you could begin."
        image="/brand/masthead-teams.jpg"
        imageAlt="A Qatar Airways cabin crew member in the Qsuite cabin"
        imagePosition="object-[center_30%]"
      />

      {/* Team selector */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Explore by team"
          title="Six teams, one ambition"
          intro="Select a team to see what they do, what the role involves, and the roles open right now."
        />
        <div className="mt-12">
          <TeamSelector />
        </div>
      </Section>

      {/* All teams grid */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="At a glance"
          title="All teams"
          intro="Exploring without a specific team in mind? Here's everyone, in one place."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((t, i) => {
            const featured = !!t.saudiFocus;
            return (
              <Reveal key={t.slug} delay={i * 0.05}>
                <Link
                  id={t.slug}
                  href={`/jobs?team=${encodeURIComponent(t.name)}`}
                  className="group relative block h-[400px] scroll-mt-28 overflow-hidden rounded-xl"
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${t.imagePosition ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/30 to-transparent" />
                  {featured && (
                    <div className="absolute right-4 top-4 rounded-pill bg-iris px-3 py-1 text-xs font-semibold text-white">
                      Qatari pathway
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-peach-300">
                      Now hiring
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-white">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-sm text-indigo-100/80">{t.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Day in the life */}
      <Section tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="Day in the life"
          title="See it through their eyes"
          intro="Uncertain about a role? Few things help more than seeing what a real day looks like."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dayInLife.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-indigo-400">
          Stories shown are illustrative and will be replaced with real employee
          stories.
        </p>
      </Section>

      <DualCTA />
    </>
  );
}
