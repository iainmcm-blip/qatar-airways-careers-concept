import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PathSelector } from "@/components/journey/PathSelector";
import { FaqAccordion } from "@/components/journey/FaqAccordion";
import { TalentCommunity } from "@/components/shared/TalentCommunity";
import { APPLICATION_TIPS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Your Recruitment Journey — exactly what to expect | Qatar Airways Careers",
  description:
    "A clear, honest guide to applying at Qatar Airways — the process by role type, application tips, FAQs and how to spot recruitment fraud.",
};

const COMMITMENTS = [
  { t: "Transparency", b: "You'll always know what stage you're at and what comes next." },
  { t: "Fairness", b: "Every candidate is assessed against the same clear criteria." },
  { t: "Privacy", b: "Your data is handled with care and only used for your application." },
  { t: "Realistic timelines", b: "We tell you honestly how long each stage is likely to take." },
];

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Here to help"
        title="Exactly what to expect"
        intro="Applying for an airline role shouldn't be a mystery. Here's your process by role type, practical tips, answers to common questions, and how to keep yourself safe from recruitment fraud."
        image="/brand/masthead-journey.jpg"
        imageAlt="A Qatar Airways A350 in flight over turquoise islands at sunset"
        imagePosition="object-center"
      />

      {/* Commitment strip */}
      <section className="border-y border-indigo-100 bg-white py-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <p className="text-sm font-semibold text-indigo-800">{c.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-indigo-500">{c.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Choose your path */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Choose your path"
          title="Your process, by role type"
          intro="Recruitment differs by role, so choose your path to see the steps that apply to you."
        />
        <div className="mt-12">
          <PathSelector />
        </div>
      </Section>

      {/* Application tips */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Application tips"
          title="What the Talent team wants you to know"
          intro="Practical and specific — written for someone who has never applied to an airline before."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-xl border border-indigo-100 bg-white p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <span className="grid h-7 w-7 place-items-center rounded-pill bg-lavender-100 text-lavender-600">✓</span>
              Do
            </h3>
            <ul className="mt-5 space-y-3">
              {APPLICATION_TIPS.dos.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-indigo-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-400" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-xl border border-peach-300 bg-peach-100 p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <span className="grid h-7 w-7 place-items-center rounded-pill bg-peach-300 text-peach-500">!</span>
              Don&apos;t
            </h3>
            <ul className="mt-5 space-y-3">
              {APPLICATION_TIPS.donts.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-indigo-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach-500" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* FAQs */}
      <Section tone="light">
        <SectionHeading
          eyebrow="FAQs"
          title="Your questions, answered"
          intro="The things candidates most often ask, about timelines, eligibility, documents and what happens after an offer."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion />
        </div>
      </Section>

      {/* Fraud warning — high contrast */}
      <section className="bg-indigo-950 py-16">
        <Container>
          <Reveal className="rounded-xl border border-peach-400/40 bg-indigo-900 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-peach-400 text-xl font-bold text-indigo-900">
                !
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Beware of recruitment fraud
                </h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-indigo-100/90">
                  Qatar Airways will <strong className="text-white">never</strong> ask
                  you to pay to apply, to secure an interview, or to guarantee a
                  role — and will never request your financial details during
                  recruitment. All genuine applications are made through Doha
                  Air&apos;s official talent portal, which you reach from the Find
                  Jobs page. If an offer or message looks unofficial, or arrives
                  from an unfamiliar address or link, treat it with caution and do
                  not share personal or financial information.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <TalentCommunity
        title="Read the guide, but not ready yet?"
        body="If you've worked through the process and want to stay close to the right opportunities, join our talent community — no application required."
      />
    </>
  );
}
