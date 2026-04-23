import type { Metadata } from "next";
import AuthorityBuilderClient from "./AuthorityBuilderClient";


export const metadata = {
  title: "Authority Builder | SEO & Content Growth System | Precrux",
  description:
    "6-month SEO and content authority system for founder-led brands. Build compounding organic growth and long-term authority with Precrux.",
  
  keywords: [
    "SEO services",
    "content marketing",
    "authority building",
    "DTC growth",
    "Shopify SEO",
    "organic growth system"
  ],

  openGraph: {
    title: "Authority Builder | SEO & Content Growth System | Precrux",
    description:
      "Build a compounding authority engine with SEO, content, and growth systems.",
    url: "https://precrux.com/services/authority-builder",
    siteName: "Precrux",
    images: [
      {
        url: "/services/authority-builder.jpeg",
        width: 1200,
        height: 630,
        alt: "Authority Builder by Precrux",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Authority Builder | SEO & Content Growth System | Precrux",
    description:
      "6-month SEO + content authority system for scalable growth.",
    images: ["/services/authority-builder.jpeg"],
  },
};

export default function Page() {
  return <AuthorityBuilderClient />;
}