import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTrack } from "@/components/ui/ProcessTrack";
import { LeadershipQuote } from "@/components/ui/LeadershipQuote";
import { StatBar } from "@/components/ui/StatBar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { StoryCard } from "@/components/ui/StoryCard";
import { DualCTA } from "@/components/shared/DualCTA";
import { PROGRAMMES, NAWAT_PROCESS } from "@/lib/programmes";
import { STORIES } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Qatari Nationals — Al Darb & your future | Qatar Airways Careers",
  description:
    "Al Darb and the Qatarisation pathways at Qatar Airways — developing Qatari national talent toward leadership across the Group, in line with Qatar National Vision 2030.",
};

export default function QatariNationalsPage() {
  const saudiStories = STORIES.filter((s) => s.saudi).slice(0, 3);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow="For the talent of Qatar"
        title="Your nation. Your wings. Your future."
        intro="Al Darb is how Qatar Airways Group invests in Qatari talent — a structured Qatarisation pathway from where you are today to leadership across the airline, the airport and beyond. Your ambition and the nation's ambition, taking off together."
        image="/brand/al-darb-banner.jpg"
        imageAlt="Qatari heritage architecture beneath the national flag in Doha"
        imagePosition="object-[12%_center]"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/jobs?saudi=1" variant="light" size="lg">
            Explore Qatari National roles
          </Button>
          <Button href="#programmes" variant="ghost" size="lg">
            View the programmes
          </Button>
        </div>
      </PageHero>

      <StatBar
        stats={[
          { value: "Al Darb", label: "The Group's Qatarisation programme" },
          { value: "60,000+", label: "Colleagues to learn from across the Group" },
          { value: "12", label: "Subsidiaries to build a career across" },
          { value: "Vision 2030", label: "At the heart of Qatar's national plan" },
        ]}
      />

      {/* Process */}
      <Section tone="light">
        <SectionHeading
          align="center"
          eyebrow="The Al Darb journey"
          title="From application to leadership"
          intro="Knowing exactly what to expect is the first step. Here's how the Al Darb pathway develops Qatari national talent across the Group."
        />
        <div className="mt-14">
          <ProcessTrack steps={NAWAT_PROCESS} />
        </div>
      </Section>

      <LeadershipQuote
        quote="When a young Qatari joins this Group, they carry the name of the nation to the world. Building that next generation of leaders is the work I am most proud of."
        name="Qatar Airways leadership"
        role="Speaking to Qatari national candidates"
        image="/brand/crew-male-sunset.jpg"
        imageAlt="A Qatar Airways colleague at sunset"
        imagePosition="object-[35%_center]"
      />

      {/* Qatar National Vision 2030 strip */}
      <section className="bg-panel-light py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lavender-500">
                Part of something bigger
              </p>
              <h2 className="text-3xl font-semibold text-indigo-800 md:text-[2.4rem]">
                A national ambition, carried by you
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-indigo-500">
                Qatar National Vision 2030 places Qatari nationals at the
                forefront of building a diversified, knowledge-based economy. As
                the national carrier and one of the country&apos;s largest
                employers, Qatar Airways&apos; Al Darb pathways are a direct
                contribution to that goal — creating careers, skills and pride
                for a generation.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              {[
                { k: "160+", v: "destinations to grow a career across" },
                { k: "150+", v: "nationalities to lead alongside" },
                { k: "Women", v: "advancing in engineering & flight ops" },
                { k: "Group", v: "-wide mentorship and exposure" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-white p-5">
                  <div className="text-iris font-display text-2xl font-semibold">
                    {s.k}
                  </div>
                  <div className="mt-1 text-sm text-indigo-500">{s.v}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Programmes */}
      <Section id="programmes" tone="cloud">
        <SectionHeading
          eyebrow="Qatari National pathways"
          title="Three routes through Al Darb"
          intro="Each pathway is designed to take Qatari talent from where you are today to a long-term career with the national carrier."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMMES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-indigo-100 bg-white">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={`object-cover ${p.imagePosition ?? "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 to-transparent" />
                <div className="absolute left-4 top-4">
                  {p.real ? (
                    <Badge tone="nawat">Flagship · Live</Badge>
                  ) : (
                    <Badge tone="peach">Illustrative</Badge>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-lavender-500">
                  {p.type}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-indigo-800">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo-500">
                  {p.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.eligibility.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-2 text-sm text-indigo-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-400" />
                      {e}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button href="/jobs?saudi=1" variant="ghostDark" className="w-full">
                    {p.real ? "Apply via Al Darb" : "Register interest"}
                  </Button>
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-indigo-400">
          Al Darb is a live Qatar Airways Group programme. The graduate and
          technical pathways shown are illustrative concept extensions of it.
        </p>
      </Section>

      {/* Qatari stories */}
      <Section tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="Qatari voices"
          title="They started where you are now"
          intro="Real ambition, from Qatar to the world."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {saudiStories.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-indigo-400">
          Stories shown are illustrative and will be replaced with real, verified
          Qatari-national employee stories.
        </p>
      </Section>

      <DualCTA
        title="This pathway was built for you"
        body="Take the first step into a career with the national carrier — apply to a Qatari National pathway, or join our talent community."
        primaryLabel="Explore Qatari National roles"
        primaryHref="/jobs?saudi=1"
        secondaryLabel="Join the talent community"
        secondaryHref="/jobs#talent-community"
      />
    </>
  );
}
