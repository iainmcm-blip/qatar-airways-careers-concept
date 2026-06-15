"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FAQS } from "@/lib/faqs";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <div className="divide-y divide-indigo-100 overflow-hidden rounded-xl border border-indigo-100 bg-white">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal as="div" key={f.q} delay={i * 0.04} y={16}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-lavender-50/60"
            >
              <span className="text-[15px] font-medium text-indigo-800">{f.q}</span>
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-pill border text-lg leading-none text-lavender-500 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen
                    ? "rotate-45 border-lavender-300 bg-lavender-50"
                    : "border-indigo-200"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <motion.div
              id={`faq-panel-${i}`}
              role="region"
              aria-hidden={!isOpen}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.34, ease: [0.22, 1, 0.36, 1] }
              }
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-indigo-500">
                {f.a}
              </p>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
}
