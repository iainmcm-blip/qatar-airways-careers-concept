import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatTile } from "@/components/ui/StatTile";
import { EventsExplorer } from "@/components/events/EventsExplorer";
import { TalentCommunity } from "@/components/shared/TalentCommunity";
import { EVENTS } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events — meet Qatar Airways | Careers",
  description:
    "Open days, webinars and career fairs to meet the Qatar Airways team — in Doha, Doha and online, in Arabic and English.",
};

const WEBINARS = EVENTS.filter((e) => e.type === "Webinar");

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet us"
        title="Come and meet Qatar Airways"
        intro="Open days, webinars and career fairs across Qatar and online — designed so there's something relevant for you, wherever you are."
        image="/brand/discover-riyadh.jpg"
        imageAlt="Doha skyline"
      >
        <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile value="6+" label="Upcoming events" variant="glass" />
          <StatTile value="3" label="Formats" variant="glass" />
          <StatTile value="2" label="Cities + online" variant="glass" />
          <StatTile value="AR / EN" label="Languages" variant="glass" />
        </div>
      </PageHero>

      {/* Explorer */}
      <Section tone="light">
        <SectionHeading
          eyebrow="What's on"
          title="Find an event that fits"
          intro="Filter by type and region to find an event near you, in a format that fits."
        />
        <div className="mt-12">
          <EventsExplorer />
        </div>
        <p className="mt-6 text-xs text-indigo-400">
          Events shown are illustrative for this concept.
        </p>
      </Section>

      {/* Webinar strip */}
      <Section tone="ink">
        <SectionHeading
          tone="light"
          eyebrow="From anywhere"
          title="Webinars in Arabic & English"
          intro="Removing the geographic barrier — for Qatari nationals outside Doha and international candidates considering a move."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WEBINARS.slice(0, 3).map((w, i) => (
            <Reveal key={w.id} delay={i * 0.07} className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-peach-300">
                Webinar · {w.language}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-indigo-200">{w.date}</p>
            </Reveal>
          ))}
          <Reveal delay={0.21} className="rounded-xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-peach-300">
              Specialist · Pilots, Engineers & Corporate
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Specialist & Corporate sessions
            </h3>
            <p className="mt-2 text-sm text-indigo-200">
              Not just for cabin crew — dedicated sessions for technical and
              corporate professionals too.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Schedule / calendar view */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Calendar"
          title="Plan around your schedule"
          intro="A month-by-month view, so you can plan around a current job."
        />
        <div className="mt-12 space-y-8">
          {["July", "August", "September"].map((month) => {
            const monthEvents = EVENTS.filter((e) => e.month === month);
            return (
              <Reveal key={month} className="rounded-xl border border-indigo-100 bg-white p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-lavender-500">
                  {month} 2026
                </h3>
                <div className="mt-4 divide-y divide-indigo-50">
                  {monthEvents.map((e) => (
                    <div key={e.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                      <div>
                        <p className="text-[15px] font-medium text-indigo-800">{e.title}</p>
                        <p className="text-sm text-indigo-400">{e.location} · {e.format} · {e.language}</p>
                      </div>
                      <span className="rounded-pill bg-lavender-50 px-4 py-1.5 text-sm font-medium text-lavender-700">
                        {e.date}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <div id="event-alerts" className="scroll-mt-24">
        <TalentCommunity
          title="Nothing quite right yet?"
          body="Register for event alerts and we'll tell you the moment something relevant to your field or region is added."
        />
      </div>
    </>
  );
}
