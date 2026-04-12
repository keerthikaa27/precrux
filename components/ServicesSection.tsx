"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "@/components/Reveal";

const services = [
  {
    num: "1", title: "Traction Accelerator (90 days)",
    desc: "Fast-track your growth from messy to predictable. We fix the foundations and deliver early revenue wins.",
    slug: "traction-accelerator",
    items: ["Technical SEO overhaul + PageSpeed scores", "Conversion rate optimization on key pages.", "Paid campaigns testing + Social media marketing."],
  },
  {
    num: "2", title: "Authority Builder (6 months)",
    desc: "Build the long-term traffic and trust engine that compounds month after month.",
    slug: "authority-builder",
    items: ["Full authority content clusters + Advanced SEO.", "Ongoing CRO + User-flow optimization.", "Paid campaign amplification + Influencer partnerships."],
  },
  {
    num: "3", title: "Revenue Engine (6–9 months)",
    desc: "The complete system for predictable, scalable revenue. We become your full growth department.",
    slug: "revenue-engine",
    items: ["Custom revenue dashboards + Attribution models.", "Full paid campaigns (Google, Meta) + Custom creatives.", "Advanced social media management + Daily ad creatives."],
  },
  {
    num: "4", title: "Modular Growth Systems (30–90 days)",
    desc: "Pick exactly what you need — no full program required. Flexible, high-impact execution for specific gaps.",
    slug: "modular-growth",
    items: ["Single-focus projects (SEO)","Minimum 30-day commitment with clear KPIs", "Same execution quality as our flagship programs"
],
  },
];

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0 mt-0.5">
      <circle cx="11" cy="11" r="11" fill="#0f1117" />
      <path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceCard({ s }: { s: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="service-card p-8 md:p-10 relative overflow-hidden cursor-pointer rounded-[28px] flex flex-col justify-center h-full"
      style={{
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.08)" : "0 5px 15px rgba(0,0,0,0.03)",
        backgroundColor: "#F9FAFB",
        minHeight: "320px", // Ensures uniform height across the grid
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/services/${s.slug}`)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <img
          src="/servicelogo.png"
          alt=""
          style={{
            position: "absolute", // 🔥 important
            top: "50%",
            left: "50%",

            width: "100%",
            height: "100%",
            objectFit: "cover",

            opacity: 0.08,
            filter: "grayscale(1) brightness(3)",

            // 🔥 key changes
            transform: "translate(-40%, -30%) scale(2.5) rotate(-18deg)",
            // 👆 move + zoom (THIS creates that cut-off abstract look)

            pointerEvents: "none"
          }}
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-[#0f1117] mb-3">
  {s.num}.{" "}
  {s.title.split("(")[0]}
  <br className="block md:hidden" />
  ({s.title.match(/\(.*\)/)?.[0]?.replace(/[()]/g, "")})
</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
        <ul className="space-y-3">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)] relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-medium text-[#0f1117] text-center mb-16">
            Services We Offer
          </h2>
        </Reveal>

        {/* Uniform 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
