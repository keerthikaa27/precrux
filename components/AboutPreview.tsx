"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { num: 50, suffix: "+", label: "Growth Systems Successfully Delivered", icon: "growth" },
  { num: 4.8, suffix: "×", label: "Average Traffic Growth", icon: "traffic" },
  { num: 3.6, suffix: "×", label: "Average Revenue Impact Unlocked", icon: "revenue" },
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

function GrowthIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className="w-10 h-10 md:w-16 md:h-16"
      fill="none"
    >
      {/* Hand/Palm base - adjusted for better shape and separation */}
      <path
        d="M3 17H12.5C15 17 16.8 15.5 18 13.8"
        stroke="#36454F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Thumb */}
      <path
        d="M12.5 17C14 17 15.5 15.5 16.8 13.8"
        stroke="#36454F"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wrist - slightly thicker and cleaner */}
      <path
        d="M3 17V14.5"
        stroke="#36454F"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Badge Circle - increased size slightly for better balance */}
      <circle
        cx="12"
        cy="7.8"
        r="5"
        stroke="#36454F"
        strokeWidth="1"
        fill="#FFFFFF"   // Dark fill to eliminate any black overlap/bleed
      />

      {/* Check mark inside badge */}
      <path
        d="M9.8 7.8 L11.8 9.8 L15.2 6"
        stroke="#36454F"      // Dark check on light background? Wait — no:
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function TrafficIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-14 md:h-14">
      
      {/* Base */}
      <path d="M3 20H21" stroke="#36454F" strokeWidth="2" strokeLinecap="round"/>

      {/* Bars */}
      <rect x="5" y="14" width="1" height="6" rx="0.7" fill="#36454F"/>
      <rect x="9" y="11" width="1" height="9" rx="0.7" fill="#36454F"/>
      <rect x="13" y="8" width="1" height="12" rx="0.7" fill="#36454F"/>
      <rect x="17" y="5" width="1" height="15" rx="0.7" fill="#36454F"/>

      {/* Growth curve (CLEARLY ABOVE bars) */}
      <path
        d="M4 12C8 9.5 12 7 20 3"
        stroke="#36454F"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrow (floating, not touching) */}
      <path
        d="M20 3H17M20 3V6"
        stroke="#36454F"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
function RevenueIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-14 md:h-14">
      
      {/* LEFT STACK */}
      <ellipse cx="6" cy="16.5" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="6" cy="14.0" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>

      {/* MIDDLE STACK */}
      <ellipse cx="12" cy="16.5" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="12" cy="14.0" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="12" cy="11.5" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>

      {/* RIGHT STACK */}
      <ellipse cx="18" cy="16.5" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="18" cy="14.0" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="18" cy="11.5" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>
      <ellipse cx="18" cy="9.0" rx="2.2" ry="1.1" stroke="#36454F" strokeWidth="1.1" fill="white"/>

      {/* Growth line — ABOVE stacks */}
      <path
        d="M4 8.5L10 6.5L14 7.7L20 3.5"
        stroke="#36454F"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrow */}
      <path
        d="M20 3.5H17M20 3.5V6.5"
        stroke="#36454F"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatIcon({ type }: { type: string }) {
  if (type === "growth") return <GrowthIcon />;
  if (type === "traffic") return <TrafficIcon />;
  return <RevenueIcon />;
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
        <div className="flex items-center gap-3 mb-2">
  <div className="shrink-0">
    <StatIcon type={stat.icon} />
  </div>

  {/* LOCK WIDTH → no jitter */}
  <div className="min-w-[100px] flex items-center">
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
      <div className="hidden md:flex flex-wrap justify-center md:justify-between gap-y-10">
  {stats.map((stat, i) => (
    <div
      key={stat.label}
      className="w-1/2 md:w-auto flex justify-center"
    >
      <StatCard stat={stat} delay={i * 150} />
    </div>
  ))}
</div>

<div className="md:hidden mt-10">
  <div
    className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 gap-5 pb-7"
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    {stats.map((stat, i) => (
      <div
        key={stat.label}
        className="snap-start shrink-0 w-[48%] flex justify-center"
      >
        <StatCard stat={stat} delay={i * 150} />
      </div>
    ))}
  </div>
</div>

    </div>
  </div>
</div>


        </div>
      </section>
    </Reveal>
  );
}