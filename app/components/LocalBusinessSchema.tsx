const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Gemini Lane",
  url: "https://www.gemini-lane.com",
  email: "info@gemini-lane.com",
  description:
    "AI automation, workflow optimization, custom dashboards, and operations consulting for small to mid-sized businesses in Frederick, MD and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frederick",
    addressRegion: "MD",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", "name": "Frederick, Maryland" },
    { "@type": "AdministrativeArea", "name": "Frederick County, Maryland" },
    { "@type": "AdministrativeArea", "name": "Montgomery County, Maryland" },
    { "@type": "AdministrativeArea", "name": "Howard County, Maryland" },
    { "@type": "AdministrativeArea", "name": "Carroll County, Maryland" },
    { "@type": "AdministrativeArea", "name": "Washington County, Maryland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
          description:
            "Turn repetitive manual work into automated systems that run in the background.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Optimization",
          description:
            "Eliminate bottlenecks and streamline operations to free up 10–30 hours per week.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Project Dashboard Design",
          description:
            "Custom dashboards in Notion, Airtable, ClickUp, or Google Workspace for full business visibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations Consulting",
          description:
            "Build repeatable systems and SOPs so the business runs consistently without depending on memory.",
        },
      },
    ],
  },
  knowsAbout: [
    "AI automation for small businesses",
    "workflow optimization",
    "business operations consulting",
    "project management dashboards",
    "lead follow-up automation",
    "Notion",
    "Airtable",
    "ClickUp",
    "Zapier",
    "Make",
  ],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
