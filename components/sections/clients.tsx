import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { SectionKicker } from "@/components/page-hero";

export function Clients() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionKicker>Trusted By</SectionKicker>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Our Clients
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel">
            We&rsquo;re proud to support a growing roster of businesses,
            institutions, and organizations across Bangladesh.
          </p>
        </FadeIn>

        <FadeIn className="mt-10">
          <div className="relative aspect-[16/6] w-full overflow-hidden border border-border rounded-2xl bg-white">
            <Image
              src="/images/clients.jpeg"
              alt="Vertex clients and partners across Bangladesh"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
