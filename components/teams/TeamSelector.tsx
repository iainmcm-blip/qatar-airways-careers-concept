"use client";

import { useState } from "react";
import Image from "next/image";
import { TEAMS } from "@/lib/teams";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export function TeamSelector() {
  const [active, setActive] = useState(TEAMS[0].slug);
  const team = TEAMS.find((t) => t.slug === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TEAMS.map((t) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => setActive(t.slug)}
            className={cn(
              "rounded-pill px-5 py-2.5 text-sm font-medium transition-all",
              active === t.slug
                ? "bg-button-iris text-white"
                : "border border-indigo-100 text-indigo-500 hover:border-lavender-300 hover:text-lavender-500"
            )}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="mt-8 grid items-stretch gap-0 overflow-hidden rounded-xl border border-indigo-100 bg-white md:grid-cols-2">
        <div className="relative min-h-[340px] overflow-hidden">
          <Image
            key={team.image}
            src={team.image}
            alt={team.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`scale-[1.12] object-cover ${team.imagePosition ?? "object-center"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/35 via-transparent to-transparent" />
        </div>
        <div className="flex flex-col p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="lavender">Now hiring</Badge>
            {team.saudiFocus && <Badge tone="peach">Qatari pathway</Badge>}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-indigo-800">
            {team.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-lavender-500">
            {team.tagline}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-indigo-500">
            {team.blurb}
          </p>
          <ul className="mt-5 space-y-2">
            {team.dayToDay.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-indigo-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-400" />
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3 pt-1">
            <Button href={`/jobs?team=${encodeURIComponent(team.name)}`}>
              View {team.name.split(" ")[0]} roles
            </Button>
            {team.saudiFocus && (
              <Button href="/qatari-nationals" variant="ghostDark">
                Qatari pathways
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
