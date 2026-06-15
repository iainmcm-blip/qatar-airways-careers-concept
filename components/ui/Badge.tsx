import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "lavender",
  className,
}: {
  children: React.ReactNode;
  tone?: "lavender" | "peach" | "outline" | "nawat";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold tracking-wide",
        tone === "lavender" && "bg-lavender-100 text-lavender-700",
        tone === "peach" && "bg-peach-200 text-indigo-800",
        tone === "outline" && "border border-white/30 text-white",
        tone === "nawat" && "bg-iris text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
