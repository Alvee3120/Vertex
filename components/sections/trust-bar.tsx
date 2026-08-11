import { trustBadges } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-blue-light">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-6">
          <div className="text-center lg:text-left">
            <p className="font-heading text-4xl font-extrabold text-navy">42+</p>
            <p className="mt-1 text-xs font-bold tracking-[0.15em] text-steel uppercase sm:text-sm">
              Years of Risk Management Knowledge
            </p>
          </div>
          <div className="h-px w-16 bg-navy/15 lg:h-10 lg:w-px" />
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-navy/15 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-navy uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
