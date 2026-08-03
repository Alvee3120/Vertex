"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors",
                  active ? "text-navy" : "text-steel hover:text-navy"
                )}
              >
                {link.label}
              </Link>
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
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-semibold tracking-wide uppercase transition-colors",
                  active
                    ? "bg-accent text-navy"
                    : "text-steel hover:bg-accent hover:text-navy"
                )}
              >
                {link.label}
              </Link>
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
