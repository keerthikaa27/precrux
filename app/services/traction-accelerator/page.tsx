import type { Metadata } from "next";
import TractionAcceleratorClient from "./TractionAcceleratorClient";

export const metadata: Metadata = {
  title: "Traction Accelerator — 90-Day SEO & Growth System",
  description:
    "Fix SEO, conversions, and growth bottlenecks in 90 days. Precrux’s Traction Accelerator helps DTC and Shopify brands gain traffic, improve conversions, and build a strong growth foundation.",
  alternates: {
    canonical: "https://precrux.com/services/traction-accelerator",
  },
};

export default function Page(){
  return <TractionAcceleratorClient/>
}