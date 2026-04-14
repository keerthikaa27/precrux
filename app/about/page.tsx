import type { Metadata } from "next";
import About from "./About";


export const metadata: Metadata = {
  title: "About Us — Precrux",
  description: "Meet the team behind Precrux.",
};

export default function Page() {
  return <About />;
}