import type { Metadata } from "next";
import TractionAcceleratorClient from "./TractionAcceleratorClient";

export const metadata = {
  title: "Traction Accelerator | 90-Day SEO Growth System | Precrux",

  description:
    "A 90-day SEO and growth program to fix technical issues, improve conversions, and drive fast traffic gains for DTC and Shopify brands.",

  keywords: [
    "SEO growth system",
    "90 day SEO program",
    "conversion optimization",
    "technical SEO fixes",
    "DTC growth",
    "Shopify SEO"
  ],

  openGraph: {
    title: "Traction Accelerator | Precrux",
    description:
      "Fix SEO, conversions, and performance bottlenecks in just 90 days.",
    url: "https://precrux.com/services/traction-accelerator",
    siteName: "Precrux",
    images: [
      {
        url: "/services/traction-accelerator.jpeg",
        width: 1200,
        height: 630,
        alt: "Traction Accelerator by Precrux",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Traction Accelerator | Precrux",
    description:
      "90-day SEO and growth system for fast, measurable results.",
    images: ["/services/traction-accelerator.jpeg"],
  },

  alternates: {
    canonical: "https://precrux.com/services/traction-accelerator",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page(){
  return <TractionAcceleratorClient/>
}