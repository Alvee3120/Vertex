import { Building2 } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";

const placeholderClients = Array.from({ length: 8 });

export function Clients() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionKicker>Trusted By</SectionKicker>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Our Clients
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel">
            We&rsquo;re proud to support a growing roster of businesses,
            institutions, and organizations across Bangladesh.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {placeholderClients.map((_, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-border bg-white">
                <Building2 className="size-8 text-steel/30" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
