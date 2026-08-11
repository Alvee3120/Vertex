import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  description,
  children,
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-navy via-navy-deep to-navy-black py-24 sm:py-28",
        className
      )}
    >
      <div className="bg-grid-lines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {kicker && <SectionKicker>{kicker}</SectionKicker>}
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionKicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-heading inline-block text-base font-bold tracking-[0.3em] text-red uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
