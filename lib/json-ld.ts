import {
  siteConfig,
  contactInfo,
  serviceCategories,
  industrySolutions,
  rmgServices,
  type ServiceCategory,
  type IndustrySolution,
} from "@/lib/data";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: contactInfo.email,
    telephone: contactInfo.phoneHref,
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    founder: {
      "@type": "Person",
      name: contactInfo.name,
      jobTitle: contactInfo.title,
    },
    knowsAbout: serviceCategories.map((category) => category.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security Services",
      itemListElement: serviceCategories.map((category) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: category.title,
          description: category.summary,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contactInfo.name,
    jobTitle: contactInfo.title,
    email: contactInfo.email,
    telephone: contactInfo.phoneHref,
    worksFor: { "@id": ORGANIZATION_ID },
    affiliation: { "@id": ORGANIZATION_ID },
    description:
      "Founder & Principal Security Consultant with 42+ years of leadership experience across the Bangladesh Army, United Nations Peacekeeping Missions, the U.S. Embassy in Dhaka, and G4S Bangladesh.",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceCategoryJsonLd(category: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.summary,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Bangladesh" },
    serviceType: category.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: category.title,
      itemListElement: category.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function industryServiceJsonLd(solution: IndustrySolution) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.tagline,
    description: solution.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Bangladesh" },
    audience: {
      "@type": "Audience",
      audienceType: solution.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: solution.tagline,
      itemListElement: solution.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function industriesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Vertex Security Solutions Serves",
    itemListElement: industrySolutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: solution.name,
      url: `${siteConfig.url}/solutions/${solution.slug}`,
    })),
  };
}

export function rmgServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RMG Security & Compliance Solutions",
    description:
      "Specialized security and compliance solutions for Bangladesh's Ready-Made Garment industry, aligned to international buyer and audit requirements.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Bangladesh" },
    audience: {
      "@type": "Audience",
      audienceType: "Ready-Made Garment (RMG) Factories & Exporters",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RMG Security Services",
      itemListElement: rmgServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Vertex Security Solutions",
    url: `${siteConfig.url}/contact`,
    about: { "@id": ORGANIZATION_ID },
    mainEntity: {
      "@type": "ProfessionalService",
      "@id": ORGANIZATION_ID,
      name: siteConfig.name,
      email: contactInfo.email,
      telephone: contactInfo.phoneHref,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
  };
}
