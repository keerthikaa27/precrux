import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Precrux. Tell us your growth goals and we’ll build a clear, actionable strategy to scale your brand.",
};

export default function Page() {
  return <ContactClient />;
}