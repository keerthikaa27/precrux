"use client";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import BookingModal from "@/components/BookingModal"; 
import Image from "next/image";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traction Accelerator",
  description:
    "A 90-day growth program to fix SEO, conversion, and performance bottlenecks for DTC and Shopify brands, delivering fast improvements in traffic and conversions.",
  provider: {
    "@type": "Organization",
    name: "Precrux",
    url: "https://precrux.com",
    sameAs: [
      "https://www.linkedin.com/company/precrux"
    ],
  },
  areaServed: "Global",
  serviceType: "SEO, CRO and Growth Optimization",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};


const faqs = [
  {
    q: "How long does it take to see results with the Traction Accelerator?",
    a: "Most clients start seeing measurable improvements in traffic and conversions within the first 30–45 days. By the end of the 90 days, you typically have stronger rankings, higher conversion rates, and clear revenue momentum. Results vary based on your starting point, but the program is built for speed.",
  },
  {
    q: "What exactly is included in the Traction Accelerator?",
    a: "The program includes a full technical SEO overhaul, on-page optimization, conversion rate testing on key pages, quick website fixes (Shopify or WordPress), basic analytics setup, and initial paid + social testing. You also get a clear 90-day roadmap and full ownership of all systems we build.",
  },
  {
    q: "Who is the Traction Accelerator best suited for?",
    a: "It is designed for founder-led DTC, Shopify, and early-stage brands that already have some traction but are stuck with low conversions, stagnant traffic, or messy growth. If you have a working product but growth feels unpredictable, this program is built for you.",
  },
  {
    q: "How much does the Traction Accelerator cost?",
    a: "Investment starts at $6,500 for US/UK founders and $4,500 for Indian founders (flexible INR options available). Exact pricing depends on your current site condition and goals - we finalize this after the Free Growth Diagnostic call.",
  },
  {
    q: "What happens after the 90 days are over?",
    a: "You receive complete ownership of all systems, dashboards, and processes we built. You can continue running them yourself or choose to extend into Authority Builder or Revenue Engine for deeper scaling. Many clients stay on a lighter support retainer.",
  },
  {
    q: "How is Precrux different from hiring a regular SEO or marketing agency?",
    a: "Most agencies give you reports and one-off tasks. We build complete, owned growth systems that keep working long after the project ends. We focus only on execution that directly impacts revenue - not vanity metrics.",
  },
  {
    q: "How do I get started with the Traction Accelerator?",
    a: "The easiest way is to book a Free Growth Diagnostic call. We’ll review your site, identify your biggest opportunities, and tell you honestly whether the 90-day program is the right fit for you.",
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
<div className="relative z-10">                <h1
                className="text-white mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Traction Accelerator 

              </h1>
              <div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <Image
      src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
      alt="Traction Accelerator"
      className="w-full h-full object-cover"
    />
  </div>
</div>
              <p
                className="text-white/100 mb-10"
                style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", fontWeight: 400 }}
              >
We rapidly diagnose your current bottlenecks and implement targeted fixes across technical SEO, on-page optimization, conversion rate improvements, and quick website enhancements. In just 90 days, we transform stagnant or inconsistent growth into clear, measurable momentum - giving you stronger rankings, better conversions, and the solid foundation needed to scale with confidence.              </p>
              <button
  onClick={() => setShowBooking(true)}
  className="inline-block rounded-full font-medium cursor-pointer"
  style={{ background: "#C8F135", color: "#0f1117", padding: "14px 36px", fontSize: "1rem" }}
>
Start Your Free Growth Diagnostic
</button>
            </div>

            {/* Right — image */}
            <div
  className="hidden lg:block rounded-2xl overflow-hidden mr-6 relative"
              style={{ height: "320px", width: "97%", zIndex: 100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
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
Fast Execution That Delivers Early Wins
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
            In the first 30 days we run a full technical audit and fix your biggest leaks in SEO, site speed, and conversion bottlenecks. The next 60 days are focused on implementation - building proper on-page authority, launching targeted CRO tests, making quick website improvements, and running initial paid and social experiments. By the end of 90 days you have a solid, measurable foundation with improved rankings, higher conversions, and clear visibility into what’s actually driving revenue.
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
              src="/services/traction-accelerator.jpeg"
              alt="Design process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── BADGES (inside SAME section) ── */}
        <div className="max-w-7xl mx-auto px-8 mt-10 relative z-10">
<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10">            {["Fixed 90-Day Timeline", "Guaranteed Early Revenue Impact", "Full Ownership of All Systems"].map((badge) => (
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
Our 90-Day Traction Accelerator Process
          </h2>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Discover & Diagnose", desc: "We start with a full technical audit to uncover your biggest leaks in SEO, site speed, conversions, and revenue tracking. We map out exactly what’s holding you back and build a clear 90-day action plan." },
              { num: "2", title: "Build & Implement", desc: "We execute the highest-impact fixes - on-page optimization, CRO tests, website improvements, and initial paid + social experiments. Everything is built live so you see real movement fast." },
              { num: "3", title: "Launch, Measure & Handover", desc: "We launch the systems, track performance daily, optimize what’s working, and hand over complete ownership with clear dashboards and processes you can run yourself." },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="lg:sticky lg:top-[100px]">
  <div className="hidden lg:block rounded-2xl overflow-hidden h-[320px] lg:h-[520px]">
    <img
      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80"
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
The Traction Accelerator Advantage
              </h2>
              <div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <img
      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80"
      alt="UI/UX Design"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {[
                {
                  title: "Rapid Technical Diagnosis",
                  desc: "We begin with a deep technical audit that uncovers hidden issues in your site speed, on-page SEO, conversion leaks, and revenue tracking - giving you a clear list of the highest-impact fixes you need right now.",
                },
                {
                  title: "Immediate Execution Wins",
                  desc: "Within the first 30–45 days we implement on-page optimizations, CRO tests, quick website improvements, and initial paid + social experiments so you start seeing real movement in rankings, traffic, and conversions fast.",
                },
                {
                  title: "Measurable Momentum & Ownership",
                  desc: "By day 90 you receive full ownership of the new systems, complete performance dashboards, and a clear playbook so you can continue scaling independently with confidence.",
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
Your Guide to Common Questions & Solutions
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
          preselectedService="Traction Accelerator"
        />
      )}
    </>
    
  );
}