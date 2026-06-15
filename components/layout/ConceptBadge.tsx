"use client";

import { useState } from "react";

export function ConceptBadge() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 left-4 z-40 hidden max-w-xs items-start gap-2 rounded-md border border-white/15 bg-indigo-950/85 px-3 py-2 text-[11px] leading-snug text-indigo-200 backdrop-blur md:flex">
      <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-peach-400" />
      <span>
        Independent concept by{" "}
        <span className="font-semibold text-white">Iain McMullan</span> — not
        affiliated with Qatar Airways.
      </span>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="ml-1 shrink-0 text-indigo-400 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
