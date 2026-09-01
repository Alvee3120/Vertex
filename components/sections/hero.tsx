"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#ECEEF1" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 70% 50%, rgba(167,139,250,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(200,245,66,0.06) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,42,58,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,58,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-36 lg:px-8">
        <div className="flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-navy/80 uppercase backdrop-blur"
          >
            <ShieldCheck className="size-3.5 text-red" />
            42+ Years of Risk Management Knowledge
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-8 max-w-4xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-foreground uppercase sm:text-6xl"
          >
            We Don&rsquo;t Provide Security Only.
            <br />
            <span className="text-red">We Enhance Protection Capability.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-2xl font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Vertex Security Solutions partners with organizations across Bangladesh
            to train personnel, manage risk, and include technology that protects
            people, assets, and reputation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="h-12 gap-2 bg-red px-7 text-base text-white uppercase tracking-wide hover:bg-red-dark"
            >
              Request a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 border-navy/25 bg-transparent px-7 text-base text-navy uppercase tracking-wide hover:bg-navy/5 hover:text-navy"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}