"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";
 


const posts = [
  {
    category: "SEO",
    title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png",
    date: "April 6, 2026",
    img: "/blog/fashion.webp",
    slug: "ranked-fashion-accelerator-in-under-90-days",
  },
  {
    category: "Organic Growth",
    title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png",
    date: "April 7, 2026",
    img: "/blog/golf.webp",
    slug: "80k-organic-clicks-us-golf-dtc-brand-seo-case-study",
  },
  {
    category: "Performance Marketing",
    title: "Why Most Paid Campaigns Fail — And the Attribution Model That 4.2× Our Clients’ ROAS",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png",
    date: "April 8, 2026",
    img: "/blog/bidet.webp",
    slug: "why-most-paid-campaigns-fail-attribution-model-roas",
  },
];
function BlogCard({ p }: { p: typeof posts[0] }) {
  return (
    <Link href={`/blog/${p.slug}`}>
      <article className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-52 overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <span className="inline-block bg-gray-100 text-black-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            {p.category}
          </span>
          <h3 className="font-semibold text-[#090909] text-lg leading-snug mb-4">
            {p.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <img
  src={p.authorImg}
  alt={p.author}
  className="w-6 h-6 rounded-full object-contain"
/>
              {p.author}
            </span>
            <span>{p.date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
export default function BlogPreview() {
  const [index, setIndex] = useState(0);
const [animating, setAnimating] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % posts.length);
      setAnimating(false);
    }, 800); // animation duration
  }, 5000); // rotation speed

  return () => clearInterval(interval);
}, []);
  return (
    
    <Reveal>
      <section className="py-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)]">
          <h2 className="text-4xl md:text-5xl font-medium text-[#0f1117] text-center mb-16">
            The Precrux Journal

          </h2>

         {/* 💻 Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-3 gap-8">
  {posts.map((p) => (
    <BlogCard key={p.slug} p={p} />
  ))}
</div>

{/* 📱 Mobile (1 rotating blog) */}
<div className="md:hidden flex justify-center">
  <div
    className={`w-full max-w-md transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      animating
        ? "opacity-0 -translate-y-16"
        : "opacity-100 translate-y-0"
    }`}
  >
    <BlogCard p={posts[index]} />
  </div>
</div>
          <div className="flex justify-center mt-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#9d9d9f] bg-white text-[#0f1117] font-semibold text-base px-10 py-3.5 rounded-full hover:bg-[#ccf33d] transition-colors duration-700 hover:duration-200 ease-in-out"
            >
              See More Articles
            </Link>
          </div>

        </div>
      </section>
    </Reveal>
  );
}
