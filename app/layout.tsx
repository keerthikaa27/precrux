import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Precrux | The Growth Execution Accelerator",
    template: "%s | Precrux",
  },

  description:
    "Precrux helps ambitious founders scale with high-performance growth systems that drive predictable, compounding revenue.",

  keywords: [
    "growth consultancy",
    "startup growth",
    "scaling startups",
    "growth systems",
    "business consulting",
    "founder growth strategy",
  ],

  authors: [{ name: "Precrux" }],
  creator: "Precrux",

  icons: {
    icon: "/P.svg",
  },

  openGraph: {
    title: "Precrux | The Growth Execution Accelerator",
    description:
      "We build high-performance growth systems that deliver predictable revenue growth.",
    url: "https://precrux.com",
    siteName: "Precrux",
    images: [
      {
        url: "/og-image.png", 
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
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
    <link rel="preload" as="image" href="/logoo.png" />
    <link rel="preload" as="image" href="/download.png" />
  </head>
      <body className={`${urbanist.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        <Navbar />
        <div style={{ display: "none" }}>
  <img src="/logoo.png" alt="" />
  <img src="/download.png" alt="" />
</div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
