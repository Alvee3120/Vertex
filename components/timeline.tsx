import { FadeIn } from "@/components/fade-in";
import type { TimelineEntry } from "@/lib/data";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[27px] w-px bg-border sm:left-[31px]" />
      <ol className="space-y-10">
        {entries.map((entry, i) => (
          <FadeIn key={entry.order} delay={i * 0.06}>
            <li className="relative flex gap-6 sm:gap-8">
              <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white sm:size-16">
                <span className="font-heading text-lg font-extrabold text-navy sm:text-xl">
                  {entry.order}
                </span>
              </div>
              <div className="flex-1 border border-border bg-white p-6 pt-5">
                <p className="font-heading text-xs font-bold tracking-[0.2em] text-red uppercase">
                  {entry.organization}
                </p>
                <h3 className="mt-1.5 font-heading text-lg font-bold tracking-tight text-navy uppercase sm:text-xl">
                  {entry.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {entry.description}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
  );
}
