import { trustBadges } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="font-heading text-3xl font-extrabold text-navy">
              42+ <span className="text-lg font-bold text-steel">Years Experience</span>
            </p>
          </div>
          <div className="hidden h-10 w-px bg-border lg:block" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 lg:justify-end">
            {trustBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-red">&bull;</span>}
                <span className="text-sm font-semibold tracking-wide text-steel uppercase">
                  {badge}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
