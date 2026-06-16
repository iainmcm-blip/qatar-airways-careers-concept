import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { REAL } from "@/lib/content";

export function AlDarbBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-hero-iris">
      {/* Full-bleed image: a relative block on mobile, full background on desktop.
          The section's iridescent bg shows behind the text on mobile only. */}
      <div className="relative h-72 w-full sm:h-96 md:absolute md:inset-0 md:h-full">
        <Image
          src="/brand/cabin-crew.jpg"
          alt="A Qatar Airways cabin crew member before the aircraft"
          fill
          sizes="100vw"
          className="object-cover object-[center_18%] md:object-[25%_top]"
        />
        {/* desktop: darken the right so the copy is legible, keep the crew + aircraft bright on the left */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-indigo-950 via-indigo-950/75 to-indigo-950/5" />
        {/* mobile: gentle bottom fade into the text panel */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent" />
      </div>

      {/* Text panel: below the image on mobile (over the section's iridescent bg),
          overlaid on the dark right side on desktop */}
      <div className="relative">
        <Container>
          <Reveal className="py-12 md:ml-auto md:max-w-xl md:py-24">
            <Badge tone="outline" className="mb-5 w-fit">
              {REAL.nawatEyebrow}
            </Badge>
            <h2 className="text-3xl font-semibold text-white md:text-[2.6rem]">
              {REAL.nawatTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-indigo-100/90">
              {REAL.nawatBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/qatari-nationals" variant="light">
                Explore Qatari National pathways
              </Button>
              <Button href="/jobs?saudi=1" variant="ghost">
                Apply via Al Darb
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
