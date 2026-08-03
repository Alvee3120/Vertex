import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";
import { secure360Steps } from "@/lib/data";

export function Secure360() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-black via-navy-deep to-navy py-24">
      <div className="bg-grid-lines-dense pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionKicker>Our Methodology</SectionKicker>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
            The Vertex Secure360 Approach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Every assignment follows our structured six-step methodology —
            practical, measurable, sustainable, and aligned to your operational
            objectives.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {secure360Steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.07}>
              <div className="flex h-full flex-col border border-white/10 border-t-2 border-t-red bg-white/[0.04] p-6 backdrop-blur-sm">
                <span className="font-heading text-4xl font-extrabold text-white/15">
                  {String(s.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold tracking-wide text-white uppercase">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
