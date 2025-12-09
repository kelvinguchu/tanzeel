import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://tanzeellogistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tanzeel Logistics | Reliable Cargo & Mineral Transport Across East Africa",
    template: "%s | Tanzeel Logistics",
  },
  description:
    "Tanzeel Logistics is a leading transport company specializing in mineral and cargo transportation across Kenya, Uganda, Tanzania, Rwanda, Burundi, Ethiopia, South Sudan, Sudan, and DR Congo. Fleet of 100+ trucks, 10+ years experience. Safe, reliable, and timely delivery guaranteed.",
  keywords: [
    "transport company Kenya",
    "cargo transport East Africa",
    "mineral transportation",
    "iron ore transport",
    "logistics Kenya",
    "trucking services",
    "container haulage",
    "heavy machinery transport",
    "ship shunting Mombasa",
    "freight forwarding",
    "supply chain Kenya",
    "cross-border transport",
    "Uganda transport",
    "Tanzania logistics",
    "Ethiopia cargo",
    "South Sudan transport",
    "DR Congo logistics",
    "warehousing Kenya",
    "Nairobi transport company",
    "Mombasa port logistics",
  ],
  authors: [{ name: "Tanzeel Logistics Ltd" }],
  creator: "Tanzeel Logistics Ltd",
  publisher: "Tanzeel Logistics Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Tanzeel Logistics",
    title:
      "Tanzeel Logistics | Reliable Cargo & Mineral Transport Across East Africa",
    description:
      "Leading transport company with 100+ trucks specializing in mineral and cargo transportation across 9 East African countries. Safe, reliable, and timely delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanzeel Logistics - Cargo & Mineral Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzeel Logistics | Cargo & Mineral Transport East Africa",
    description:
      "Leading transport company with 100+ trucks. Mineral and cargo transportation across Kenya, Uganda, Tanzania, Rwanda, Burundi, Ethiopia, South Sudan, Sudan & DR Congo.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Transportation & Logistics",
};

export const viewport: Viewport = {
  themeColor: "#062861",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href={siteUrl} />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
