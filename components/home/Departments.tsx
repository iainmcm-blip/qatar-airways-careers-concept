import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { REAL } from "@/lib/content";
import { TEAMS } from "@/lib/teams";

export function Departments() {
  const featured = TEAMS.slice(0, 4);
  return (
    <Section tone="cloud">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={REAL.departmentsEyebrow}
          title={REAL.departmentsTitle}
          intro={REAL.departmentsBody}
        />
        <Link
          href="/teams"
          className="hidden shrink-0 text-sm font-semibold text-lavender-500 hover:text-lavender-700 md:inline-flex md:items-center md:gap-1"
        >
          See all teams →
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((t, i) => (
          <Reveal key={t.slug} delay={i * 0.06}>
            <Link
              href={`/teams#${t.slug}`}
              className="group relative block h-[360px] overflow-hidden rounded-xl"
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${t.imagePosition ?? "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-peach-300">
                  Now hiring
                </p>
                <h3 className="mt-1.5 text-lg font-semibold leading-tight text-white">
                  {t.name}
                </h3>
                <p className="mt-1 max-h-0 overflow-hidden text-sm text-indigo-100/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {t.tagline}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
