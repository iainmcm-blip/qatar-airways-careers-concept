import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { JobCard } from "@/components/ui/JobCard";
import { Button } from "@/components/ui/Button";
import { JOBS } from "@/lib/jobs";

export function FeaturedRoles() {
  const featured = JOBS.filter((j) => j.featured).slice(0, 6);
  return (
    <Section tone="light">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Open roles"
          title="Where you could begin"
          intro="A snapshot of the kinds of roles across the Group. Every role leads to the official Qatar Airways careers portal."
        />
        <Link
          href="/jobs"
          className="hidden shrink-0 text-sm font-semibold text-lavender-500 hover:text-lavender-700 md:inline-block"
        >
          View all jobs →
        </Link>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.05}>
            <JobCard job={job} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 md:hidden">
        <Button href="/jobs" variant="ghostDark" className="w-full">
          View all jobs
        </Button>
      </div>
    </Section>
  );
}
