import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Story } from "@/lib/stories";

export function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-xl",
        className
      )}
    >
      <Image
        src={story.image}
        alt={`${story.name} — ${story.role}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${story.imagePosition ?? "object-center"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/55 to-transparent" />
      <div className="relative p-7">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-white/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
          {story.format}
        </span>
        <p className="font-editorial mt-4 text-lg italic leading-snug text-white">
          &ldquo;{story.quote}&rdquo;
        </p>
        <div className="mt-4">
          <p className="text-sm font-semibold text-white">{story.name}</p>
          <p className="text-xs text-indigo-100/75">
            {story.role}
            {story.nationality ? ` · ${story.nationality}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
