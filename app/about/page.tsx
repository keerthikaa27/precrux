import type { Metadata } from "next";
import About from "./About";


export const metadata = {
  title: "About Precrux | Growth Execution for Founders",

  description:
    "Precrux is a growth execution partner for founder-led brands. We build SEO, CRO, and revenue systems that turn messy traction into predictable growth.",

  keywords: [
    "about Precrux",
    "growth execution agency",
    "SEO and CRO experts",
    "DTC growth partner",
    "Shopify growth systems",
    "founder-led brand growth"
  ],

  openGraph: {
    title: "About Precrux | Growth Execution for Founders",
    description:
      "We build growth systems that turn messy traction into predictable revenue.",
    url: "https://precrux.com/about",
    siteName: "Precrux",
    images: [
      {
        url: "/aboutus/about1.jpeg",
        width: 1200,
        height: 630,
        alt: "Precrux Team",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Precrux",
    description:
      "Growth execution partner for founder-led brands.",
    images: ["/aboutus/about1.jpeg"],
  },

  alternates: {
    canonical: "https://precrux.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <About />;
}