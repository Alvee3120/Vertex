import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Secure360 } from "@/components/sections/secure360";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { WhyVertex } from "@/components/sections/why-vertex";
import { Clients } from "@/components/sections/clients";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <Secure360 />
      <IndustriesGrid />
      <WhyVertex />
      <Clients />
      <CtaBanner />
    </>
  );
}
