"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { num: 50, suffix: "+", label: "Growth Systems Successfully Delivered", icon: "⏱" },
  { num: 4.8, suffix: "×", label: "Average Traffic Growth", icon: "◈" },
  { num: 3.6, suffix: "×", label: "Average Revenue Impact Unlocked", icon: "◆" },
];

function RollingNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState<number>(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const steps = 80;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 4);
const raw = eased * target;
setDisplay(Number.isInteger(target) ? Math.round(raw) : parseFloat(raw.toFixed(1)));
if (step >= steps) { setDisplay(target); setDone(true); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="relative flex items-end gap-0.5">
      <span
        className="tabular-nums text-[#0f1117]"
        style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.04em", color: done ? "#0f1117" : "#555", transition: "color 0.3s ease" }}
      >
        {display}
      </span>
      <span style={{ fontSize: "2rem", fontWeight: 300, lineHeight: 1.2, color: "#0f1117" }}>{suffix}</span>
    </div>
  );
}

function StatIcon({ type }: { type: string }) {
  if (type === "⏱") return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="15" r="10" stroke="#0f1117" strokeWidth="1.5" fill="none"/>
      <path d="M14 9v6l4 2" stroke="#0f1117" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 3h6M14 3v2" stroke="#0f1117" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  if (type === "◈") return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L25 14L14 25L3 14L14 3Z" stroke="#0f1117" strokeWidth="1.5" fill="none"/>
      <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="#0f1117"/>
    </svg>
  );
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2v24M2 14h24M5.5 5.5l17 17M22.5 5.5l-17 17" stroke="#0f1117" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      {/* 1. Main Wrapper: Vertical column to stack Top Row + Label */}
      <div
        className="flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* 2. Top Row: Icon and Number side-by-side */}
        <div className="flex items-center gap-5 mb-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-gray-100 border border-gray-200"
            style={{
              transform: hovered ? "rotate(8deg) scale(1.08)" : "rotate(0deg) scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <StatIcon type={stat.icon} />
          </div>

          <div className="flex items-end">
            <RollingNumber target={stat.num} suffix={stat.suffix} />
          </div>
        </div>

        {/* 3. Bottom Row: Label centered under the combined width above */}
        <p className="text-[#0f1117] text-sm text-center max-w-[180px] leading-snug">
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
}


export default function AboutPreview() {
  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-semibold text-[#0e0e0e] leading-tight mb-7">
Operator-Led Growth Systems Built for Founder-Led Brands Ready to Scale.
              </h2>
              <p className="text-[#2d3038] leading-relaxed text-base mb-8">
                We’re the execution partner that turns messy or stalled growth into predictable, compounding results. We work with founder-led DTC, Shopify, and early-stage brands that already have some traction but need structured systems to scale faster and more consistently.

              </p>
              <Link 
  href="/about" 
  className="inline-flex items-center gap-2 border border-[#9d9d9f] bg-white text-[#0f1117] font-normal text-sm px-6 py-2.5 rounded-full hover:bg-[#ccf33d] transition-colors duration-700 hover:duration-200 ease-in-out"
>
  Know More About Us
</Link>
            </div>
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img
                src="/homepage/aboutus.png"
                alt="Team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
{/* Stats Section */}
{/* Stats Section */}
<div className="mt-16 flex justify-center ">
  
  {/* Controlled width container (THIS is key) */}
  <div className="w-full max-w-5xl ">
    
    {/* Line matches this width */}
    <div className="border-t border-[#080808] pt-12">
      
      {/* Spread items across */}
      <div className="flex flex-wrap justify-center md:justify-between gap-y-10">
  {stats.map((stat, i) => (
    <div
      key={stat.label}
      className="w-1/2 md:w-auto flex justify-center"
    >
      <StatCard stat={stat} delay={i * 150} />
    </div>
  ))}
</div>

    </div>
  </div>
</div>


        </div>
      </section>
    </Reveal>
  );
}