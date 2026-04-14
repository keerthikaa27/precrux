"use client";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import BookingModal from "@/components/BookingModal"; 
import Image from "next/image";


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Authority Builder",
  description:
    "6-month SEO and content authority system for DTC, Shopify, and founder-led brands to build long-term organic growth and brand authority.",
  provider: {
    "@type": "Organization",
    name: "Precrux",
    url: "https://precrux.com",
    sameAs: [ "https://www.linkedin.com/company/precrux" ]
  },
  areaServed: "Global",
  serviceType: "SEO and Content Growth System",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};



const faqs = [
  {
    q: "How long does it take to see results with the Authority Builder?",
    a: "Most clients start seeing steady increases in organic traffic and keyword rankings within the first 8–10 weeks. By the end of the full 6 months, you usually have a strong, compounding authority engine with sustained traffic growth and improved brand visibility.",
  },
  {
    q: "What exactly is included in the Authority Builder program?",
    a: "The program includes advanced technical SEO, full authority content cluster development, ongoing conversion rate optimization, social media management, paid content amplification, and targeted influencer partnerships. You also get complete ownership of all systems and content we create.",
  },
  {
    q: "Who is the Authority Builder best suited for?",
    a: "It is designed for founder-led DTC, Shopify, and established brands that already have some traction but are not seeing consistent organic growth or lasting results from previous agencies. If you want compounding traffic and authority that keeps working long-term, this program is built for you.",
  },
  {
    q: "How much does the Authority Builder cost?",
a: "Investment starts at $14,000 for US/UK founders and $9,500 for Indian founders (with flexible monthly/quarterly INR options available). The exact price is finalized after the Free Growth Diagnostic call based on your current site condition and goals.",
  },
  {
  q: "What happens after the 6 months are over?",
a: "You receive full ownership of the entire authority system - content clusters, technical structures, processes, and dashboards. You can continue running it yourself or move into the Revenue Engine program for deeper scaling support.",
  },
  {
  q: "How is Precrux different from hiring a regular SEO or content agency?",
  
  a: "Most agencies deliver one-off content or temporary rankings. We build a complete, owned authority engine that compounds over time across organic, social, and paid channels. Our focus is on sustainable systems, not short-term spikes.",
},
{
  q: "How do I get started with the Authority Builder?",
a: "The easiest way is to book a Free Growth Diagnostic call. We’ll review your current traffic, content, and technical setup, then tell you honestly whether the 6-month Authority Builder is the right fit for your goals.",
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
                Authority Builder 

              </h1>
              {/* 📱 Mobile Image (after heading) */}
<div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <Image
  src="/services/authority-builder.jpeg"
  alt="Authority Builder"
  fill
  priority
  quality={75}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
  </div>
</div>
              <p
                className="text-white/100 mb-10"
                style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", fontWeight: 400 }}
              >
We build complete authority and growth systems that create compounding results across every channel. Over six months we develop advanced technical SEO structures, high-ranking content clusters, ongoing conversion rate optimization, paid campaign amplification, social media management, and targeted influencer partnerships - turning inconsistent growth into predictable, sustainable revenue that continues to scale even as you expand.
              </p>
              <button
  onClick={() => setShowBooking(true)}
  className="inline-block rounded-full font-medium cursor-pointer"
  style={{ background: "#C8F135", color: "#0f1117", padding: "14px 36px", fontSize: "1rem" }}
>
Start Building Your Authority Engine
</button>
            </div>

            {/* Right — image */}
          <div
  className="hidden lg:block rounded-2xl overflow-hidden mr-6 relative"
              style={{ height: "320px", width: "97%", zIndex: 100 }}
            >
              <img
                src="/services/authority-builder.jpeg"
                alt="Authority Builder"
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
Authority That Compounds - Month After Month
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
            We don’t just create content or run SEO campaigns. We build a complete authority engine that compounds traffic, trust, and revenue over time. Over six months we develop high-ranking content clusters, advanced technical SEO structures, ongoing conversion rate optimization, paid amplification strategies, social media systems, and targeted influencer partnerships - turning inconsistent or flat growth into predictable, long-term momentum that continues working even as your business scales.

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
              src="/services/authority-builder-1.jpeg"
              alt="Design process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── BADGES (inside SAME section) ── */}
        <div className="max-w-7xl mx-auto px-8 mt-10 relative z-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10">
            {["Compounding Organic Growth", "Long-Term Authority Systems", "Full Ownership of Every Asset"].map((badge) => (
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
Our Authority Builder Process
          </h2>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Discover & Define", desc: "We begin with a full audit of your current content, technical SEO health, conversion leaks, and audience behavior. We identify the exact gaps preventing compounding growth and create a custom 6-month authority roadmap that aligns with your business goals and competitive landscape." },
              { num: "2", title: "Ideate & Prototype", desc: "We design and build the core systems - high-ranking content clusters, advanced on-page structures, conversion-focused user flows, and initial paid amplification strategies. Every element is prototyped and tested for maximum impact before full rollout." },
              { num: "3", title: "Refine & Validate", desc: "We launch the systems, monitor real-user behavior and performance data weekly, run continuous optimization tests, and refine everything based on actual results. By the end of six months you have a fully validated, owned authority engine that keeps delivering traffic, trust, and revenue." },
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
      src="/services/authority-builder-2.jpeg"
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
The Authority Builder Edge
              </h2>
              {/* 📱 Mobile Image (after heading) */}
<div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <img
      src="/services/authority-builder-2.jpeg"
      alt="Authority Builder"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {[
                {
                  title: "Compounding Content Systems",
                  desc: "We don’t just write blog posts. We architect complete content clusters that rank for hundreds of keywords over time, drive consistent organic traffic, and build lasting brand authority - even in competitive niches where other agencies have failed.",
                },
                {
                  title: "Advanced Technical Authority",
                  desc: "We go far beyond basic SEO. We implement deep technical structures, on-page optimization frameworks, internal linking strategies, and site architecture that make Google see your brand as the definitive authority in your space - resulting in sustained ranking gains that continue long after the project ends.",
                },
                {
                  title: "Multi-Channel Amplification",
                  desc: "We don’t stop at organic. We strategically amplify your content through targeted paid campaigns, social media systems, and influencer partnerships - creating a flywheel effect where organic growth and paid performance feed each other for maximum reach and revenue impact.",
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
          preselectedService="Authority Builder"
        />
      )}
    </>
    
  );
}