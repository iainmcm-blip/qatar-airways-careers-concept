import { Container } from "@/components/layout/Container";
import { JobSearchBar } from "@/components/ui/JobSearchBar";
import { StatTile } from "@/components/ui/StatTile";
import { HeroVideo } from "@/components/home/HeroVideo";
import { REAL, STATS } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-indigo-950 pt-28">
      <HeroVideo
        src="https://www.qatarairways.com/pxresource/cdn_root/v/tk-ua/Careers_QatarAirways_EVP_Video.mp4"
        poster="/brand/qa-hero-main.webp"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* scrims: dark left for headline legibility; the brand-purple
          jet-bridge video fills the frame edge-to-edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/92 via-indigo-950/55 to-indigo-950/20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-950/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-indigo-950 via-indigo-950/35 to-transparent" />

      <Container className="relative z-10 flex flex-1 flex-col justify-between pb-12 pt-16 md:pb-16">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lavender-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-peach-400" />
            The World&apos;s Best Airline, voted by Skytrax
          </p>
          <h1 className="text-balance text-[2.7rem] font-semibold leading-[1.04] text-white sm:text-6xl md:text-7xl">
            {REAL.careersHeroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-100/90">
            From our home in Doha, Qatar Airways connects more than 160
            destinations across six continents. Join 60,000 people from over 150
            nationalities who set the global standard for what flying can be.
          </p>
        </div>

        <div className="mt-12 w-full">
          <div className="max-w-3xl">
            <JobSearchBar />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatTile key={s.label} value={s.value} label={s.label} variant="glass" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
