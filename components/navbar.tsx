"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SolutionsMenu } from "@/components/solutions-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { navLinks, ourSolutions } from "@/lib/data";
import { cn } from "@/lib/utils";

const hiddenFromHeader = ["/rmg-solutions", "/industries"];
const headerLinks = navLinks.filter((link) => !hiddenFromHeader.includes(link.href));

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const solutionsActive = pathname.startsWith("/solutions") || pathname.startsWith("/rmg-solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85"
          : "border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {headerLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors",
                    active ? "text-navy" : "text-steel hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
                {link.href === "/services" && <SolutionsMenu active={solutionsActive} />}
              </span>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="bg-red text-white uppercase tracking-wide hover:bg-red-dark"
            size="lg"
          >
            Get a Free Consultation
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileNav key={pathname} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="outline"
        size="icon"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Button>
      <SheetContent side="right" className="w-[85%] p-0">
        <SheetHeader className="border-b border-border">
          <Logo />
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">Main navigation</SheetDescription>
        </SheetHeader>
        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-4">
          {headerLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-semibold tracking-wide uppercase transition-colors",
                    active
                      ? "bg-accent text-navy"
                      : "text-steel hover:bg-accent hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
                {link.href === "/services" && (
                  <Accordion>
                    <AccordionItem value="our-solutions" className="border-none">
                      <AccordionTrigger className="rounded-md px-3 py-3 font-sans text-base font-semibold tracking-wide text-steel uppercase hover:bg-accent hover:text-navy hover:no-underline">
                        Our Solutions
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1 pb-1 pl-3 [&_a]:no-underline">
                        {ourSolutions.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.href}
                            className="rounded-md px-3 py-2 text-sm font-semibold tracking-wide text-steel uppercase transition-colors hover:bg-accent hover:text-navy"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            );
          })}
        </nav>
        <div className="mt-auto p-4">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="w-full bg-red text-white uppercase tracking-wide hover:bg-red-dark"
            size="lg"
          >
            Get a Free Consultation
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
