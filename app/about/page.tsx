"use client";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { useEffect, useRef, useState } from "react";

/* ── Scroll reveal hook ── */
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(40px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#0f1117" />
      <path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Showreel Modal ── */
function ShowreelModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full"
        style={{ maxWidth: "900px" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
        >
          <span>Close</span>
          <span className="text-2xl leading-none">×</span>
        </button>

        {/* Video container — 16:9 */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ position: "relative", paddingBottom: "56.25%", background: "#0f1117" }}
        >
          {/* 
            Replace the src below with your actual showreel video URL.
            Supports: YouTube embed, Vimeo embed, or direct mp4.
            
            YouTube example:
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
            
            Vimeo example:
            src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1"
            
            For now showing a placeholder with instructions.
          */}
          <iframe
            src="https://www.vecteezy.com/free-videos/office-working-animation"
            title="Studio Showreel"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%", height: "100%",
              border: "none",
            }}
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-white/50 text-sm" style={{ fontWeight: 300 }}>
            Our Studio Showreel — A glimpse into our craft, process, and vision.
          </p>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Vaibhav Maheshwari",
    role: "Founder",
    bio: "Execution-obsessed growth builder with a deep passion for turning early-stage traction into compounding revenue systems. Vaibhav leads strategy, client outcomes, and system architecture at Precrux — ensuring every brand we work with gets real infrastructure, not just advice. ",
    linkedin: "https://www.linkedin.com/in/collasphere/",
    img: "/team/vaibhav.png",
  },
  {
    name: "Mayank Maheshwari",
    role: "Co-Founder & CEO",
    bio: "Operator-first founder who thinks in systems and executes with precision. Mayank drives revenue architecture, strategic partnerships, and growth execution across every Precrux engagement. With a background spanning performance marketing, SEO infrastructure, and brand scaling.",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
  },
];

const awards = [
  { title: "86% Organic Growth ",year: "2025",  desc: "Renowned chef & gourmet food brand 2025", slug: "chef-gourmet" },
  { title: "126% ROI Increase ", year: "2025", desc: "Gut health wellness brand after full website revamp 2025", slug: "health-wellness"},
  { title: "Major Lead Growth For WizTrek ", year: "2025", desc: "WizTrek after complete SEO & website overhaul 2025", slug: "wiztrek" },
  { title: "102% Organic Growth ", year: "2026", desc: "AI professional headshot’s platform 2026", slug: "ai-professional" },
];

export default function AboutPage() {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      {showReel && <ShowreelModal onClose={() => setShowReel(false)} />}

      {/* ── Hero ── */}
      <section className="pt-20 md:pt-[72px] relative overflow-hidden" style={{ background: "#12141D" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <img
            src="/bgimage.png"
            alt=""
            style={{
              position: "absolute",

              /* 🚀 go BIG but controlled */
              width: "4300px",
              height: "auto",

              /* perfect centering */
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-18deg)",

              /* important */
              objectFit: "contain",

              /* subtle bg feel */
              opacity: 0.15,
              filter: "brightness(0.2)",

              /* prevent shrinking */
              maxWidth: "none",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          {/* Heading */}
          <div className="pt-20 md:pt-40 pb-8 md:pb-12" style={{ opacity: 0, transform: "translateY(50px)", animation: "heroFadeUp 0.8s ease 0.1s forwards" }}>
            <h1
  className="text-white mb-6 md:mb-8"
  style={{
    fontFamily: "var(--font-urbanist)",
    fontSize: "clamp(2rem, 7vw, 5rem)", // 🔥 smaller on mobile
    fontWeight: 600,
    lineHeight: "1.15", // tighter
    letterSpacing: "-0.02em",
    maxWidth: "1100px",
  }}
>
  We Build Growth Systems <br />
  That Turn Messy Traction Into Predictable Revenue
</h1>
          </div>

          {/* Images + text row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-24 items-center py-5 pb-32">

            {/* Images — Left Side (7 columns) */}
            {/* Images */}
<div className="lg:col-span-7 flex items-center justify-center">

  {/* Mobile: ONLY ONE IMAGE */}
  <div className="block lg:hidden w-full">
    <div
      className="overflow-hidden rounded-[1.5rem]"
      style={{
        height: "260px",
        opacity: 0,
        transform: "translateY(60px)",
        animation: "heroFadeUp 0.85s ease 0.3s forwards",
      }}
    >
      <img
        src="/about1.jpeg"
        alt="Team"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Desktop: KEEP BOTH IMAGES */}
  <div className="hidden lg:flex items-center gap-12">

    {/* First image */}
    <div
      className="overflow-hidden rounded-[2rem] shrink-0"
      style={{
        width: "50%",
        height: "400px",
        opacity: 0,
        transform: "translateY(60px)",
        animation: "heroFadeUp 0.85s ease 0.3s forwards",
      }}
    >
      <img
        src="/about2.jpeg"
        alt="Team"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Second image */}
    <div
      className="overflow-hidden rounded-[2rem] shrink-0"
      style={{
        width: "60%",
        height: "500px",
        opacity: 0,
        transform: "translateY(60px)",
        animation: "heroFadeUp 0.85s ease 0.5s forwards",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
        alt="Collaboration"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

            {/* Text — Right Side (5 columns) */}
            <div
              className="lg:col-span-5 relative pl-0 lg:pl-12 mt-8 lg:mt-0"
              style={{ opacity: 0, transform: "translateY(60px)", animation: "heroFadeUp 0.85s ease 0.65s forwards" }}
            >
<p className="text-white text-sm md:text-lg leading-[1.7] md:leading-[1.9] font-normal mb-8 md:mb-10">We’re the execution partner that takes founder-led DTC, Shopify, and SaaS brands with messy or stalled growth and turns them into predictable, compounding revenue machines.
We combine deep technical SEO, conversion rate optimization, content systems, and full revenue architectures to create the infrastructure you actually own — so your growth keeps working even after the project ends.
              </p>

              <button
                onClick={() => setShowReel(true)}
                className="group inline-flex items-center justify-center px-10 py-4 rounded-full font-medium tracking-wide cursor-pointer border-none"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  // 0.2s for the hover 'in', 0.6s delay/duration for the 'out' transition
                  transition: "background-color 0.6s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#C8F135"; // Your Neon Green
                  el.style.transition = "background-color 0.2s ease"; // Quick snap on hover
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "white";
                  el.style.transition = "background-color 0.8s ease"; // Slow fade back to white
                  el.style.transform = "translateY(0)";
                }}
              >
                Play Showreel
              </button>


              {/* Decorative asterisk */}
              <div className="absolute -bottom-12 right-0 text-[#CDFF00] text-8xl font-bold select-none">*</div>
            </div>
          </div>
        </div>


        <style>{`
          @keyframes heroFadeUp {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0f1117] text-center mb-16">
How We Work: Simple, Proven, Revenue-Driven
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "Step 1", title: "Discover", desc: 'We start with a deep diagnostic of your current growth — technical SEO, CRO, traffic sources, revenue leaks, and what’s stopping you from scaling. We identify the highest-leverage opportunities and build a clear 90-day roadmap.' },
              { step: "Step 2", title: "Build the Systems", desc: "We don’t just advise. We design and implement complete growth systems — technical SEO architecture, content engines, conversion funnels, paid campaign structures, and revenue tracking dashboards. Everything is built to compound." },
              { step: "Step 3", title: "Launch, Optimize & Scale", desc: "We launch the systems, run live optimization, and hand over full ownership. You get ongoing performance reports, clear KPIs, and the infrastructure that keeps delivering results month after month." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div
                  className="bg-[#f7f7f7] rounded-2xl p-10 flex flex-col items-center text-center cursor-pointer h-full"
                  style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)"; el.style.background = "#f0f0f0"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.background = "#f7f7f7"; }}
                >
                  <div
                    className="w-16 h-16 rounded-full bg-[#0f1117] flex items-center justify-center mb-6 cursor-pointer"
                    style={{ transition: "background 0.3s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#C8F135"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "#0f1117"}
                  >
                    <span
                      className="text-[#C8F135] text-2xl leading-none select-none group-hover:text-black transition-colors"
                      style={{
                        fontWeight: 900,
                        transform: "scale(1.6)", // This makes the character significantly "thicker"
                        display: "inline-block"
                      }}
                    >
                      ✱
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#0f1117] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                  <span className="step-btn flex items-center justify-center font-bold">{item.step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-[#a9a2a2] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[700px] w-full items-stretch">

          {/* 1. Left Side: Full-Height Image */}
          <div className="lg:w-[45%] w-full relative">
            <Reveal className="h-full w-full">
              <div
                className="h-full w-full cursor-pointer overflow-hidden"
                style={{ transition: "transform 0.4s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                  alt="Team story"
                  className="w-100 h-full object-cover block" // object-cover + h-full is key
                />
              </div>
            </Reveal>
          </div>

          {/* 2. Right Side: Text Content */}
          <div className="lg:w-[55%] w-full flex items-center justify-center p-12 lg:p-24 bg-gray-50">
            <Reveal delay={150}>
              <div className="max-w-2xl"> {/* Limits text width for readability */}
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0f1117] leading-tight mb-6">
From Real Execution to Pixel-Perfect Growth Systems
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We didn’t start Precrux to chase trends. We started it because we were tired of agencies that overpromise, deliver reports, and disappear.
 it because we were tired of agencies that overpromise, deliver reports, and disappear.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Backed by years of hands-on execution through WebeDigital, we saw too many founder-led brands stuck with messy growth, low conversions, and zero compounding results. So we built Precrux - a focused growth execution partner that actually builds the systems and delivers the results.

                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
Today, we’re the team that helps DTC, Shopify, and founder-led brands move from unpredictable traction to predictable, scalable growth.
                </p>

                <ul className="space-y-3">
                  {["Technical systems that actually compound revenue and traffic.", "Execution-first approach - we implement, we don’t just advise.", "Real ownership - you get infrastructure you can run long even after we’re done."].map((item, i) => (
                    <li
                      key={item}
                      className="checklist-item flex items-center gap-3 cursor-pointer"
                      style={{ transition: "transform 0.2s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "translateX(6px)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                    >
                      <CheckIcon />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

{/* ── Team ── */}
{/* ── Team ── */}
<section className="py-24 bg-white/40">
  <style>{`
    .team-card-wrap {
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
    }
    .team-card-wrap .info-box {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      padding: 1.5rem;
      transform: translateY(100%);
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 10;
    }
    .team-card-wrap:hover .info-box {
      transform: translateY(0%);
    }
    .team-card-wrap .img-overlay {
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .team-card-wrap:hover .img-overlay {
      opacity: 1;
    }
    .team-card-wrap .card-img {
      transition: transform 0.5s ease;
    }
    .team-card-wrap:hover .card-img {
      transform: scale(1.03);
    }
      .team-member-group .name-strip {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.team-card-wrap:hover ~ .name-strip {
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
}
  `}</style>

  <div className="max-w-7xl mx-auto px-6">
    <Reveal>
      <h2 className="text-4xl md:text-5xl font-semibold text-[#0f1117] text-center mb-16">
        The Brains Behind Precrux
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
      {team.map((member, i) => (
  <Reveal key={member.name} delay={i * 120}>
    <div className="team-member-group">

      {/* Card */}
      <div className="team-card-wrap cursor-pointer" style={{ height: "380px" }}>
        <img
          src={member.img}
          alt={member.name}
          className="card-img w-full h-full object-cover"
        />
        <div
          className="img-overlay absolute inset-0"
          style={{ background: "rgba(255,255,255,0.3)", zIndex: 5 }}
        />
        <div className="info-box">
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-[#0f1117] font-semibold text-base leading-tight">{member.name}</p>
              <p className="text-gray-400 text-[11px] mt-0.5 tracking-widest uppercase">{member.role}</p>
            </div>
            {i === 0 && (

              <a href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-[#0f1117] flex items-center justify-center shrink-0 transition-colors duration-200"
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#C8F135"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#0f1117"}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            )}
          </div>
          <div className="w-7 h-[2px] bg-[#C8F135] mt-3 mb-3" />
          <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
        </div>
      </div>

      {/* Name strip below — hides on hover so box appears to slide from here */}
      <div className="name-strip flex items-center justify-between mt-4 px-1">
        <div>
          <p className="text-[#0f1117] font-semibold text-base">{member.name}</p>
          <p className="text-gray-400 text-[11px] mt-0.5 tracking-widest uppercase">{member.role}</p>
        </div>
        {i === 0 && (

          <a href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#0f1117] flex items-center justify-center transition-colors duration-200"
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#C8F135"}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#0f1117"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        )}
      </div>

    </div>
  </Reveal>
))}
    </div>
  </div>
</section>

      {/* ── Awards ── */}
      <section className="py-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0f1117] text-center mb-16">Proven Results</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="h-[400px] rounded-2xl overflow-hidden cursor-pointer" style={{ transition: "transform 0.4s ease, box-shadow 0.4s ease" }} onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "scale(1.02)"; el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.15)"; }} onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "scale(1)"; el.style.boxShadow = "none"; }}>
                <img src="/aboutus/proven-results.jpeg" alt="Proven Results" className="w-full h-full object-cover" style={{ transition: "transform 0.5s ease" }} onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"} onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"} />
              </div>
            </Reveal>
            <div className="space-y-0">
              {awards.map((award, i) => (
                <Reveal key={award.title} delay={i * 100}>
                  <Link href={`/case-studies/${award.slug}`}>
                  <div className="award-row cursor-pointer" style={{ transition: "transform 0.25s ease, padding-left 0.25s ease" }} onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateX(8px)"; el.style.paddingLeft = "8px"; }} onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateX(0)"; el.style.paddingLeft = "0"; }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-[#0f1117] text-xl mb-1" style={{ transition: "color 0.2s ease" }} onMouseEnter={e => (e.currentTarget as HTMLHeadingElement).style.color = "#C8F135"} onMouseLeave={e => (e.currentTarget as HTMLHeadingElement).style.color = "#0f1117"}>{award.title}</h3>
                        <p className="text-gray-500 text-sm">{award.desc}</p>
                      </div>
                      <span className="text-gray-400 font-semibold shrink-0">{award.year}</span>
                    </div>
                  </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}