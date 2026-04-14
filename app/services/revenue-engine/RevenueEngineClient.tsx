"use client";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import BookingModal from "@/components/BookingModal"; 
import Image from "next/image";



const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revenue Engine",
  description:
    "A complete revenue growth system combining CRO, paid advertising, email marketing, and attribution to help DTC and Shopify brands scale predictably.",
  provider: {
    "@type": "Organization",
    name: "Precrux",
    url: "https://precrux.com",
    sameAs: [
      "https://www.linkedin.com/company/precrux"
    ],
  },
  areaServed: "Global",
  serviceType: "Paid Ads, CRO and Revenue Growth System",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};



const faqs = [
  {
    q: "How long does the Revenue Engine program last and when do I see results?",
    a: "The Revenue Engine runs for 6 to 9 months. Most clients start seeing measurable improvements in ROAS, conversions, and revenue within the first 45–60 days. By the end of the program you have a fully built, predictable revenue system with clear attribution and consistent growth.",
  },
  {
    q: "What exactly is included in the Revenue Engine?",
    a: "The program includes advanced CRO across the entire funnel, custom revenue dashboards with accurate multi-touch attribution, full paid campaigns (Google, Meta, TikTok, YouTube) with custom creatives, advanced email sequences and reactivation flows, social media management with daily ad creatives, and targeted influencer campaigns - all integrated into one cohesive revenue system.",
  },
  {
    q: "Who is the Revenue Engine best suited for?",
    a: "It is designed for scale-ready DTC, Shopify, and founder-led brands that already have some traction but want predictable, higher revenue with full visibility. If you are ready to move beyond guesswork and build a complete revenue engine you can own, this program is built for you.",
  },
  {
    q: "Who is the Revenue Engine best suited for?",
    a: "Investment starts at $22,000 for US/UK founders and $15,000 for Indian founders (with flexible quarterly INR options available). The exact price is finalized after the Free Growth Diagnostic call, based on your current site condition, traffic sources, and scaling goals.",
  },
  {
    q: "How much does the Revenue Engine cost?",
    a: "It is designed for scale-ready DTC, Shopify, and founder-led brands that already have some traction but want predictable, higher revenue with full visibility. If you are ready to move beyond guesswork and build a complete revenue engine you can own, this program is built for you.",
  },
  {
    q: "What happens after the 6–9 months are over?",
    a: "You receive complete ownership of the entire revenue system, including all dashboards, processes, creatives, and documentation. You can continue running it yourself or choose to keep us on a lighter retainer for ongoing optimization and scaling support.",
  },
  {
    q: "How is Precrux different from hiring a regular paid ads or marketing agency?",
    a: "Most agencies run campaigns and send reports. We build a complete, owned revenue engine with accurate attribution, custom creatives, and integrated systems across paid, email, social, and CRO - so you get predictable revenue and full visibility, not just temporary spikes.",
  },
  {
    q: " How do I get started with the Revenue Engine?",
    a: "The easiest way is to book a Free Growth Diagnostic call. We’ll review your current revenue flow, attribution gaps, and growth potential, then tell you honestly whether the Revenue Engine is the right fit for your current stage and goals.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border border-gray-200 bg-white overflow-hidden cursor-pointer"
      style={{ marginBottom: "16px" }}
      onClick={() => setOpen(!open)}
    >

      <div className="flex items-center justify-between px-6 py-5">
        <h3 style={{ fontWeight: 700, fontSize: "1.10rem", color: "#0f1117" }}>{q}</h3>
        <span style={{ fontSize: "1.4rem", color: "#0f1117", lineHeight: 1, userSelect: "none" }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <div className="px-6 pb-6" style={{ fontSize: "0.90rem", color: "#232933", lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function UIUXPage() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
/>
      {/* ── 1. Hero — dark, left text + right image ── */}
      <section
        className="pt-[72px] relative overflow-hidden"
        style={{ background: "#12141D", minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <img
          src="/bgimage.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            position: "absolute",

            /* 🚀 go BIG but controlled */
            width: "4300px",   // 🔥 fixed large size (NOT %)
            height: "auto",
            zIndex: 0,

            /* perfect centering */
            top: "95%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-18deg)",

            /* important */
            objectFit: "contain",

            /* subtle bg feel */
            opacity: 0.04,
            filter: "brightness(0.9)",

            /* prevent shrinking */
            maxWidth: "none",
          }}
        />
        {/* diagonal bg texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `repeating-linear-gradient(-45deg,transparent,transparent 60px,rgba(255,255,255,0.015) 60px,rgba(255,255,255,0.015) 61px)` }} />

        <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)] w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className= "relative z-10">
              <h1
                className="text-white mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
Revenue Engine 
              </h1>
              {/* 📱 Mobile Image (after heading) */}
<div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <Image
  src="/services/revenue-engine.jpeg"
  alt="Revenue Engine"
  width={600}
  height={300}
  priority
  sizes="100vw"
  className="w-full h-full object-cover"
/>
  </div>
</div>
              <p
                className="text-white/100 mb-10"
                style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", fontWeight: 400 }}
              >
We build complete, predictable revenue systems that turn your business into a scalable growth machine. Over 6 to 9 months we implement advanced CRO across the entire funnel, custom revenue dashboards with accurate attribution, full paid campaigns across Google, Meta, custom ad creatives, advanced email flows, social media management, and influencer campaigns - giving you clear visibility, consistent revenue growth, and infrastructure you fully own.
              </p>
              <button
  onClick={() => setShowBooking(true)}
  className="inline-block rounded-full font-medium cursor-pointer"
  style={{ background: "#C8F135", color: "#0f1117", padding: "14px 36px", fontSize: "1rem" }}
>
Start Your Revenue Engine
</button>
            </div>

            {/* Right — image */}
            <div
  className="hidden lg:block rounded-2xl overflow-hidden mr-6 relative"
              style={{ height: "320px", width: "97%", zIndex: 100 }}
            >
              <img
                src="/services/revenue-engine.jpeg"
                alt="UI/UX Design"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. White — centered text + wide image ── */}
      <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="max-w-4xl mx-auto px-8 text-center mb-10">
          <h2
            className="text-[#0f1117] mb-4"
            style={{ fontSize: "clamp(2.8rem, 3vw, 3.5rem)", fontWeight: 600, lineHeight: 1.2 }}
          >
The Revenue Engine Superpowers
          </h2>
          <p
            className="text-gray-700 mx-auto text-center" // mx-auto centers the box, text-center centers the lines
            style={{
              fontSize: "1rem",   // Decreased from 1rem to make it "smaller"
              maxWidth: "720px",    // Decreased from 750px to make it tighter/smaller
              lineHeight: 1.6,      // Slightly more breathing room for smaller text
              fontWeight: 400
            }}
          >
            We don’t just run ads or tweak funnels. We build a complete revenue system that gives you predictable, scalable growth across every channel. Over 6 to 9 months we implement advanced conversion rate optimization across the entire customer journey, create custom revenue dashboards with accurate multi-touch attribution, run full paid campaigns with custom creatives, develop advanced email flows and reactivation sequences, manage social media with daily ad creatives, and execute targeted influencer campaigns - so you finally have clear visibility, consistent revenue, and systems you fully own.

          </p>

        </div>

      </section>

      <section className="relative pt-[20px] pb-[60px] bg-white">

        {/* 🔥 BLACK BACKGROUND (BOTTOM 50%) */}
        <div className="absolute inset-0 bg-[#0f1117] md:h-[50%] md:top-auto md:bottom-0" />

        {/* ── IMAGE ── */}
        <div className="max-w-5xl mx-auto  px-8 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[480px]">
            <img
              src="/services/revenue-engine-1.jpeg"
              alt="Design process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── BADGES (inside SAME section) ── */}
        <div className="max-w-7xl mx-auto px-8 mt-10 relative z-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10">
            {["Custom Revenue Dashboards", "Full Paid + Creative Execution", "Accurate Attribution & ROAS"].map((badge) => (
              <div key={badge} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#C8F135]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#0f1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-[0.9rem] text-center sm:text-left">{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── 3. Dark — badges + process cards ── */}
      <section className="bg-gray-100 py-[120px]">
        {/* badges row */}
        <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)] mb-16">

          {/* Process heading */}
          <h2
            className="text-black text-center mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
Our Revenue Engine Process
          </h2>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Discover & Map", desc: "We start with a comprehensive audit of your entire revenue flow - technical SEO health, current CRO leaks, paid campaign performance, email & social effectiveness, attribution gaps, and customer journey friction points. We identify exactly where revenue is leaking and build a custom 6-to-9-month roadmap with clear KPIs and priorities." },
              { num: "2", title: "Build & Integrate", desc: "We design and implement the full revenue system - advanced conversion rate optimization across the entire funnel, custom revenue dashboards with accurate multi-touch attribution, full paid campaigns with custom creatives, advanced email sequences and reactivation flows, social media management with daily ad creatives, and targeted influencer campaigns. Every element is built to work together as one cohesive engine." },
              { num: "3", title: "Launch, Optimize & Scale", desc: "We launch the complete system, monitor performance daily, run continuous A/B tests and optimizations, and refine everything based on real data. By the end of the program you have full ownership of the revenue engine, clear dashboards, documented processes, and the ability to scale predictably without constant external support." },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl flex flex-col items-center text-center"
                style={{ background: "#ffffff", padding: "40px 32px" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "#0f1117" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ filter: "drop-shadow(0px 0px 2px rgba(400, 341, 53, 0.5))" }} // Subtle glow
                  >
                    {/* Defining a gradient for the stroke itself */}
                    <defs>
                      <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D9FF66" /> {/* Lighter top */}
                        <stop offset="100%" stopColor="#A5CC26" /> {/* Deeper bottom */}
                      </linearGradient>
                    </defs>
                    <path
                      d="M5 12l4 4 10-10"
                      stroke="url(#tickGradient)"
                      strokeWidth="3.5" // Increased thickness to make it look "bigger"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.44rem", fontWeight: 700, color: "#0f1117", marginBottom: "12px" }}>
                  {step.num}. {step.title}
                </h3>
                <p style={{ fontSize: "1.0rem", color: "#454545", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. White — image left + superpowers accordion right ── */}
      <section className="bg-white" style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:sticky lg:top-[100px]">
  <div className="hidden lg:block rounded-2xl overflow-hidden h-[320px] lg:h-[520px]">
    <img
      src="/services/revenue-engine-2.jpeg"
      alt="Revenue-Engine"
      className="w-full h-full object-cover"
    />
  </div>
</div>

            {/* Right — accordion */}
            <div>
              <h2
                className="text-[#212531] mb-12"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
The Revenue Engine Upper Hand

              </h2>
              <div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <img
      src="/services/revenue-engine-2.jpeg"
      alt="UI/UX Design"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {[
                {
                  title: "Psychology-Driven Revenue Architecture",
                  desc: "We apply proven behavioral psychology and conversion principles to every part of the customer journey. From landing pages to checkout flows, we design experiences that reduce friction, eliminate hesitation, and guide users toward purchase with maximum efficiency.",
                },
                {
                  title: "Real-Time Revenue Visibility",
                  desc: "We build custom revenue dashboards with accurate multi-touch attribution models that finally show you exactly which channels, campaigns, and pages are driving real money. No more guesswork - you see live ROAS, lifetime value, and payback periods updated daily.",
                },
                {
                  title: "Full-Funnel Execution Systems",
                  desc: "We don’t just run ads or send emails. We create and manage the entire revenue engine - advanced paid campaigns with custom creatives, sophisticated email sequences, social media management with daily ad creatives, and targeted influencer campaigns - all integrated so every channel reinforces the others and compounds results.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    borderBottom: "1px solid #0f1117", // 🔥 softer line
                    paddingBottom: "32px",
                    marginBottom: "32px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "#0f1117",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      color: "#0f1116", // 🔥 softer grey text
                      lineHeight: 1.8,
                      fontWeight: 400,
                      maxWidth: "520px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section style={{ background: "#f4f4f4", padding: "80px 0" }}>
        <div className="max-w-3xl mx-auto px-8">
          <h2
            className="text-[#0f1117] text-center mb-16"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Your Guide to Common Questions &amp; Solutions
          </h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <CTASection />
      {showBooking && (
        <BookingModal
          onClose={() => setShowBooking(false)}
          preselectedService="Revenue Engine"
        />
      )}
    </>
    
  );
}