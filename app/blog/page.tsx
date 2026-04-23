import type { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Growth Blog | SEO, CRO & Paid Media Insights | Precrux",
  description: "Case studies and growth strategy breakdowns.",
};

export default function Page() {
  return <Blog />;
}
