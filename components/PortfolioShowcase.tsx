"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";


const works = [
  {
    title: "A Leading US-Based Golf Company",
    tags: ["3.8× ROAS"," 80K+ Organic Clicks"],
    slug: "the-net-return",
    img: "/case-studies/the-net-return.jpg",
  },
  {
    title: "Dariaan ",
    tags: ["#1 Rankings on Core Keywords", "High Volume Lead Generation"],
    slug: "daarian",
    img: "/case-studies/daarian.png",
  },
  {
    title: "MOVER",
    tags: ["Local SEO + Content", "Page 1 Ranking", "45K+ Clicks"],
    slug: "mover",
    img: "/case-studies/mover.png",
  },
  {
    title: "Bidet Australia",
    tags: ["4.25× ROAS", "Strong Organic Growth + Website Revamp"],
    slug: "bidet",
    img: "/case-studies/bidet.png",
  },
];

function Card({ w }: { w: typeof works[0] }) {
  return (
    <Link href={`/case-studies/${w.slug}`}>
      <div className="portfolio-img h-[340px] md:h-[400px] rounded-2xl overflow-hidden relative group">
        <img
          src={w.img}
          alt={w.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-bold text-lg mb-2">{w.title}</h3>

          <div className="flex flex-wrap gap-2">
            {w.tags.map((t) => (
              <span
                key={t}
                className="tag-pill text-xs px-3 py-1 rounded-full bg-white text-black transition-all duration-300 
                           group-hover:bg-[#cff402]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioShowcase() {
const [index, setIndex] = useState(0);
const [visible, setVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setVisible(false); 

    setTimeout(() => {
      setIndex((prev) => (prev + 2) % works.length);
      setVisible(true);
    }, 1000); // match animation duration
  }, 5000);

  return () => clearInterval(interval);
}, []);

const mobileWorks = [
  works[index],
  works[(index + 1) % works.length],
];
  return (
    <Reveal>
      <section className="bg-[#0f1117] py-24">
        <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)]">
          <h2 className="text-4xl md:text-5xl font-medium text-white text-center mb-16">
            Showcase of Selected Work
          </h2>

          {/* Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-2 gap-6">
  {works.map((w) => (
    <Card w={w} key={w.slug} />
  ))}
</div>

{/* Mobile (rotating) */}
<div className="md:hidden flex flex-col gap-6 overflow-hidden">
  {mobileWorks.map((w, i) => (
    <div
      key={w.slug}
      className={`transition-all duration-[1200ms] ease-in-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-24"
      }`}
      style={{ transitionDelay: `${i * 200}ms` }}
    >
      <Card w={w} />
    </div>
  ))}
</div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-outline-white">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
