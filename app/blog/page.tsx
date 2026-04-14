import type { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Growth Blog",
  description: "Case studies and growth strategy breakdowns.",
};

export default function Page() {
  return <Blog />;
}
