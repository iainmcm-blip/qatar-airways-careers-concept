import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoriesExplorer } from "@/components/stories/StoriesExplorer";
import { DualCTA } from "@/components/shared/DualCTA";
import { STORIES } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Our Stories — real people, real journeys | Qatar Airways Careers",
  description:
    "Hear from the people building Qatar Airways — profiles, day-in-the-life, career journeys and the nationalities that make up our team.",
};

const VIDEOS = [
  { t: "Why I chose Qatar Airways", team: "Cabin Crew", img: "/brand/nawat-cabin-crew.jpg" },
  { t: "Inside the Al Darb pathway", team: "Qatari Nationals", img: "/brand/scholarship-banner.jpg" },
  { t: "Relocating to Doha", team: "International", img: "/brand/discover-riyadh.jpg" },
];

const JOURNEYS = [
  { name: "Noor", path: ["Cabin Crew", "Senior Crew", "Cabin Service Director", "Inflight Trainer"] },
  { name: "Aisha", path: ["Al Darb Graduate", "Commercial Analyst", "Strategy Lead"] },
  { name: "Daniel", path: ["First Officer", "Senior First Officer", "Captain (pathway)"] },
];

export default function StoriesPage() {
  const featured = STORIES[0];
  return (
    <>
      <PageHero
        eyebrow="Voices of Qatar Airways"
        title="Real people. Real journeys."
        intro="A genuinely editorial space to hear from the people building Qatar Airways — in their own words, about what working here is actually like."
        video="https://www.qatarairways.com/pxresource/cdn_root/v/tk-ua/Careers_QatarAirways_EVP_Video.mp4"
        videoPoster="/brand/stories-fleet-poster.jpg"
        imagePosition="object-center"
      />

      {/* Featured story */}
      <Section tone="light">
        <Reveal>
          <div className="grid items-stretch gap-0 overflow-hidden rounded-xl border border-indigo-100 bg-white md:grid-cols-2">
            <div className="relative min-h-[360px]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover ${featured.imagePosition ?? "object-[center_20%]"}`}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <Badge tone="nawat">Featured story</Badge>
            <p className="font-editorial mt-6 text-2xl italic leading-snug text-indigo-800 md:text-[1.7rem]">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-indigo-800">{featured.name}</p>
              <p className="text-sm text-indigo-400">
                {featured.role} · {featured.nationality}
              </p>
            </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Explorer */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="All stories"
          title="Find someone who started where you are"
          intro="Filter by team to find people who started where you want to go."
        />
        <div className="mt-10">
          <StoriesExplorer />
        </div>
        <p className="mt-6 text-xs text-indigo-400">
          Stories shown are illustrative and will be replaced with real, verified
          employee stories.
        </p>
      </Section>

      {/* Video stories */}
      <Section tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="Video stories"
          title="Press play on a career"
          intro="The topics with the highest impact on a decision — why people chose Qatar Airways, what Al Darb involves, and what relocating really looks like."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.07}>
              <div className="group relative h-64 overflow-hidden rounded-xl">
                <Image src={v.img} alt={v.t} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-16 w-16 place-items-center rounded-pill bg-white/15 backdrop-blur transition-transform group-hover:scale-110">
                    <span className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-peach-300">{v.team}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{v.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Career journeys */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Career journeys"
          title="See how far you could go"
          intro="For candidates thinking beyond the first role, a structured path matters — especially for Qatari nationals planning a long-term career."
        />
        <div className="mt-12 space-y-6">
          {JOURNEYS.map((j, i) => (
            <Reveal key={j.name} delay={i * 0.06} className="rounded-xl border border-indigo-100 bg-white p-6">
              <p className="text-sm font-semibold text-indigo-800">{j.name}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {j.path.map((step, si) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="rounded-pill bg-lavender-50 px-4 py-2 text-sm font-medium text-lavender-700">
                      {step}
                    </span>
                    {si < j.path.length - 1 && (
                      <span className="text-lavender-300">→</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Nationalities spotlight */}
      <section className="bg-panel-light py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lavender-500">
              Nationalities spotlight
            </p>
            <h2 className="text-3xl font-semibold text-indigo-800 md:text-[2.4rem]">
              A team from across Qatar and the world
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-indigo-500">
              For candidates considering a move, seeing that others from their
              region already work here makes the decision feel real. Qatar Airways
              brings together Qatari nationals and international talent from many
              countries — building one team, with many starting points.
            </p>
          </Reveal>
        </Container>
      </section>

      <DualCTA
        title="Your story could be next"
        body="You've read where others started. When you're ready, take the first step — or stay close to us through the talent community."
      />
    </>
  );
}
