import Link from "next/link";
import { cn } from "@/lib/cn";

/* Concept brand lockup for Qatar Airways Careers.
   An Arabian-oryx-inspired emblem (Qatar's national animal) + an editorial
   wordmark rendered in the loaded brand serif, recoloured per surface.
   Drawn fresh for this concept rather than using the trademarked logo file. */
export function Wordmark({
  className,
  tone = "light",
  showCareers = true,
}: {
  className?: string;
  tone?: "light" | "dark";
  showCareers?: boolean;
}) {
  const light = tone === "light";
  const markColor = light ? "#ffffff" : "var(--color-lavender-700)";
  const accent = "var(--color-peach-400)";
  return (
    <Link
      href="/"
      aria-label="Qatar Airways careers — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {/* Oryx emblem — stylised head with the species' long straight horns */}
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:scale-105"
        aria-hidden
        fill="none"
      >
        {/* long straight oryx horns */}
        <path
          d="M15.5 21 C13 14 12 8 12.8 3.5 M24.5 21 C27 14 28 8 27.2 3.5"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* head / muzzle */}
        <path
          d="M20 36 C13.5 36 10 30.5 10 25 C10 21.6 12.4 19.5 15.2 20.4 C16.7 20.9 18.2 22 20 22 C21.8 22 23.3 20.9 24.8 20.4 C27.6 19.5 30 21.6 30 25 C30 30.5 26.5 36 20 36 Z"
          fill={markColor}
        />
        {/* eye marking */}
        <circle cx="20" cy="28.5" r="1.5" fill={accent} />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-editorial text-[18px] font-medium tracking-[0.02em] md:text-[19px]",
            light ? "text-white" : "text-indigo-800"
          )}
        >
          Qatar Airways
        </span>
        {showCareers && (
          <span
            className={cn(
              "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.32em]",
              light ? "text-peach-300" : "text-lavender-500"
            )}
          >
            Careers
          </span>
        )}
      </span>
    </Link>
  );
}
