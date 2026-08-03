import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Vertex Security Solutions serves RMG factories, banks, hospitals, embassies, multinational companies, and more across Bangladesh with tailored security solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Who We Serve"
        title="Industries We Protect"
        description="Every sector faces a different risk profile. We tailor training, consultancy, and technology solutions to your industry's specific operational and compliance requirements."
      />
      <IndustriesGrid showAll showHeading={false} />
      <CtaBanner />
    </>
  );
}
