import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-blue-light py-20">
      <div className="bg-grid-lines-navy pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red/10 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Ready to Build Your Security Capability?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-steel lg:mx-0">
            Speak with our Principal Security Consultant about training,
            risk consultancy, or technology solutions tailored to your
            organization.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="h-12 gap-2 bg-red px-7 text-base text-white uppercase tracking-wide hover:bg-red-dark"
          >
            Request a Consultation
            <ArrowRight className="size-4" />
          </Button>
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-red"
          >
            <Phone className="size-4 text-red" />
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
