import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";
import { cn } from "@/lib/utils";
import { ourSolutions } from "@/lib/data";

const iconStyles = [
  "bg-navy text-white",
  "bg-red text-white",
  "bg-amber-500 text-white",
  "bg-emerald-600 text-white",
  "bg-sky-600 text-white",
  "bg-violet-600 text-white",
  "bg-rose-600 text-white",
  "bg-teal-600 text-white",
];

export function IndustriesGrid({
  showAll = false,
  showHeading = true,
}: {
  showAll?: boolean;
  showHeading?: boolean;
}) {
  const list = showAll ? ourSolutions : ourSolutions.slice(0, 8);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionKicker>Who We Serve</SectionKicker>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
              Industries We Covered
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
          {list.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <FadeIn key={solution.slug} delay={i * 0.04}>
                <Link
                  href={solution.href}
                  className="flex h-full flex-col items-center gap-4 border border-border bg-offwhite px-4 py-8 text-center transition-colors hover:border-navy/30 hover:bg-white"
                >
                  <div
                    className={cn(
                      "flex size-16 items-center justify-center rounded-full shadow-md",
                      iconStyles[i % iconStyles.length]
                    )}
                  >
                    <Icon className="size-8" />
                  </div>
                  <p className="text-sm leading-snug font-semibold text-navy">
                    {solution.name}
                  </p>
                </Link>
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
