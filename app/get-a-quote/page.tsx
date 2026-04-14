"use client";
import { useEffect, useState, useRef } from "react";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Growth Strategy Quote",
  description:
    "Get a custom growth plan from Precrux. We help founder-led brands scale with SEO, content, and paid growth systems.",
};


const services = ["Traction Accelerator", "Authority Builder", "Revenue Engine", "Modular Growth Systems", "Full Package", "Specific Service / Custom Module", "Not Sure – Free Diagnostic Call"];
const timelines = ["ASAP", "1-2 months", "3-6 months", "Flexible"];

function SuccessSection() {
  return (
    <section className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-xl">
        <div className="flex justify-center mb-10">
          <div className="checkmark-wrapper">
            <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        </div>
        <div className="success-checkmark mb-8">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-[#0f1117] mb-4 tracking-tight">Details Received!</h2>
        <p className="text-gray-600 leading-relaxed font-light mb-8">
          Thank you for reaching out. We&apos;ve received your project details and our strategy team is already diving in. We&apos;ll be in touch very soon.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="text-[#0f1117] font-semibold underline underline-offset-8 hover:text-[#C8F135] transition-colors"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(36px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

export default function GetAQuotePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Controlled personal info fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services: selected, budget, timeline, name, email, company, description }),
      });
    } catch (err) {
      console.error("Quote form error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const toggle = (val: string) =>
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );

  if (submitted) {
    return <SuccessSection />;
  }

  return (
    <>
      <section className="relative">

        {/*BACKGROUND SPLIT */}
        <div className="absolute inset-0 -z-10 
    bg-[linear-gradient(to_bottom,#0f1117_70%,white_30%)]" />
<div className="absolute top-0 left-0 right-0 h-[45%] md:h-[70%] -z-10 bg-[#0f1117] overflow-hidden">          <img
            src="/bgimage.png"
            alt=""
            style={{
  position: "absolute",

  width: "4300px",
  height: "auto",

  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-18deg)",

  objectFit: "contain",
opacity:
  typeof window !== "undefined" && window.innerWidth < 768
    ? 0.06
    : 0.18,  filter: "brightness(0.4)",
  maxWidth: "none",
}}
          />
        </div>

        {/* HERO */}
        <Reveal>
        <div className="pt-[200px] pb-[200px] text-center">
          <h1 className="text-white text-6xl md:text-[4rem] font-semibold leading-[1.1] mb-8" style = {{fontSize: "clamp(3rem, 6vw, 5rem)"}}>
Get Your Growth Quote
          </h1>
          <p className="text-white/100 text-sm md:text-base leading-[1.6] md:leading-[1.8] max-w-[90%] md:max-w-[700px] mx-auto px-6 md:px-0">
  Get a custom quote tailored to your unique project needs.
</p>
        </div>
        </Reveal>
<Reveal>
        {/* IMAGE */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-[140px] pb-24">
<div className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[5rem] shadow-2xl h-[300px] md:h-[600px]">            
              <Image
src="/get-a-quote.jpeg"
alt = "Quote"
priority
quality={60}
  sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Reveal>

      </section>

      <section className="bg-white pt-2 md:py-3">
        <Reveal>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2
              className="text-[#0f1117] mb-8 tracking-tight leading-[1.15]"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 600 }}
            >
              Let&apos;s Turn Your Vision Into a <br className="hidden md:block" /> Powerful Reality
            </h2>
          </Reveal>

          <Reveal delay={150}>
<p className="text-[#4a4a4a] text-sm md:text-base mx-auto leading-[1.6] md:leading-[1.8] font-normal max-w-[90%] md:max-w-xl px-4 md:px-0">              Share your current growth challenges, goals, and budget below. Our team will review everything and send you a tailored proposal with the right program and clear investment.

            </p>
          </Reveal>
        </div>
        </Reveal>
      </section>

      <section className="py-14 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm space-y-8 md:space-y-10 max-w-md md:max-w-3xl mx-auto">

            {/* Services */}
            <div>
              <h3 className="font-semibold text-[#0f1117] text-xl mb-4">What do you need?</h3>
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${selected.includes(s)
                      ? "bg-[#0f1117] text-white border-[#0f1117]"
                      : "bg-gray-100 text-gray-600 border-gray-400 hover:border-[#0f1117] hover:text-[#0f1117] hover:bg-white"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>


            {/* Timeline */}
            <div>
              <h3 className="font-semibold text-[#0f1117] text-xl mb-4">Timeline</h3>
              <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap">
                {timelines.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${timeline === t
                      ? "bg-[#0f1117] text-white border-[#0f1117]"
                      : "bg-gray-100 text-gray-600 border-gray-400 hover:border-[#0f1117] hover:text-[#0f1117] hover:bg-white"
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#0f1117] text-xl mb-4">Your Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-gray-100 border border-gray-400 rounded-xl px-4 py-3 text-sm transition-none focus:outline-none focus:border-[#0f1117] focus:bg-white hover:border-[#0f1117] hover:bg-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-gray-100 border border-gray-400 rounded-xl px-4 py-3 text-sm transition-none focus:outline-none focus:border-[#0f1117] focus:bg-white hover:border-[#0f1117] hover:bg-white placeholder-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="Company / Project Name"
                value={company}
                onChange={e => setCompany(e.target.value)}
                className="w-full bg-gray-100 border border-gray-400 rounded-xl px-4 py-3 text-sm transition-none focus:outline-none focus:border-[#0f1117] focus:bg-white hover:border-[#0f1117] hover:bg-white placeholder-gray-400"
              />
              <textarea
                rows={4}
                placeholder="Brief project description..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full bg-gray-100 border border-gray-400 rounded-xl px-4 py-3 text-sm transition-none focus:outline-none focus:border-[#0f1117] focus:bg-white hover:border-[#0f1117] hover:bg-white placeholder-gray-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full md:w-auto text-center text-base flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? "Sending..." : "Request My Quote →"}
            </button>

          </form>
        </div>
      </section>

      <CTASection />
    </>
  );
}