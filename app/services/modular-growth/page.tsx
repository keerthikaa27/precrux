import type { Metadata } from "next";
import ModularBuilderClient from "./ModularBuilderClient";


export const metadata: Metadata = {
  title: "Modular Growth Systems — Flexible SEO & Paid Execution",
  description:
    "Choose targeted SEO, CRO, or paid growth modules based on your needs. Precrux delivers flexible 30–90 day growth systems with clear KPIs and full ownership.",
  alternates: {
    canonical: "https://precrux.com/services/modular-growth-systems",
  },
};

export default function Page() {
  return <ModularBuilderClient />;
}