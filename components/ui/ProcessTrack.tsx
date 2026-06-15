import { Reveal } from "./Reveal";

export type Step = { title: string; body: string };

export function ProcessTrack({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 0.06}
          className="relative rounded-xl border border-indigo-100 bg-white p-7"
        >
          <div className="bg-iris flex h-10 w-10 items-center justify-center rounded-pill font-display text-base font-semibold text-white">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-5 text-lg font-semibold text-indigo-800">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-500">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
