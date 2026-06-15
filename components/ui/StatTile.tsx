import { cn } from "@/lib/cn";

export function StatTile({
  value,
  label,
  variant = "glass",
}: {
  value: string;
  label: string;
  variant?: "glass" | "plain" | "ink";
}) {
  return (
    <div
      className={cn(
        "rounded-lg p-5 md:p-6",
        variant === "glass" &&
          "border border-white/15 bg-white/10 backdrop-blur-md",
        variant === "plain" && "bg-cloud",
        variant === "ink" && "border border-white/10 bg-white/5"
      )}
    >
      <div
        className={cn(
          "font-display text-3xl font-semibold md:text-4xl",
          variant === "plain" ? "text-iris" : "text-white"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-2 text-sm leading-snug",
          variant === "plain" ? "text-indigo-500" : "text-indigo-100/80"
        )}
      >
        {label}
      </div>
    </div>
  );
}
