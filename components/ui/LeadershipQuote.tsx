import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "./Reveal";

export function LeadershipQuote({
  quote,
  name,
  role,
  illustrative = true,
  image,
  imageAlt,
  imagePosition = "object-center",
}: {
  quote: string;
  name: string;
  role: string;
  illustrative?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  // Image variant: split feature — solid quote panel + a clean photo cell.
  if (image) {
    return (
      <section className="relative overflow-hidden bg-indigo-950">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 md:px-12 md:py-28 lg:pr-16">
            <Reveal className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
              <div className="bg-iris mb-8 h-12 w-12 rounded-pill" aria-hidden />
              <p className="font-editorial text-2xl italic leading-snug text-white md:text-[2rem] md:leading-[1.28]">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-7">
                <p className="text-base font-semibold text-white">{name}</p>
                <p className="text-sm text-lavender-300">{role}</p>
              </div>
              {illustrative && (
                <p className="mt-6 text-xs text-indigo-300/80">
                  Illustrative — to be attributed to a named Qatar Airways leader.
                </p>
              )}
            </Reveal>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src={image}
              alt={imageAlt || ""}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover ${imagePosition}`}
            />
            {/* blend the photo's inner edge into the quote panel */}
            <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-indigo-950 to-transparent lg:block" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-indigo-950/80 to-transparent lg:hidden" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-indigo-950 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="bg-iris mx-auto mb-8 h-12 w-12 rounded-pill" aria-hidden />
          <p className="font-editorial text-2xl italic leading-snug text-white md:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-7">
            <p className="text-base font-semibold text-white">{name}</p>
            <p className="text-sm text-lavender-300">{role}</p>
          </div>
          {illustrative && (
            <p className="mt-6 text-xs text-indigo-400">
              Illustrative — to be attributed to a named Qatar Airways leader.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
