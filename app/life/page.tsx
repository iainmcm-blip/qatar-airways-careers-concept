import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { HeroVideo } from "@/components/home/HeroVideo";
import { SubNav } from "@/components/ui/SubNav";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeadershipQuote } from "@/components/ui/LeadershipQuote";
import { DualCTA } from "@/components/shared/DualCTA";

export const metadata: Metadata = {
  title: "Life at Qatar Airways — culture, benefits & life in Doha | Careers",
  description:
    "What it genuinely feels like to work at Qatar Airways — our culture, rewards and benefits, diversity, sustainability, wellbeing, and life in Doha.",
};

const SUBNAV = [
  { label: "Culture", id: "culture" },
  { label: "Rewards & Benefits", id: "benefits" },
  { label: "Diversity & Inclusion", id: "diversity" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Wellbeing", id: "wellbeing" },
  { label: "Life in Doha", id: "life-in-doha" },
];

const CULTURE = [
  { t: "Qatari hospitality", b: "Respect, cooperation and genuine warmth — the foundation of how we treat our guests and each other." },
  { t: "Digitally native", b: "A tech-driven disruptor mindset, where creative solutions to air travel are everyone's business." },
  { t: "Built together", b: "A rare chance to shape standards, culture and an entire brand from the very beginning." },
  { t: "Ambition with care", b: "We move fast and aim high, while protecting a healthy work-life balance." },
];

const BENEFITS = [
  { t: "Travel benefits", b: "Discover a growing global network with travel privileges for you and your family.", img: "/brand/787-sunset.jpg" },
  { t: "Relocation & accommodation", b: "Comprehensive relocation and accommodation support to help you settle in Qatar.", img: "/brand/doha-skyline.jpg" },
  { t: "Learning & development", b: "Training and development programmes that open doors to new skills and everyday learning at every stage.", img: "/brand/learning-development.jpg" },
  { t: "Health & protection", b: "Generous compensation, health cover and protection built around the realities of aviation life.", img: "/brand/health-protection.jpg" },
];

const SUSTAINABILITY = [
  { t: "A young, efficient fleet", b: "Next-generation aircraft chosen for lower emissions and quieter operations." },
  { t: "Net-zero ambition", b: "Aligned with the industry's long-term decarbonisation goals." },
  { t: "Sustainable operations", b: "Designing efficiency into the ground experience, not just the air." },
  { t: "Qatar & community", b: "Contributing to Qatar National Vision 2030's environmental commitments." },
];

export default function LifePage() {
  return (
    <>
      <PageHero
        eyebrow="More than a job"
        title="What it feels like to work here"
        intro="This isn't a list of perks. It's a portrait of a place built on Qatari hospitality, digital ambition, and the rare energy of creating something genuinely new."
        video="https://www.qatarairways.com/pxresource/cdn_root/v/tk-ua/Careers_QatarAirways_EVP_Video.mp4"
        videoPoster="/brand/doha-poster.jpg"
        imagePosition="object-center"
      />

      <SubNav items={SUBNAV} />

      {/* Culture */}
      <Section id="culture" tone="light" className="scroll-mt-[130px]">
        <SectionHeading
          eyebrow="Our culture"
          title="Built on respect, cooperation and Qatari hospitality"
          intro="Four values that make Qatar Airways's culture tangible — in how we work, and how it feels to be here."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CULTURE.map((c, i) => (
            <Reveal
              key={c.t}
              delay={i * 0.06}
              className="rounded-xl border border-indigo-100 bg-white p-7"
            >
              <span className="bg-iris block h-10 w-10 rounded-lg" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold text-indigo-800">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-indigo-500">{c.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits — alternating panels */}
      <Section id="benefits" tone="cloud" className="scroll-mt-[130px]">
        <SectionHeading
          eyebrow="Rewards & benefits"
          title="A journey as rewarding as it is inspiring"
          intro="The benefits that matter most to you, explained in full."
        />
        <div className="mt-14 flex flex-col gap-6">
          {BENEFITS.map((b, i) => {
            const imageRight = i % 2 === 1;
            return (
              <Reveal key={b.t}>
                <div className="grid overflow-hidden rounded-xl bg-white md:grid-cols-2">
                  <div
                    className={`relative h-60 md:h-auto md:min-h-[340px] ${
                      imageRight ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <Image
                      src={b.img}
                      alt={b.t}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center p-8 md:p-12 ${
                      imageRight ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-800">
                      {b.t}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-indigo-500">
                      {b.b}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lavender-700">
                      Learn more
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Diversity & Inclusion */}
      <Section id="diversity" tone="ink" className="scroll-mt-[130px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            tone="light"
            eyebrow="Diversity & inclusion"
            title="A workplace as global as our network"
            intro="We're building a diverse, inclusive workforce that reflects both Qatar and the world we fly to — including a landmark commitment to Qatari women in aviation."
          />
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Many", v: "nationalities on board" },
              { k: "1st", v: "generation of Qatari women in aircraft engineering" },
              { k: "Balanced", v: "approach to gender across teams" },
              { k: "Inclusive", v: "by design, from day one" },
            ].map((s) => (
              <Reveal key={s.v} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="font-display text-2xl font-semibold text-white">{s.k}</div>
                <div className="mt-1 text-sm text-indigo-200">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-indigo-400">
          Figures are illustrative and would be confirmed against internal data.
        </p>
      </Section>

      {/* Sustainability */}
      <Section id="sustainability" tone="light" className="scroll-mt-[130px]">
        <SectionHeading
          eyebrow="Sustainability"
          title="A new airline, building responsibly"
          intro="How we're building a new airline responsibly, from the fleet up."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUSTAINABILITY.map((s, i) => (
            <Reveal
              key={s.t}
              delay={i * 0.06}
              className="rounded-xl bg-panel-light p-7"
            >
              <h3 className="text-lg font-semibold text-indigo-800">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-indigo-500">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Wellbeing */}
      <section id="wellbeing" className="scroll-mt-[130px] bg-panel-light py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-72 overflow-hidden rounded-xl md:h-96">
                <Image
                  src="/brand/wellbeing-earth.jpg"
                  alt="A Qatar Airways Boeing 787 in flight high above the Earth"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lavender-500">
                Wellbeing
              </p>
              <h2 className="text-3xl font-semibold text-indigo-800 md:text-[2.4rem]">
                Built for the realities of aviation life
              </h2>
              <p className="mt-5 text-base leading-relaxed text-indigo-500">
                Airlines operate across time zones and shift patterns that create
                genuine wellbeing challenges. We address that directly — with
                support designed around how aviation people actually live and work,
                so you can perform at your best and still feel your best.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Life in Doha */}
      <Section id="life-in-doha" tone="ink" className="scroll-mt-[130px]">
        <SectionHeading
          tone="light"
          eyebrow="Life in Doha"
          title="Considering a move to Qatar?"
          intro="For international candidates, this is the biggest question of all — so here's an honest picture of daily life in one of the world's fastest-growing cities."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { img: "/brand/doha-skyline.jpg", t: "A city on the rise", b: "Safe, ambitious and welcoming, with a quality of life that surprises people who arrive.", video: "https://www.qatarairways.com/pxresource/cdn_root/v/tk-ua/Careers_QatarAirways_EVP_Video.mp4", poster: "/brand/city-rise-poster.jpg" },
            { img: "/brand/visit-qatar-fit.jpg", t: "Climate & lifestyle", b: "350+ days of sunshine, a thriving food and culture scene, and easy access to the wider Gulf region." },
            { img: "/brand/doha-fit.jpg", t: "Healthcare & connectivity", b: "World-class healthcare, international schools, and a hub that connects you to the world." },
          ].map(
            (
              c: { img: string; t: string; b: string; video?: string; poster?: string },
              i
            ) => (
            <Reveal key={c.t} delay={i * 0.07}>
              <div className="overflow-hidden rounded-xl bg-white/5">
                <div className="relative h-48 w-full">
                  {c.video ? (
                    <HeroVideo
                      src={c.video}
                      poster={c.poster || ""}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image src={c.img} alt={c.t} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-indigo-200">{c.b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <LeadershipQuote
        quote="We're not just hiring people to do a job. We're inviting them to build a national carrier — and a life — in one of the most exciting places on earth right now."
        name="Qatar Airways leadership"
        role="On building the team"
      />

      <DualCTA />
    </>
  );
}
