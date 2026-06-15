import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVideo } from "@/components/home/HeroVideo";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "object-center",
  video,
  videoPoster,
  align = "left",
  children,
  size = "md",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  video?: string;
  videoPoster?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  size?: "md" | "lg";
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  const hasMedia = !!(image || video);
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        light ? "bg-lavender-50" : "bg-indigo-900",
        size === "lg" ? "min-h-[78svh]" : "min-h-[58svh]"
      )}
    >
      {hasMedia ? (
        <>
          {video ? (
            <HeroVideo
              src={video}
              poster={videoPoster || ""}
              className={cn(
                "absolute inset-0 h-full w-full object-cover",
                imagePosition
              )}
            />
          ) : (
            <Image
              src={image!}
              alt={imageAlt || ""}
              fill
              priority
              sizes="100vw"
              className={cn("object-cover", imagePosition)}
            />
          )}
          {light ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/45 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
              {/* edge vignettes blend to the light page on wide screens */}
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/85 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/92 via-indigo-950/55 to-indigo-950/30" />
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-indigo-950/70 to-transparent" />
              {/* edge vignettes so the hero reads full-bleed on wide screens */}
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-950 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-indigo-950 to-transparent" />
            </>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-hero-iris" />
      )}

      <Container className="relative z-10 flex min-h-[inherit] flex-col justify-center pb-16 pt-40 md:pt-44">
        <Reveal
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto max-w-3xl text-center"
          )}
        >
          {eyebrow && (
            <p
              className={cn(
                "mb-5 inline-flex items-center gap-2 rounded-pill border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur",
                light
                  ? "border-indigo-900/15 bg-white/70 text-indigo-700"
                  : "border-white/20 bg-white/10 text-lavender-100"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-peach-400" />
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl",
              light ? "text-indigo-900" : "text-white"
            )}
          >
            {title}
          </h1>
          {intro && (
            <p
              className={cn(
                "mt-6 text-lg leading-relaxed",
                light ? "text-indigo-700" : "text-indigo-100/90",
                align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
              )}
            >
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
