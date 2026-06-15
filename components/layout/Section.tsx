import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "light" | "cloud" | "indigo" | "ink" | "none";

const toneClass: Record<Tone, string> = {
  light: "bg-white text-indigo-700",
  cloud: "bg-cloud text-indigo-700",
  indigo: "bg-indigo-800 text-white",
  ink: "bg-indigo-950 text-white",
  none: "",
};

export function Section({
  children,
  className,
  innerClassName,
  tone = "light",
  contained = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: Tone;
  contained?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", toneClass[tone], className)}
    >
      {contained ? (
        <Container className={innerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
