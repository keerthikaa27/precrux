import type { Metadata } from "next";
import RevenueEngineClient from "./RevenueEngineClient";

export const metadata: Metadata = {
  title: "Revenue Engine — Paid Ads, CRO & Scaling System",
  description:
    "Build a predictable revenue engine with CRO, paid ads, and full-funnel optimization. Precrux helps DTC and Shopify brands scale revenue with data-driven systems.",
  alternates: {
    canonical: "https://precrux.com/services/revenue-engine",
  },
};

export default function Page(){
  return <RevenueEngineClient/>
}