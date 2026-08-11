import { trustBadges } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-b border-navy-black bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-6">
          <div className="text-center lg:text-left">
            <p className="font-heading text-4xl font-extrabold text-white">42+</p>
            <p className="mt-1 text-xs font-bold tracking-[0.15em] text-white/70 uppercase sm:text-sm">
              Years of Risk Management Knowledge
            </p>
          </div>
          <div className="h-px w-16 bg-white/15 lg:h-10 lg:w-px" />
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase"
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
