import type { Metadata } from "next";
import GetAQuote from "./GetAQuote";

export const metadata: Metadata = {
  title: "Get a Growth Strategy Quote",
  description:
    "Get a custom growth plan from Precrux. We help founder-led brands scale with SEO, content, and paid growth systems.",
};

export default function Page() {
  return <GetAQuote />;
}