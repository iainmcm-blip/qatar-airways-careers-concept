"use client";

import { useState } from "react";
import { STORIES } from "@/lib/stories";
import { StoryCard } from "@/components/ui/StoryCard";
import { cn } from "@/lib/cn";

const FILTERS = [
  "All",
  "Cabin Crew",
  "Pilots & Flight Operations",
  "Engineering",
  "Operations & Corporate",
];

export function StoriesExplorer() {
  const [filter, setFilter] = useState("All");
  // The first story is shown as the "Featured" panel above, so exclude it here.
  const pool = STORIES.slice(1);
  const shown =
    filter === "All" ? pool : pool.filter((s) => s.team === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-pill px-4 py-2 text-sm font-medium transition-all",
              filter === f
                ? "bg-button-iris text-white"
                : "border border-indigo-100 text-indigo-500 hover:border-lavender-300 hover:text-lavender-500"
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
          <StoryCard key={s.id} story={s} />
        ))}
      </div>
    </div>
  );
}
