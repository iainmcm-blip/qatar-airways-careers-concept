"use client";

import { useState } from "react";
import { EVENTS, EVENT_TYPES, EVENT_REGIONS } from "@/lib/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function EventsExplorer() {
  const [type, setType] = useState("All");
  const [region, setRegion] = useState("All regions");

  const shown = EVENTS.filter((e) => {
    const typeOk = type === "All" || e.type === type;
    const regionOk =
      region === "All regions" ||
      (region === "Online" ? e.format === "Online" : e.location === region);
    return typeOk && regionOk;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-indigo-100 bg-white p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {EVENT_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={cn(
                "rounded-pill px-4 py-2 text-sm font-medium transition-all",
                type === t
                  ? "bg-button-iris text-white"
                  : "text-indigo-500 hover:bg-cloud"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          aria-label="Region"
          className="rounded-pill border border-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 focus:outline-none focus:ring-2 focus:ring-lavender-300"
        >
          {EVENT_REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((e) => (
          <div
            key={e.id}
            className={cn(
              "flex flex-col rounded-xl border bg-white p-6",
              e.comingSoon ? "border-dashed border-lavender-300" : "border-indigo-100"
            )}
          >
            <div className="flex items-center justify-between">
              <Badge tone={e.comingSoon ? "peach" : "lavender"}>{e.type}</Badge>
              <span className="text-xs font-medium text-indigo-400">{e.format}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-indigo-800">
              {e.title}
            </h3>
            <div className="mt-3 space-y-1 text-sm text-indigo-500">
              <p className="font-medium text-lavender-600">{e.date}</p>
              <p>{e.location} · {e.language}</p>
            </div>
            <div className="mt-5 pt-1">
              {e.comingSoon ? (
                <Button href="#event-alerts" variant="ghostDark" className="w-full">
                  Notify me
                </Button>
              ) : (
                <Button href="#event-alerts" className="w-full">
                  Register
                </Button>
              )}
            </div>
          </div>
        ))}
        {shown.length === 0 && (
          <p className="text-sm text-indigo-400">
            No events match those filters yet — set an alert below and we&apos;ll
            tell you when something fits.
          </p>
        )}
      </div>
    </div>
  );
}
