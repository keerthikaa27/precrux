import type { Metadata } from "next";
import RevenueEngineClient from "./RevenueEngineClient";

export const metadata = {
  title: "Revenue Engine | Paid Ads, CRO & Scaling System | Precrux",

  description:
    "A complete revenue growth system combining CRO, paid advertising, email marketing, and attribution. Scale predictably with Precrux.",

  keywords: [
    "revenue growth system",
    "paid ads scaling",
    "conversion rate optimization",
    "email marketing systems",
    "DTC scaling",
    "Shopify growth"
  ],

  openGraph: {
    title: "Revenue Engine | Precrux",
    description:
      "Scale predictably with a complete paid ads, CRO, and revenue system.",
    url: "https://precrux.com/services/revenue-engine",
    siteName: "Precrux",
    images: [
      {
        url: "/services/revenue-engine.jpeg",
        width: 1200,
        height: 630,
        alt: "Revenue Engine by Precrux",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Revenue Engine | Precrux",
    description:
      "Paid ads, CRO, and full revenue system for predictable scaling.",
    images: ["/services/revenue-engine.jpeg"],
  },

  alternates: {
    canonical: "https://precrux.com/services/revenue-engine",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page(){
  return <RevenueEngineClient/>
}