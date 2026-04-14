"use client";
import { useState, useEffect, useRef } from "react";
import CTASection from "@/components/CTASection";
import Link from "next/link";


const posts = [
  {
    category: "SEO",
    title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
    excerpt: "Ranking #1 is rarely about doing more SEO. It is about owning the category more clearly than everyone else. Here is how focused execution helped a fashion accelerator take control of its core keyword landscape in under 90 days.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 6, 2026",
    img: "/blog/fashion.webp",
    slug: "ranked-fashion-accelerator-in-under-90-days",
  },
  {
    category: "Organic Growth",
    title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
    excerpt: "Traffic alone does not create scale. Structure does. This case study cum blog shows how we turned a messy organic setup into a growth system that drove 80K+ clicks and millions of impressions for a leading US-based golf brand.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 7, 2026",
    img: "/blog/golf.webp",
    slug: "80k-organic-clicks-us-golf-dtc-brand-seo-case-study",
  },
  {
    category: "Performance Marketing",
    title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
    excerpt: "If Meta and Google both look profitable, but scaling still feels strangely hard, your attribution model may be the real problem. This breakdown shows how a cleaner reporting view helped unlock a 4.2x ROAS outcome.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 8, 2026",
    img: "/blog/bidet.webp",
    slug: "why-most-paid-campaigns-fail-attribution-model-roas",
  },
    {
    category: ["Fashion", "Fashion Accelerator"],
    title: "The Complete Guide to Launching a Fashion Brand with the Right Fashion Startup Accelerator in India",
    excerpt: "Launching a fashion brand in India is harder than it looks. This guide explains accelerators vs incubators vs execution partners, who needs one, and how to choose the right support for real growth.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 11, 2026",
    img: "/blog/blog4.webp",
    slug: "launch-fashion-brand-startup-accelerator",
  },
  {
    category: ["Fashion", "Fashion Accelerator"],
    title: "Top 7 Fashion Startup Accelerators In India: What Founders Should Know Before Choosing One (2026 Edition)",
    excerpt: "Confused which fashion startup accelerator to join in India? This 2026 guide ranks the Top 7 options and shows why PreCrux is the smartest first choice for most founders.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 12, 2026",
    img: "/blog/blog5.webp",
    slug: "top-fashion-startup-accelerators-in-india",
  },
  {
    category: ["Fashion", "Fashion Accelerator"],
    title: "Fashion Growth Consulting: 7 Game Changing Strategies For D2C Founders",
    excerpt: "Most fashion brands stay busy but don’t actually grow because their systems are misaligned. This guide breaks down how positioning, conversion, retention, and authority need to work together for real D2C growth.",
    author: "Vaibhav M.",
    authorImg: "/team/vaibhav.png", 
    date: "April 14, 2026",
    img: "/blog/blog6.webp",
    slug: "fashion-growth-consulting-d2c-founders",
  },
  
  
];

const categories = ["All", "SEO", "CRO ", "Performance Marketing", "Social Media", "Organic Growth", "Email", "Fashion", "Fashion Accelerator"];

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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;


  const filtered = (activeCategory === "All"
  ? posts
  : posts.filter(p => p.category?.includes(activeCategory))
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <>
      {/* Hero */}
      <section className="diagonal-bg pt-[200px] pb-36 flex items-center justify-center min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Reveal>
            {/* Increased font size to md:text-8xl and used font-semibold to match the "Design & No-Code Insights" weight */}
            <h1
              className="text-6xl md:text-[4rem] text-white font-semibold leading-[1.1] mb-8 tracking-tight"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
The Precrux Journal
            </h1>
          </Reveal>
          <Reveal delay={120}>
            {/* Max-width increased to match the wide line in the screenshot */}
            <p className="text-white/100 text-lg md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
Actionable growth execution insights, real case studies, and systems that actually compound revenue. No fluff, no theory - only what works for ambitious founders.
            </p>
          </Reveal>
        </div>
      </section>


      {/* Blog Grid */}
      <section className="py-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Category filter pills */}
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className="px-5 py-2 rounded-full text-sm transition-all duration-200"
                  style={{
                    fontWeight: 400,
                    background: activeCategory === cat ? "#0f1117" : "#fff",
                    color: activeCategory === cat ? "#fff" : "#4b5563",
                    border: "1px solid #e5e7eb",
                    transform: activeCategory === cat ? "scale(1.04)" : "scale(1)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    if (activeCategory !== cat) { el.style.background = "#0f1117"; el.style.color = "#fff"; }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLButtonElement;
                    if (activeCategory !== cat) { el.style.background = "#fff"; el.style.color = "#4b5563"; }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/blog/${p.slug}`}>
                  <article
                    className="bg-white rounded-2xl overflow-hidden cursor-pointer group h-full"
                    style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-6px) scale(1.015)";
                      el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={p.img}

                        alt={p.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span
  className="inline-block bg-gray-100 text-black-700 text-xs px-3 py-1.5 rounded-full mb-4"
  style={{ fontWeight: 400 }}
>
  {Array.isArray(p.category)
    ? p.category.join(", ")
    : p.category}
</span>
                      <h3
                        className="text-[#0f1117] text-xl leading-snug mb-3"
                        style={{ fontWeight: 600 }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="text-gray-00 text-sm leading-relaxed mb-4 line-clamp-2"
                        style={{ fontWeight: 300 }}
                      >
                        {p.excerpt}
                      </p>
                      <div
                        className="flex items-center gap-4 text-xs text-gray-600 pt-4 border-t border-gray-100"
                        style={{ fontWeight: 300 }}
                      >
                        <span className="flex items-center gap-1.5">
                          <img
  src={p.authorImg}
  alt={p.author}
  className="w-6 h-6 rounded-full object-cover"
/>
                          {p.author}
                        </span>
                        <span>{p.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-full text-sm"
              >
                Previous
              </button>

              <span className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-full text-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}