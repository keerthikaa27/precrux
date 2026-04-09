"use client";
import { useEffect, useState, useRef } from "react";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";


const projects = [
  { title: "A Leading US-Based Golf Company", slug: "the-net-return", tags: ["SEO", "DTC", "US"], img: "/case-studies/the-net-return.jpg", result: "SEO + Content Systems · 80K+ clicks · 3M+ impressions" },
  { title: "Daarian", slug: "daarian", tags: ["SEO","Fashion", "India"], img: "/case-studies/daarian.png", result: "SEO Execution · Ranked #1 for core keywords in under 90 days" },
  { title: "Mover", slug: "mover", tags: [ "Local SEO", "Content Systems", "India"], img: "/case-studies/mover.png", result: "SEO + Content Systems · 45K+ clicks · Page 1 rankings" },
  { title: "BIdet Australia", slug: "bidet", tags: ["Paid Growth", "Ecommerce","Australia"], img: "/case-studies/bidet.png", result: "Paid Attribution · Media Strategy · ROAS improved to 4.25x" },
{ title: "Renowned Chef & Gourmet Food Brand", slug: "chef-gourmet", tags: ["Paid Growth ", "SEO", "Food Brand"], img: "/case-studies/chef.jpeg", result: "Paid growth + SEO · 86% Organic growth · Stronger Purchase Intent" },
  { title: "Gut Health Wellness Brand", slug: "health-wellness", tags: ["Paid Growth", "Wellness", "Ecommerce"], img: "/case-studies/gut.jpeg", result: "Paid Growth · 126% ROI increase · Stronger Customer Acquisition" },
  { title: "WizTrek", slug: "wiztrek", tags: ["SEO", "Website Overhaul", "Lead Growth"], img: "/case-studies/wiztrek.jpeg", result: "SEO + Website Overhaul · Improved search visibility and major lead growth" },
  { title: "AI Professional Headshot’s Platform", slug: "ai-professional", tags: ["SEO", "CRO", "AI Platform"], img: "/case-studies/ai.jpeg", result: "SEO + CRO · 102% organic growth from a low-traffic base" },
];


/* ── Scroll reveal ── */
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

export default function PortfolioPage() {
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const wholePages = Math.ceil(projects.length / projectsPerPage);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
  const check = () => {
    setIsMobile(window.innerWidth < 768);
  };

  check(); // run once
  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);

  return (
    <>
      {/* ── Hero ── */}
      {/* ── Portfolio Hero ── */}
      <section className="relative">

        {/* 🔥 BACKGROUND SPLIT */}
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
opacity: isMobile ? 0.06 : 0.18,
  filter: "brightness(0.4)",
  maxWidth: "none",
}}
          />
        </div>


        {/* HERO */}
        <div className="pt-[140px] md:pt-[200px] pb-[120px] md:pb-[200px] text-center px-6">
         <Reveal> <h1 className="text-white text-6xl md:text-[4rem] font-semibold leading-[1.1] mb-8" style = {{fontSize: "clamp(3rem, 6vw, 5rem)"}}>
Real Growth Systems
          </h1>
          </Reveal>
          <Reveal>
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-[90%] md:max-w-[700px] mx-auto">
Real execution stories from DTC, Shopify, and founder-led brands. <br />
See how we turned messy growth into predictable, compounding revenue.
          </p>
          </Reveal>
        </div>

        {/* IMAGE */}
        <Reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-10 -mt-[100px] md:-mt-[140px] pb-16 md:pb-24">
<div className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[5rem] shadow-2xl h-[300px] md:h-[600px]">            
  <Image

              src="/case-studies/herosection.jpeg"
              alt = "Case-Study"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Reveal>

      </section>




      {/* ── Projects grid ── */}
      <section className="py-24 bg-white">
        <Reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link href={`/case-studies/${p.slug}`}>
                  <div
                    className="group cursor-pointer"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"}
                  >
                    <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0f1117]/0 group-hover:bg-[#0f1117]/40 transition-all duration-300 rounded-2xl flex items-center justify-center">
                        <span
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C8F135] text-[#0f1117] px-4 py-2 rounded-full text-sm"
                          style={{ fontWeight: 400 }}
                        >
                          View Case Study →
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
  {p.tags.map((t) => (
    <span
      key={t}
      className="tag-pill text-xs px-3 py-1 rounded-full bg-white text-[#0f1117] border-gray-200 shadow-sm transition-all duration-300 
group-hover:bg-[#cff402] group-hover:border-[#E2FF3B] group-hover:text-black font-medium"
    >
      {t}
    </span>
  ))}
</div>
                    <h3 className="text-[#0f1117] text-base mb-1" style={{ fontWeight: 700 }}>{p.title}</h3>
                    <p className="text-gray-500 text-sm" style={{ fontWeight: 400 }}>
                      {" "}
                      <span className="text-[#0f1117]" style={{ fontWeight: 400 }}>{p.result}</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Pagination Controls */}
          {wholePages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0f1117] hover:text-white'
                  }`}
              >
                Previous
              </button>

              <span className="text-sm font-semibold text-[#0f1117]">
                Page {currentPage} of {wholePages}
              </span>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, wholePages))}
                disabled={currentPage === wholePages}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${currentPage === wholePages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0f1117] hover:text-white'
                  }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}