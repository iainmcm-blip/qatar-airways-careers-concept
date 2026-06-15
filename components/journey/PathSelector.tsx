"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ProcessTrack, type Step } from "@/components/ui/ProcessTrack";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const PATHS: { key: string; label: string; steps: Step[] }[] = [
  {
    key: "cabin",
    label: "Cabin Crew",
    steps: [
      { title: "Apply online", body: "Submit your application and create your candidate profile on the official portal." },
      { title: "Screening", body: "We review your application against the role and programme requirements." },
      { title: "Assessment day", body: "Meet the team, take part in group exercises and show your warmth and presence." },
      { title: "Final interview", body: "A focused conversation about you, your motivation and customer mindset." },
      { title: "Offer & onboarding", body: "Receive your offer and begin training toward your first flight." },
    ],
  },
  {
    key: "pilots",
    label: "Pilots",
    steps: [
      { title: "Apply online", body: "Submit your application with your licences, ratings and hours." },
      { title: "Document & licence check", body: "We verify eligibility, endorsements and regulatory requirements." },
      { title: "Technical assessment", body: "Simulator and technical evaluation against our standards." },
      { title: "Interview panel", body: "Competency and command-potential interview with the flight ops team." },
      { title: "Offer & type rating", body: "Receive your offer and begin type-rating and onboarding." },
    ],
  },
  {
    key: "corporate",
    label: "Corporate & Engineering",
    steps: [
      { title: "Apply online", body: "Submit a tailored CV for the specific role and team." },
      { title: "Screening call", body: "An initial conversation about your experience and motivation." },
      { title: "Skills interview", body: "A role-specific interview, technical exercise or portfolio review." },
      { title: "Final interview", body: "Meet the hiring leader and discuss how you'd build with us." },
      { title: "Offer & relocation", body: "Receive your offer, with relocation support where relevant." },
    ],
  },
];

export function PathSelector() {
  const [active, setActive] = useState("cabin");
  const reduce = useReducedMotion();
  const path = PATHS.find((p) => p.key === active)!;

  return (
    <div>
      <Reveal className="flex flex-wrap gap-2">
        {PATHS.map((p) => {
          const isActive = active === p.key;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(p.key)}
              aria-pressed={isActive}
              className={cn(
                "relative rounded-pill px-5 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "text-white"
                  : "border border-indigo-100 text-indigo-500 hover:border-lavender-300 hover:text-lavender-500"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="path-pill"
                  className="bg-button-iris absolute inset-0 rounded-pill"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 34 }
                  }
                />
              )}
              <span className="relative z-10">{p.label}</span>
            </button>
          );
        })}
      </Reveal>
      {/* key={active} remounts the track on switch so every step re-staggers
          uniformly — the same cascade as the initial scroll-in. */}
      <div className="mt-10">
        <ProcessTrack key={active} steps={path.steps} />
      </div>
    </div>
  );
}
