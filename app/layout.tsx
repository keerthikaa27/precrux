import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precrux.com"),

  title: {
    default: "Precrux | Growth Execution Accelerator for Founders",
    template: "%s | Precrux",
  },

  description:
    "Precrux helps ambitious founders scale with high-performance growth systems that drive predictable, compounding revenue.",

  keywords: [
  "startup growth consulting",
  "growth marketing agency for startups",
  "DTC growth agency",
  "ecommerce growth agency",
  "Shopify growth agency",
  "startup SEO agency",
  "ecommerce CRO agency",
  "performance marketing agency for ecommerce",
  "growth execution accelerator",

  "fashion startup accelerator",
  "fashion startup accelerator India",
  "startup accelerator for fashion brands",
  "fashion growth consulting",
  "D2C fashion growth consulting",
  "fashion growth consulting India",

  "startup growth consulting India",
  "Shopify SEO agency India",

  "startup growth consulting Australia",
  "DTC growth agency Australia",
  "performance marketing agency for ecommerce Australia",

  "startup growth consulting USA",
  "ecommerce growth agency USA",
  "Shopify growth agency USA",
  "marketing attribution consulting USA",

  "startup growth consulting UK",
  "fashion growth consulting UK",
  "ecommerce growth agency UK",
  "Shopify SEO agency UK"
],

  authors: [{ name: "Precrux" }],
  creator: "Precrux",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Precrux | The Growth Execution Accelerator",
    description:
      "We build high-performance growth systems that deliver predictable revenue growth.",
    url: "https://precrux.com",
    siteName: "Precrux",
    images: [
      {
        url: "https://precrux.com/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Precrux | Growth Execution Accelerator",
    description:
      "Helping founders scale with predictable growth systems.",
    images: ["https://precrux.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
  canonical: "https://precrux.com",
},
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-HPK3L40VCZ"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HPK3L40VCZ');
  `}
</Script>

<Script id="org-schema" type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Precrux",
  "url": "https://precrux.com",
  "logo": "https://precrux.com/logoo.png",
  "sameAs": [
    "https://www.linkedin.com/company/precrux"
  ]
}
`}
</Script>
    <link rel="preload" as="image" href="/logoo.png" />
    <link rel="preload" as="image" href="/download.png" />
  </head>
      <body className={`${urbanist.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        <Navbar />
        <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
  <img
  src="/logoo.png"
  alt=""
  fetchPriority="high"
  decoding="async"
/>
  <img
  src="/download.png"
  alt=""
  fetchPriority="high"
  decoding="async"
/>
</div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
