import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { PageHero, SectionKicker } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, industryServiceJsonLd } from "@/lib/json-ld";
import { industrySolutions } from "@/lib/data";
import bankingHero from "@/public/images/solutions/banking-hero.jpg";
import healthcareHero from "@/public/images/solutions/healthcare-hero.jpg";
import embassiesHero from "@/public/images/solutions/embassies-hero.jpg";
import energyHero from "@/public/images/solutions/energy-hero.jpg";

const solutionImages: Record<string, { src: StaticImageData; alt: string }> = {
  banking: { src: bankingHero, alt: "Banking facility security operations" },
  healthcare: { src: healthcareHero, alt: "Healthcare facility security operations" },
  embassies: { src: embassiesHero, alt: "Embassy and diplomatic security operations" },
  energy: { src: energyHero, alt: "Power and energy infrastructure security" },
};

export function generateStaticParams() {
  return industrySolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = industrySolutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.name} Security Solutions`,
      description: solution.description,
      url: `/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = industrySolutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <JsonLd
        data={[
          industryServiceJsonLd(solution),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ]),
        ]}
      />
      <PageHero
        kicker="Our Solutions"
        title={solution.tagline}
        description={solution.description}
      />

      {solutionImages[solution.slug] && (
        <section className="bg-white pt-2 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="relative aspect-video w-full overflow-hidden border border-border bg-offwhite shadow-sm">
                <Image
                  src={solutionImages[solution.slug].src}
                  alt={solutionImages[solution.slug].alt}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionKicker>What We Offer</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Security Solutions for {solution.name}
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.services.map((service, i) => {
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
