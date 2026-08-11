import type { Metadata } from "next";
import { Mail, Phone, MapPin, ShieldCheck, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vertex Security Solutions for a confidential consultation on security training, risk consultancy, or security technology.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Request a Confidential Consultation"
        description="Tell us about your organization's security needs. Our Principal Security Consultant will personally review every inquiry."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <div className="border border-border bg-offwhite p-6 sm:p-10">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy uppercase">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-steel">
                  Fields marked * are required. We typically respond within
                  one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="flex h-full flex-col justify-between gap-8 bg-blue-light p-8 text-navy sm:p-10">
                <div>
                  <h2 className="font-heading text-xl font-extrabold tracking-tight uppercase">
                    Contact Details
                  </h2>
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="font-heading text-base font-bold tracking-wide uppercase">
                        {contactInfo.name}
                      </p>
                      <p className="text-sm text-steel">{contactInfo.credentials}</p>
                      <p className="mt-1 text-sm text-steel">{contactInfo.title}</p>
                    </div>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-start gap-3 text-sm text-navy/80 hover:text-red"
                    >
                      <Mail className="mt-0.5 size-4 shrink-0 text-red" />
                      {contactInfo.email}
                    </a>
                    <a
                      href={`tel:${contactInfo.phoneHref}`}
                      className="flex items-start gap-3 text-sm text-navy/80 hover:text-red"
                    >
                      <Phone className="mt-0.5 size-4 shrink-0 text-red" />
                      {contactInfo.phone}
                    </a>
                    <div className="flex items-start gap-3 text-sm text-navy/80">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-red" />
                      {contactInfo.location}
                    </div>
                    <div className="flex items-start gap-3 text-sm text-navy/80">
                      <Clock className="mt-0.5 size-4 shrink-0 text-red" />
                      Sunday &ndash; Thursday, 9:00 AM &ndash; 6:00 PM
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy/15 pt-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-red" />
                    <p className="text-xs leading-relaxed text-steel">
                      All inquiries submitted through this website are handled
                      with strict confidentiality. Your information is used
                      solely to respond to your request and is never shared
                      with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
