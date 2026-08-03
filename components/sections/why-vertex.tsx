import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { whyVertexPoints, contactInfo } from "@/lib/data";

export function WhyVertex() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionKicker>Why Vertex</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Led by Four Decades of Security Command
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel">
              Vertex Security Solutions is founded by{" "}
              <strong className="text-navy">{contactInfo.name}</strong>,{" "}
              {contactInfo.credentials}, who brings over 42 years of leadership
              experience across the Bangladesh Army, United Nations Peacekeeping
              Missions, the U.S. Embassy in Dhaka as Mission Security Manager, and
              senior leadership roles at G4S Bangladesh.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<Link href="/about" />}
                nativeButton={false}
                className="gap-2 bg-navy text-white uppercase tracking-wide hover:bg-navy/90"
              >
                Meet Our Leadership
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyVertexPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.title} delay={i * 0.08}>
                  <div className="h-full border-l-2 border-navy bg-white p-6 shadow-sm">
                    <Icon className="size-6 text-red" />
                    <h3 className="mt-4 font-heading text-base font-bold tracking-wide text-navy uppercase">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {point.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
