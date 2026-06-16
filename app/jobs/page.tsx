import { Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JobSearchBar } from "@/components/ui/JobSearchBar";
import { JobsBrowser } from "@/components/jobs/JobsBrowser";
import { TalentCommunity } from "@/components/shared/TalentCommunity";

export const metadata: Metadata = {
  title: "Find Jobs — open roles at Qatar Airways | Careers",
  description:
    "Search roles across Qatar Airways. Filter by team, location, contract type, level and Qatari National pathways.",
};

export default function JobsPage() {
  return (
    <>
      {/* Hero with search */}
      <section className="relative overflow-hidden bg-hero-iris pt-40 pb-16 md:pt-44 md:pb-20">
        <Image
          src="/brand/masthead-jobs.jpg"
          alt="A traveller relaxing at The Orchard at Hamad International Airport"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/94 via-indigo-950/72 to-indigo-950/45" />
        <Container className="relative z-10">
          <Reveal className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lavender-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-peach-400" />
              Open roles
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Find your role
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100/90">
              Search opportunities across the airline. When you&apos;re ready
              to apply, you&apos;ll continue securely in Qatar Airways&apos;s official
              talent portal.
            </p>
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <Suspense fallback={<div className="h-16 rounded-pill bg-white/10" />}>
              <JobSearchBar />
            </Suspense>
          </div>
        </Container>
      </section>

      {/* Job alert bar */}
      <div className="border-b border-indigo-100 bg-white">
        <Container className="flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          <p className="text-sm text-indigo-500">
            Not ready to apply?{" "}
            <span className="font-medium text-indigo-700">
              Set a job alert and we&apos;ll come to you.
            </span>
          </p>
          <a
            href="#talent-community"
            className="rounded-pill bg-lavender-50 px-5 py-2 text-sm font-semibold text-lavender-600 hover:bg-lavender-100"
          >
            Create a job alert
          </a>
        </Container>
      </div>

      {/* Browser */}
      <Section tone="cloud">
        <Suspense
          fallback={<p className="text-sm text-indigo-400">Loading roles…</p>}
        >
          <JobsBrowser />
        </Suspense>

        {/* Utility strip */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-indigo-100 bg-white p-6">
            <h3 className="text-base font-semibold text-indigo-800">Saved jobs</h3>
            <p className="mt-1 text-sm text-indigo-500">
              Save roles to compare and return to them — making this a page you come
              back to, not visit once.
            </p>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-white p-6">
            <h3 className="text-base font-semibold text-indigo-800">Job alerts</h3>
            <p className="mt-1 text-sm text-indigo-500">
              Tell us what you&apos;re looking for and we&apos;ll notify you the
              moment a matching role opens.
            </p>
          </div>
        </div>

        {/* iCIMS attribution */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-indigo-100 bg-white p-5">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-lavender-100 text-xs font-bold text-lavender-600">
            i
          </span>
          <p className="text-sm leading-relaxed text-indigo-500">
            You are applying via Qatar Airways&apos;s official talent portal. Roles
            are managed in Qatar Airways&apos;s applicant tracking system (iCIMS) —
            when you apply, you&apos;ll continue securely there. Listings shown here
            are illustrative for this concept.
          </p>
        </div>
      </Section>

      <div id="talent-community" className="scroll-mt-24">
        <TalentCommunity />
      </div>
    </>
  );
}
