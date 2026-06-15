import Link from "next/link";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import type { Job } from "@/lib/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      id={job.id}
      href={`/jobs#${job.id}`}
      className={cn(
        "group flex scroll-mt-28 flex-col rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(104,102,204,0.45)]",
        job.nawat
          ? "border-lavender-300 ring-1 ring-lavender-200"
          : "border-indigo-100 hover:border-lavender-200"
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        {job.nawat && <Badge tone="nawat">Al Darb</Badge>}
        {job.saudiOnly && !job.nawat && <Badge tone="peach">Qatari Nationals</Badge>}
        <Badge tone="lavender">{job.type}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-indigo-800 group-hover:text-lavender-600">
        {job.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-indigo-500">
        {job.summary}
      </p>
      <div className="mt-5 flex items-center gap-4 border-t border-indigo-50 pt-4 text-xs font-medium text-indigo-400">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
          {job.team}
        </span>
        <span>{job.location}</span>
      </div>
    </Link>
  );
}
