import type { Metadata } from "next";
import AuthorityBuilderClient from "./AuthorityBuilderClient";


export const metadata: Metadata = {
  title: "Authority Builder — SEO & Content Growth System",
  description: "6-month SEO and content authority system for DTC brands.",
  alternates: {
  canonical: "https://precrux.com/services/authority-builder",
},
}

export default function Page() {
  return <AuthorityBuilderClient />;
}