"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff]">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-36 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-navy/80 uppercase backdrop-blur"
        >
          <ShieldCheck className="size-3.5 text-red" />
          42+ Years of Security Leadership
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-8 max-w-4xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-foreground uppercase sm:text-6xl"
        >
          We Don&rsquo;t Provide Security.
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
    </section>
  );
}
