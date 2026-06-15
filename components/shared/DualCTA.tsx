import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function DualCTA({
  title = "Ready to take off?",
  body = "Whether you're ready to apply today or just exploring, there's a place for you in the story of Qatar Airways.",
  primaryLabel = "Find your role",
  primaryHref = "/jobs",
  secondaryLabel = "Join the talent community",
  secondaryHref = "/jobs#talent-community",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-cloud py-20 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-indigo-800 md:text-[2.4rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-indigo-500">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="ghostDark" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
