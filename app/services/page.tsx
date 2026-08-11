import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionKicker } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { serviceCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vertex Security Solutions' service pillars: Professional Security Training, Security Risk Consultancy, Security Technology, Executive Protection, and Background Screening.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="What We Offer"
        title="Comprehensive Security Solutions"
        description="Integrated service pillars — training, consultancy, technology, protection, and screening — designed to build lasting security capability."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Accordion
            multiple
            defaultValue={serviceCategories.map((c) => c.slug)}
            className="space-y-6"
          >
            {serviceCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <FadeIn key={category.slug} delay={i * 0.06}>
                  <AccordionItem
                    id={category.slug}
                    value={category.slug}
                    className="scroll-mt-28 border border-border bg-offwhite"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline sm:px-8">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl font-bold tracking-tight text-navy uppercase sm:text-2xl">
                            {category.title}
                          </h2>
                          <p className="mt-1 text-sm text-steel">
                            {`${category.items.length} specialized programmes & services`}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8 sm:px-8">
                      <p className="max-w-3xl border-t border-border pt-6 text-sm leading-relaxed text-steel">
                        {category.summary}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red" />
                            <span className="text-sm text-navy/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              );
            })}
          </Accordion>

          <FadeIn>
            <div className="mt-14 flex flex-col items-center gap-4 border border-navy/15 bg-blue-light p-10 text-center">
              <h3 className="font-heading text-2xl font-extrabold tracking-tight text-navy uppercase">
                Not Sure Which Service Fits Your Needs?
              </h3>
              <p className="max-w-xl text-sm text-steel">
                Speak with our Principal Security Consultant for a tailored
                recommendation based on your organization&rsquo;s risk profile.
              </p>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
                className="mt-2 gap-2 bg-red text-white uppercase tracking-wide hover:bg-red-dark"
              >
                Request a Consultation
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionKicker>Specialized</SectionKicker>
          <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-navy uppercase sm:text-3xl">
            Also Serving the RMG Sector
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-steel">
            Vertex provides a dedicated suite of security and compliance
            solutions for Ready-Made Garment manufacturers and exporters.
          </p>
          <Button
            render={<Link href="/rmg-solutions" />}
            nativeButton={false}
            variant="outline"
            className="mt-6 gap-2 border-navy text-navy uppercase tracking-wide hover:bg-navy hover:text-white"
          >
            View RMG Security Solutions
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
