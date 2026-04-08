import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Precrux - The Growth Execution Accelerator for Ambitious Founders Worldwide",
  description: "The Growth Execution Accelerator for Ambitious Founders Worldwide. We build high-performance growth systems that deliver predictable, compounding revenue results.",
  icons: {
    icon: "/P.svg",
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
