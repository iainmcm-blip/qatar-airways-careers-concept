"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { JOBS, TEAMS_FILTER, type Job } from "@/lib/jobs";
import { JobCard } from "@/components/ui/JobCard";
import { cn } from "@/lib/cn";

const TYPES: Job["type"][] = ["Full-time", "Programme", "Contract"];
const LEVELS: Job["level"][] = ["Entry", "Experienced", "Senior", "Leadership"];

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}

export function JobsBrowser() {
  const params = useSearchParams();
  const initialTeam = params.get("team");
  const [keyword, setKeyword] = useState(params.get("q") || "");
  const [location, setLocation] = useState(params.get("loc") || "");
  const [saudiOnly, setQatariOnly] = useState(params.get("saudi") === "1");
  const [teams, setTeams] = useState<string[]>(initialTeam ? [initialTeam] : []);
  const [types, setTypes] = useState<Job["type"][]>([]);
  const [levels, setLevels] = useState<Job["level"][]>([]);

  const results = useMemo(() => {
    return JOBS.filter((j) => {
      if (saudiOnly && !j.saudiOnly) return false;
      if (teams.length && !teams.includes(j.team)) return false;
      if (types.length && !types.includes(j.type)) return false;
      if (levels.length && !levels.includes(j.level)) return false;
      if (location && !j.location.toLowerCase().includes(location.toLowerCase()))
        return false;
      if (keyword) {
        const hay = `${j.title} ${j.team} ${j.summary}`.toLowerCase();
        if (!hay.includes(keyword.toLowerCase())) return false;
      }
      return true;
    }).sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [saudiOnly, teams, types, levels, location, keyword]);

  const Check = ({
    checked,
    onChange,
    label,
  }: {
    checked: boolean;
    onChange: () => void;
    label: string;
  }) => (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-indigo-600">
      <span
        className={cn(
          "grid h-4 w-4 place-items-center rounded border transition-colors",
          checked ? "border-lavender-400 bg-lavender-400 text-white" : "border-indigo-200"
        )}
      >
        {checked && <span className="text-[10px] leading-none">✓</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Filters sidebar */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-xl border border-indigo-100 bg-white p-6">
          {/* Qatari toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={saudiOnly}
            onClick={() => setQatariOnly((v) => !v)}
            className={cn(
              "flex w-full items-center justify-between rounded-lg border p-3 text-sm font-medium transition-colors",
              saudiOnly
                ? "border-lavender-300 bg-lavender-50 text-lavender-700"
                : "border-indigo-100 text-indigo-600"
            )}
          >
            Qatari Nationals only
            <span
              className={cn(
                "relative h-5 w-9 rounded-pill transition-colors",
                saudiOnly ? "bg-lavender-400" : "bg-indigo-200"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-4 w-4 rounded-pill bg-white transition-all",
                  saudiOnly ? "left-4" : "left-0.5"
                )}
              />
            </span>
          </button>

          <div className="mt-5">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Keyword"
              className="w-full rounded-lg border border-indigo-100 px-3 py-2 text-sm text-indigo-800 placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-lavender-300"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="mt-2 w-full rounded-lg border border-indigo-100 px-3 py-2 text-sm text-indigo-800 placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-lavender-300"
            />
          </div>

          <FilterGroup title="Team">
            {TEAMS_FILTER.map((t) => (
              <Check key={t} label={t} checked={teams.includes(t)} onChange={() => setTeams(toggle(teams, t))} />
            ))}
          </FilterGroup>
          <FilterGroup title="Contract type">
            {TYPES.map((t) => (
              <Check key={t} label={t} checked={types.includes(t)} onChange={() => setTypes(toggle(types, t))} />
            ))}
          </FilterGroup>
          <FilterGroup title="Level">
            {LEVELS.map((l) => (
              <Check key={l} label={l} checked={levels.includes(l)} onChange={() => setLevels(toggle(levels, l))} />
            ))}
          </FilterGroup>
        </div>
      </aside>

      {/* Listings */}
      <div>
        <p className="mb-5 text-sm text-indigo-400">
          {results.length} {results.length === 1 ? "role" : "roles"}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {results.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        {results.length === 0 && (
          <div className="rounded-xl border border-dashed border-indigo-200 p-10 text-center">
            <p className="text-indigo-500">
              No roles match those filters right now.
            </p>
            <a href="#talent-community" className="mt-2 inline-block text-sm font-semibold text-lavender-500">
              Join the talent community →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 border-t border-indigo-50 pt-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">
        {title}
      </p>
      {children}
    </div>
  );
}
