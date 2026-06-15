import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { NAV_ITEMS, FIND_JOBS } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="bg-footer-iris text-white/85">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              An employer brand worthy of the World&apos;s Best Airline — a
              careers platform carrying the same craft, warmth and global
              ambition from Doha to the world.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={FIND_JOBS.href}
                  className="text-indigo-200 transition-colors hover:text-white"
                >
                  {FIND_JOBS.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Why I built this
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Qatar Airways sets the global benchmark for service. Its careers
              experience should set the same benchmark for talent. This is an
              independent concept showing how the employer brand could match the
              airline&apos;s reputation, candidate by candidate.
            </p>
            <p className="mt-4 text-sm font-medium text-white">
              Concept &amp; design — Iain McMullan
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            Independent concept — not affiliated with or endorsed by Qatar
            Airways. Brand assets remain the property of Qatar Airways Group.
          </p>
          <p>Designed by Iain McMullan · 2026</p>
        </div>
      </Container>
    </footer>
  );
}
