import Link from "next/link";
import { cn } from "@/lib/cn";

/* Official Qatar Airways Group logo lockup, recoloured per surface for this
   concept careers subsite. On dark surfaces the logo is reversed to white;
   on light surfaces it shows in its natural burgundy + grey. */
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
  return (
    <Link
      href="/"
      aria-label="Qatar Airways careers — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/qatar-airways-logo.webp"
        alt="Qatar Airways Group"
        width={150}
        height={44}
        className={cn(
          "h-10 w-auto md:h-11",
          // reverse the colour logo to solid white on dark surfaces
          light && "[filter:brightness(0)_invert(1)]"
        )}
      />
      {showCareers && (
        <>
          <span
            className={cn(
              "hidden h-7 w-px sm:block",
              light ? "bg-white/35" : "bg-indigo-200"
            )}
          />
          <span
            className={cn(
              "hidden text-[13px] font-medium uppercase tracking-[0.28em] sm:block",
              light ? "text-peach-300" : "text-lavender-500"
            )}
          >
            Careers
          </span>
        </>
      )}
    </Link>
  );
}
