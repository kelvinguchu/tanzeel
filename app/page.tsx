import {
  Header,
  Hero,
  About,
  Services,
  Fleet,
  Coverage,
  Contact,
  Footer,
} from "@/components/landing";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TransportCompany",
  name: "Tanzeel Logistics Ltd",
  alternateName: "Tanzeel Transporters",
  url: "https://tanzeellogistics.com",
  logo: "https://tanzeellogistics.com/logo.png",
  image: "https://tanzeellogistics.com/og-image.png",
  description:
    "Leading transport company specializing in mineral and cargo transportation across Kenya, Uganda, Tanzania, Ethiopia, South Sudan, Sudan, and DR Congo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kampala Road",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.2921,
    longitude: 36.8219,
  },
  telephone: ["+254759888333", "+254759999666"],
  email: "info@tanzeellogistics.com",
  foundingDate: "2014",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 100,
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Uganda" },
    { "@type": "Country", name: "Tanzania" },
    { "@type": "Country", name: "Ethiopia" },
    { "@type": "Country", name: "South Sudan" },
    { "@type": "Country", name: "Sudan" },
    { "@type": "Country", name: "Democratic Republic of the Congo" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transport Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mineral Transportation",
          description:
            "Iron ore, gypsum, coal, and clinker from mining sites to processing plants.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ship Shunting",
          description:
            "Bulk cargo movement directly from ships at port to factories.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Container Haulage",
          description:
            "20ft and 40ft container transport with flat body and skeleton trailers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Heavy Machinery Transport",
          description:
            "Specialized transport for bulldozers and construction equipment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehousing",
          description: "Secure storage solutions on dedicated or shared basis.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Supply Chain Management",
          description:
            "End-to-end logistics including procurement and material handling.",
        },
      },
    ],
  },
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen'>
        <Header />
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Coverage />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
