"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";

export function TalentCommunity({
  title = "Can't see a role right for you?",
  body = "Join our talent community and we'll keep you close to the right opportunities as the airline grows. No application required — just the start of a conversation.",
}: {
  title?: string;
  body?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-hero-iris">
      <Container className="py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lavender-100">
            Talent community
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-[2.5rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-indigo-100/90">
            {body}
          </p>

          {done ? (
            <div className="mx-auto mt-8 max-w-md rounded-pill border border-white/25 bg-white/10 px-6 py-4 text-white backdrop-blur">
              Thank you — you&apos;re in. We&apos;ll be in touch as new
              opportunities open.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 rounded-xl bg-white p-2 focus-within:ring-2 focus-within:ring-lavender-400 sm:flex-row sm:rounded-pill sm:p-1.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full bg-transparent px-5 py-3 text-[15px] text-indigo-800 placeholder:text-indigo-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-button-iris shrink-0 rounded-pill px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Join
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-indigo-200/70">
            Demonstration form — no data is stored or sent.
          </p>
        </div>
      </Container>
    </section>
  );
}
