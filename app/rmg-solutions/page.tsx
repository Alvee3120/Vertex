import type { Metadata } from "next";
import { Shirt } from "lucide-react";
import { PageHero, SectionKicker } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { CtaBanner } from "@/components/sections/cta-banner";
import { rmgServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "RMG Security Solutions",
  description:
    "Specialized security and compliance solutions for Bangladesh's Ready-Made Garment industry — C-TPAT awareness, supply chain security, factory assessments, fire safety, and more.",
};

export default function RmgSolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Specialized Vertical"
        title="RMG Security & Compliance Solutions"
        description="Purpose-built security and compliance support for Bangladesh's Ready-Made Garment industry, aligned to international buyer and audit requirements."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-white/80 uppercase">
          <Shirt className="size-3.5 text-red" />
          Serving Factories, Exporters &amp; Supply Chain Partners
        </div>
      </PageHero>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionKicker>Why It Matters</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Security Compliance Built for the RMG Sector
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel">
              Ready-Made Garment manufacturers face unique security and
              compliance demands — from buyer audits and C-TPAT expectations
              to fire safety, supply chain integrity, and workforce safety.
              Vertex provides specialized training, assessments, and advisory
              support to help RMG facilities meet these requirements with
              confidence.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rmgServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.05}>
                  <div className="group flex h-full flex-col gap-4 border border-border bg-offwhite p-6 transition-colors hover:border-navy/20 hover:bg-white hover:shadow-lg">
                    <div className="flex size-11 items-center justify-center rounded-md bg-navy text-white transition-colors group-hover:bg-red">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold tracking-tight text-navy uppercase">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
