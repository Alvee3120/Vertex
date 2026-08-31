import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vertex Security Solutions | Security Training, Risk Consultancy & Technology",
    template: "%s | Vertex Security Solutions",
  },
  description:
    "Vertex Security Solutions is a Bangladesh-based Security Training, Risk Consultancy, and Security Technology firm. We don't simply provide security — we build security capability.",
  keywords: [
    "security training Bangladesh",
    "security risk consultancy",
    "executive protection Bangladesh",
    "RMG security compliance",
    "security audit",
    "Vertex Security Solutions",
  ],
  metadataBase: new URL("https://vertexsecuritysolutions.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Vertex Security Solutions",
    description:
      "Security Training • Risk Consultancy • Security Technology. Protecting People, Assets, Reputation.",
    siteName: "Vertex Security Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  category: "Security Services",
};

export const viewport: Viewport = {
  themeColor: "#023880",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body
        className="flex min-h-screen flex-col bg-offwhite font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" theme="light" />
      </body>
    </html>
  );
}
