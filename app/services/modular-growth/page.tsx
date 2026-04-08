"use client";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import BookingModal from "@/components/BookingModal"; 


const faqs = [
  {
    q: "What exactly is Modular Growth Systems?",
    a: <>Modular Growth Systems is a flexible, high-impact execution option where you choose only the specific growth areas you need right now - such as technical SEO, paid campaigns, CRO, social media systems, or any targeted combination - instead of committing to a full 6- or 9-month program. Each module runs as a focused 30–90 day sprint with clear KPIs and full ownership at the end.</>,
  },
  {
    q: "How is Modular Growth Systems different from your full programs?",
    a: "The full programs (Traction Accelerator, Authority Builder, Revenue Engine) are comprehensive, long-term engagements. Modular Growth System is shorter and more targeted - you pick exactly what you need, get the same premium execution quality, and see faster results without a long commitment. It’s ideal when you want to solve one or two specific bottlenecks first.",
  },
  {
    q: "What is the minimum commitment for Modular Growth Systems?",
    a: "The minimum commitment is 30 days. Most modules run for 30–90 days depending on the scope. This gives you enough time to implement meaningful changes and see measurable results while keeping the engagement flexible.",
  },
  {
    q: "How much does Modular Growth Systems cost?",
    a: "Pricing starts at $4,000 (US/UK) or ₹2.5L (India) depending on the specific module and scope. The exact investment is finalized after the Free Growth Diagnostic call, based on your current bottlenecks and the module you choose.",
  },
  {
    q: "Who is Modular Growth Systems best suited for?",
    a: "It is perfect for founder-led brands that already have some traction but want to fix one or two specific areas quickly - for example, only technical SEO, only paid campaigns, or only CRO - without locking into a longer program. It is also a great way to test our execution quality before moving into a full program.",
  },
  {
    q: "What happens after a Modular Growth Systems sprint ends?",
    a: "You receive complete ownership of all systems, dashboards, processes, and assets we built during the sprint. You can continue running them yourself or easily add another module later if you want to expand. Many clients start with one module and then move into Authority Builder or Revenue Engine.",
  },
  {
    q: "How do I get started with Modular Growth Systems?",
    a: "The easiest way is to book a Free Growth Diagnostic call. We’ll review your current growth setup, identify the highest-leverage module for you, and tell you honestly whether Modular Growth Systems is the right fit or if one of the full programs would serve you better.",
  },
];

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
Modular Growth Systems
              </h1>
              {/* 📱 Mobile Image (after heading) */}
<div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <img
      src="/services/modular-systems.jpeg"
      alt="Modular Systems"
      className="w-full h-full object-cover"
    />
  </div>
</div>
            
              <p
                className="text-white/100 mb-10"
                style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", fontWeight: 400 }}
              >
We offer flexible, high-impact growth execution for specific needs. Whether you need only technical SEO, paid campaign management, conversion rate optimization, social media systems, or any targeted combination - you get the same premium execution quality as our flagship programs. With a minimum 30-day commitment and clear KPIs, you receive focused results without locking into a full 6- or 9-month program.
              </p>
              <button
  onClick={() => setShowBooking(true)}
  className="inline-block rounded-full font-medium cursor-pointer"
  style={{ background: "#C8F135", color: "#0f1117", padding: "14px 36px", fontSize: "1rem" }}
>
Build Your Custom Growth System
</button>
            </div>

            {/* Right — image */}
            <div
  className="hidden lg:block rounded-2xl overflow-hidden mr-6 relative"
              style={{ height: "320px", width: "97%", zIndex: 100 }}
            >
              <img
                src="/services/modular-systems.jpeg"
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
Modular Growth Systems That Deliver Targeted Results Fast
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
            We offer precise, high-impact growth execution for exactly what you need right now - without forcing you into a long-term program. Whether you need only technical SEO overhauls, paid campaign management with custom creatives, conversion rate optimization on key pages, social media systems, or any targeted combination, you get the same premium execution quality and systems thinking as our flagship programs, delivered in focused 30 to 90-day sprints with clear KPIs and full ownership from day one.

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
              src="/services/modular-systems-1.jpeg"
              alt="Design process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── BADGES (inside SAME section) ── */}
        <div className="max-w-7xl mx-auto px-8 mt-10 relative z-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10">
            {["Flexible 30–90 Day Sprints", "Targeted Execution with Clear KPIs", "Full Ownership of All Systems"].map((badge) => (
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
Our Modular Growth Systems Process
          </h2>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Discover & Define", desc: "We begin with a focused diagnostic of your current growth setup to identify the single biggest bottleneck or opportunity - whether it’s technical SEO gaps, conversion leaks, paid campaign inefficiency, social media performance, or any specific area holding you back. We give you a clear recommendation on exactly what needs to be fixed and the expected impact." },
              { num: "2", title: "Build & Execute", desc: "We design and implement the precise growth module you need - whether it’s a full technical SEO overhaul, paid campaign setup with custom creatives, conversion rate optimization on key pages, or any targeted combination. Everything is built live with clear weekly milestones so you see progress and results quickly." },
              { num: "3", title: "Measure & Handover", desc: "We launch the system, track performance against agreed KPIs, run immediate optimizations based on real data, and hand over complete ownership with full documentation and dashboards. By the end of the 30–90 day sprint you have a working, measurable growth system you can continue running independently or expand later." },
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
      src="/services/modular-systems-2.jpeg"
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
The Modular Growth Systems Advantage
              </h2>
              {/* 📱 Mobile Image (after heading) */}
<div className="block lg:hidden mt-6 mb-6">
  <div className="rounded-2xl overflow-hidden h-[240px]">
    <img
      src="/services/modular-systems-2.jpeg"
      alt="UI/UX Design"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {[
                {
                  title: "Precision-Targeted Execution",
                  desc: "We don’t force you into a long-term program. You choose exactly the growth module you need right now - whether it’s a full technical SEO overhaul, paid campaign setup with custom creatives, conversion rate optimization on key pages, or any specific combination - and we deliver it with the same premium systems thinking and execution quality as our flagship programs.",
                },
                {
                  title: "Rapid, Measurable Wins with Full Ownership",
                  desc: "Every 30–90 day sprint is built around clear KPIs and weekly milestones. You see tangible progress fast - improved rankings, higher conversions, or better ROAS - and at the end of the sprint you receive complete ownership of all systems, dashboards, and processes we built so you can continue running and scaling them independently.",
                },
                {
                  title: "Flexible Path to Scale",
                  desc: "Unlike rigid programs, Modular Growth Systems let you start small and expand naturally. Once one module delivers results, you can easily add another (SEO → CRO → paid campaigns) without restarting from zero. It’s the smartest way to test, prove, and scale growth without overcommitting upfront.",
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
          preselectedService="Modular Growth Systems"
        />
      )}
    </>
    
  );
}