import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";
import { homepageServiceCards } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionKicker>What We Do</SectionKicker>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Four Pillars of Security Capability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel">
            From frontline training to strategic risk consultancy, technology
            advisory, and executive protection — every service is built to
            strengthen your organization&rsquo;s resilience.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homepageServiceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.slug} delay={i * 0.08}>
                <Link
                  href={`/services#${card.slug}`}
                  className="group relative flex h-full flex-col border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl"
                >
                  <span className="absolute top-0 left-0 h-1 w-0 bg-red transition-all duration-300 group-hover:w-full" />
                  <div className="flex size-12 items-center justify-center rounded-md bg-navy text-white transition-colors group-hover:bg-red">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-navy uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
