import type { Metadata } from "next";
import CaseStudies from "./CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies | SEO, CRO & Paid Growth Results | Precrux",
  description:
    "Real growth case studies from founder-led brands. See how Precrux drives SEO, content, and paid growth results.",
};

export default function Page() {
  return <CaseStudies />;
}
