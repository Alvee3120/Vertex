import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/data";

export function IndustriesGrid({
  showAll = false,
  showHeading = true,
}: {
  showAll?: boolean;
  showHeading?: boolean;
}) {
  const list = showAll ? industries : industries.slice(0, 8);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionKicker>Who We Serve</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Industries We Protect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel">
              From RMG factories to embassies and financial institutions, we
              tailor every engagement to the client&rsquo;s operational and
              compliance requirements.
            </p>
          </FadeIn>
        )}

        <div
          className={cn(
            "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
            showHeading && "mt-14"
          )}
        >
          {list.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <FadeIn key={industry.name} delay={i * 0.04}>
                <div className="flex h-full flex-col items-center gap-3 border border-border bg-offwhite px-4 py-8 text-center transition-colors hover:border-navy/30 hover:bg-white">
                  <div className="flex size-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <Icon className="size-6" />
                  </div>
                  <p className="text-sm leading-snug font-semibold text-navy">
                    {industry.name}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-navy uppercase hover:text-red"
            >
              View All Industries We Serve
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
