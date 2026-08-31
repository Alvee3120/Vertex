import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, industriesItemListJsonLd } from "@/lib/json-ld";

const description =
  "Vertex Security Solutions serves RMG factories, banks, hospitals, embassies, multinational companies, and more across Bangladesh with tailored security solutions.";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description,
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries Vertex Security Solutions Serves",
    description,
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          industriesItemListJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />
      <PageHero
        kicker="Who We Serve"
        title="Industries We Covered"
        description="Every sector faces a different risk profile. We tailor training, consultancy, and technology solutions to your industry's specific operational and compliance requirements."
      />
      <IndustriesGrid showAll showHeading={false} />
      <CtaBanner />
    </>
  );
}
