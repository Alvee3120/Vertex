import type { Metadata } from "next";
import { Target, Compass, Quote } from "lucide-react";
import { PageHero, SectionKicker } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { Timeline } from "@/components/timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  companyStory,
  vision,
  mission,
  coreValues,
  careerTimeline,
  contactInfo,
  siteConfig,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vertex Security Solutions, our vision, mission, core values, and the leadership of Major Khalil Ahmed Khan (Retd), Founder & Principal Security Consultant.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Vertex"
        title="Building Bangladesh's Most Trusted Security Capability"
        description={siteConfig.brandPromise}
      />

      {/* Company story */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <SectionKicker>Our Story</SectionKicker>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
                Security Capability, Not Just Security Services
              </h2>
              <div className="mt-6 space-y-5">
                {companyStory.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-steel">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="h-full border-l-2 border-navy bg-offwhite p-7">
                  <Target className="size-7 text-red" />
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-wide text-navy uppercase">
                    Vision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{vision}</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="h-full border-l-2 border-navy bg-offwhite p-7">
                  <Compass className="size-7 text-red" />
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-wide text-navy uppercase">
                    Mission
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{mission}</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.26}>
                <div className="h-full border-l-2 border-red bg-navy p-7 text-white">
                  <Quote className="size-7 text-red" />
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-wide uppercase">
                    Brand Promise
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 italic">
                    &ldquo;{siteConfig.brandPromise}&rdquo;
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-offwhite py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionKicker>What Drives Us</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col items-start gap-4 border border-border bg-white p-7">
                    <div className="flex size-12 items-center justify-center rounded-md bg-navy text-white">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold tracking-wide text-navy uppercase">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership profile */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionKicker>Leadership</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Founder &amp; Principal Security Consultant
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 border border-border bg-offwhite p-8 sm:p-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex size-28 items-center justify-center rounded-full bg-navy font-heading text-3xl font-extrabold text-white">
                  KAK
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-navy uppercase">
                  {contactInfo.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-red">
                  {contactInfo.credentials}
                </p>
                <p className="mt-3 text-sm text-steel">{contactInfo.title}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-steel">
                  Major Khalil Ahmed Khan brings over 42 years of leadership
                  experience in security management, administration, operations,
                  training, investigations, executive protection, and risk
                  management.
                </p>
                <p className="mt-4 text-base leading-relaxed text-steel">
                  He has designed and delivered professional training programmes
                  for security guards, supervisors, and managers — including
                  Bangladesh Army personnel at Rooppur Nuclear Power Plant — while
                  advising organizations on security operations, risk management,
                  compliance, executive protection, and organizational resilience.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mx-auto mt-16 max-w-3xl">
            <Timeline entries={careerTimeline} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
