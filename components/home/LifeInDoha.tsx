import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const FACTS = [
  { k: "0%", v: "personal income tax" },
  { k: "#1", v: "safest cities in the world" },
  { k: "350+", v: "days of sunshine a year" },
];

export function LifeInDoha() {
  return (
    <section className="bg-cloud py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-[340px] overflow-hidden rounded-xl md:h-[460px]">
              <Image
                src="/brand/discover-riyadh.jpg"
                alt="The Doha skyline rising along the Corniche"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-lavender-500">
              Life in Doha
            </p>
            <h2 className="text-3xl font-semibold text-indigo-800 md:text-[2.6rem]">
              Considering a move to Doha?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-indigo-500">
              For international candidates, relocating is the biggest question of
              all. Doha is one of the world&apos;s safest and most cosmopolitan
              cities — modern, welcoming, and tax-free, with world-class
              healthcare, international schools, and a waterfront quality of life
              that surprises people who arrive.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {FACTS.map((f) => (
                <div key={f.v}>
                  <div className="text-iris font-display text-2xl font-semibold md:text-3xl">
                    {f.k}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-indigo-500">
                    {f.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-indigo-400">Indicative figures.</p>
            <div className="mt-8">
              <Button href="/life#life-in-doha" variant="ghostDark">
                Discover life in Doha
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
