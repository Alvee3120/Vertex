import type { Metadata } from "next";
import Image from "next/image";
import { Shirt } from "lucide-react";
import { PageHero, SectionKicker } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, rmgServiceJsonLd } from "@/lib/json-ld";
import { rmgServices } from "@/lib/data";

const description =
  "Specialized security and compliance solutions for Bangladesh's Ready-Made Garment industry — C-TPAT awareness, supply chain security, factory assessments, fire safety, and more.";

export const metadata: Metadata = {
  title: "RMG Security Solutions",
  description,
  alternates: { canonical: "/rmg-solutions" },
  openGraph: {
    title: "RMG Security & Compliance Solutions",
    description,
    url: "/rmg-solutions",
  },
};

export default function RmgSolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          rmgServiceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "RMG Solutions", path: "/rmg-solutions" },
          ]),
        ]}
      />
      <PageHero
        kicker="Specialized Vertical"
        title="RMG Security & Compliance Solutions"
        description="Purpose-built security and compliance support for Bangladesh's Ready-Made Garment industry, aligned to international buyer and audit requirements."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-navy/80 uppercase">
          <Shirt className="size-3.5 text-red" />
          Serving Factories, Exporters &amp; Supply Chain Partners
        </div>
      </PageHero>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <FadeIn className="mx-auto max-w-3xl lg:mx-0 lg:text-left">
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

            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-offwhite shadow-sm">
                <Image
                  src="/images/rmg-factory-floor.jpg"
                  alt="Bangladeshi ready-made garment factory production line"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

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

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[16/6] w-full overflow-hidden border border-border bg-white shadow-sm">
              <Image
                src="/images/rmg-cargo-inspection.jpg"
                alt="Container security inspection at port"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
