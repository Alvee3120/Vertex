import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { siteConfig, contactInfo, navLinks, serviceCategories } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark className="h-11 w-auto shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-2xl font-extrabold tracking-tight text-white uppercase">
                  Vertex
                </span>
                <span className="font-heading -mt-0.5 text-[0.62rem] font-bold tracking-[0.22em] text-red uppercase">
                  Security Solutions
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60 italic">{siteConfig.slogan}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.brandPromise}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vertex Security Solutions on LinkedIn"
                className="flex size-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-red hover:text-red"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white/50 uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white/50 uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services#${cat.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/rmg-solutions"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  RMG Security Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.2em] text-white/50 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="leading-relaxed">
                {contactInfo.name}
                <br />
                <span className="text-white/50">{contactInfo.title}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-red" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-red" />
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-red" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} Vertex Security Solutions. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            All inquiries are handled with strict confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
}
