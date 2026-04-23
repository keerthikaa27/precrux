import type { Metadata } from "next";
import ModularBuilderClient from "./ModularBuilderClient";


export const metadata = {
  title: "Modular Growth Systems | SEO & Paid Execution | Precrux",

  description:
    "Flexible 30–90 day growth execution modules including SEO, paid campaigns, CRO, and social media systems. Get targeted results fast with Precrux.",

  keywords: [
    "modular growth systems",
    "SEO services",
    "paid ads management",
    "conversion rate optimization",
    "growth marketing",
    "short term growth execution"
  ],

  openGraph: {
    title: "Modular Growth Systems | Precrux",
    description:
      "Flexible growth execution across SEO, paid ads, CRO, and social systems.",
    url: "https://precrux.com/services/modular-growth",
    siteName: "Precrux",
    images: [
      {
        url: "/services/modular-systems.jpeg",
        width: 1200,
        height: 630,
        alt: "Modular Growth Systems by Precrux",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Growth Systems | Precrux",
    description:
      "Targeted 30–90 day growth modules for fast execution.",
    images: ["/services/modular-systems.jpeg"],
  },

  alternates: {
    canonical: "https://precrux.com/services/modular-growth",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ModularBuilderClient />;
}