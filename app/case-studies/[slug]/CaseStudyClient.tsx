"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CTASection from "@/components/CTASection";
import { Urbanist, Poppins } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";
import { caseStudies } from "@/lib/caseStudies";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

type CaseContentBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string; isNote?: boolean }
  | { type: "blockquote"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "feature-list"; items: { title: string; text: string }[] };

  function isParagraph(
  block: CaseContentBlock
): block is { type: "paragraph"; text: string; isNote?: boolean } {
  return block.type === "paragraph";
}

function isList(
  block: CaseContentBlock
): block is { type: "list"; items: string[] } {
  return block.type === "list";
}

function isImage(
  block: CaseContentBlock
): block is { type: "image"; src: string; caption?: string } {
  return block.type === "image";
}

function isFeatureList(
  block: CaseContentBlock
): block is {
  type: "feature-list";
  items: { title: string; text: string }[];
} {
  return block.type === "feature-list";
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

function Reveal({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
}) {
    const ref = useReveal();
    return (
        <div ref={ref} className={className} style={{
            opacity: 0, transform: "translateY(28px)",
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }}>
            {children}
        </div>
    );
}
type RelatedCase = {
  title: string;
  category: string;
  slug: string;
  img: string;
  result: string;
};
function Card({ rc }: { rc: RelatedCase }) {
  return (
    <Link href={`/case-studies/${rc.slug}`} className="block">
      <div className="bg-white rounded-xl p-3 shadow-sm">

        <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
          <img
            src={rc.img}
            alt={rc.title}
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-[10px] text-[#aaa] uppercase tracking-wider">
          {rc.category}
        </span>

        <h3 className="text-[#0f1117] text-[0.95rem] mt-1 mb-1 font-semibold leading-snug">
          {rc.title}
        </h3>

        <p className="text-[#777] text-[0.8rem] leading-snug">
          {rc.result}
        </p>

      </div>
    </Link>
  );
}

type Props = {
  slug: string;
};

export default function CaseStudyPage({ slug }: Props) {
    const cs = caseStudies.find((c) => c.slug === slug);
    const [index, setIndex] = useState(0);
const [nextIndex, setNextIndex] = useState(1);
const [animating, setAnimating] = useState(false);
const articleRef = useRef<HTMLDivElement>(null);
const contentEndRef = useRef<HTMLDivElement>(null);
const [ctaTop, setCtaTop] = useState(200);


useEffect(() => {
  if (!articleRef.current || !contentEndRef.current) return;

  const articleTop = articleRef.current.getBoundingClientRect().top + window.scrollY;
  const contentEndTop = contentEndRef.current.getBoundingClientRect().top + window.scrollY;

  const contentHeight = contentEndTop - articleTop;

  setCtaTop(contentHeight / 2);
}, [cs]);

useEffect(() => {
  if (!cs?.relatedCases) return;

  const interval = setInterval(() => {
    setNextIndex((index + 1) % cs.relatedCases.length);
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cs.relatedCases.length);
      setAnimating(false);
    }, 1800); // animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [index, cs]);

    useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

    if (!cs) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Case study not found.{" "}
                <Link href="/case-studies" className="ml-2 underline text-black">Back to Case Studies</Link>
            </div>
        );
    }

    return (
        <>
            <main className="bg-[#f4f4f4] min-h-screen pt-[110px]">
                <article
  ref={articleRef}
  className="max-w-[680px] mx-auto px-8 py-16 md:py-20 bg-white mb-16 relative"
>
                    <FloatingCTA top={ctaTop} />
                    {/* Category tag */}
                    <Reveal>
                        <span
                            className="inline-block bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full mb-5"
                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                        >
                            {cs.category}
                        </span>
                    </Reveal>

                    {/* Title */}
                    <Reveal delay={40}>
                        <h1
                            className="text-[1.9rem] md:text-[2.2rem] leading-[1.2] text-[#0f1117] mb-4"
                            style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                        >
                            {cs.title}
                        </h1>
                    </Reveal>

                    {/* Hero image */}
                    <Reveal delay={100}>
                        <div className="w-full rounded-lg overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
                            <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                        </div>
                    </Reveal>

                    {/* Metrics strip */}
                    <Reveal delay={120}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden mb-12 border border-gray-100">
                            
                            {cs.metrics.map((m, i) => (
                                <div key={i} className="bg-white text-center py-5 px-3">
                                    <p
                                        className="text-[1.35rem] text-[#0f1117] leading-none mb-1"
                                        style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                                    >
                                        {m.value}
                                    </p>
                                    <p
                                        className="text-[0.72rem] text-[#999] leading-snug"
                                        style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                
                    {/* Body sections */}
                    <div>
  {cs.content.map((block, idx) => {
    switch (block.type) {

      case "heading": {
        const b = block as { type: "heading"; text: string };
        return (
          <Reveal key={idx}>
            <h2 className="text-[#0f1117] text-[1.5rem] mt-10 mb-3 font-bold">
              {b.text}
            </h2>
          </Reveal>
        );
      }

      case "subheading": {
        const b = block as { type: "subheading"; text: string };
        return (
          <Reveal key={idx}>
            <p
              className="text-[#0f1117] text-[1rem] leading-[1.85] mt-6 mb-2 font-semibold"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {b.text}
            </p>
          </Reveal>
        );
      }

      case "paragraph": {
        const b = block as {
          type: "paragraph";
          text: string;
          isNote?: boolean;
        };

        const isCTA =
          typeof b.text === "string" &&
          b.text.includes("Want to get the same results");

        return (
          <Reveal key={idx}>
            <p
              className={`text-[#444] text-[1rem] leading-[1.85] mb-3 ${
                isCTA ? "font-semibold text-[#0f1117]" : ""
              } ${b.isNote ? "italic text-gray-600" : ""}`}
            >
              {b.text}
            </p>
          </Reveal>
        );
      }

      case "image": {
        const b = block as {
          type: "image";
          src: string;
          alt?: string;
          caption?: string;
        };

        return (
          <Reveal key={idx}>
            <div className="my-8 text-center">
              <img
                src={b.src}
                alt={b.alt || ""}
                className="w-full rounded-lg"
              />
              {b.caption && (
                <p className="text-[0.85rem] text-gray-600 mt-2 italic">
                  {b.caption}
                </p>
              )}
            </div>
          </Reveal>
        );
      }

      case "list": {
        const b = block as { type: "list"; items: string[] };

        return (
          <Reveal key={idx}>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {b.items.map((item, i) => (
                <li key={i} className="text-[#444]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        );
      }

      case "feature-list": {
        const b = block as {
  type: "feature-list";
  items: any[];
};

        return (
          <Reveal key={idx}>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              {b.items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-[#444] mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      }

      case "blockquote": {
        const b = block as { type: "blockquote"; text: string };

        return (
          <Reveal key={idx}>
            <blockquote className="my-8 pl-5 italic border-l-2 border-gray-300 text-[#555]">
              {b.text}
            </blockquote>
          </Reveal>
        );
      }

      default:
        return null;
    }
  })}
</div>

                    {/* Tags */}
                    <Reveal>
                        <div className="flex flex-wrap gap-2 mt-10">
                            {cs.tags.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full"
                                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 400 }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Divider */}
                    <div
  ref={contentEndRef}
  className="border-t border-gray-200 mt-16 mb-10"
/>

                    {/* Prev / Next */}
                    <nav className="flex">
                        <div className="flex-1">
                            {cs.prevCase && (
                                <Link href={`/case-studies/${cs.prevCase.slug}`} className="group block">
                                    <span className="flex items-center gap-1.5 text-[#0f1117] text-[0.78rem] mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                        PREVIOUS
                                    </span>
                                    <span className="text-[#777] text-[0.8rem] leading-snug group-hover:text-[#0f1117] transition-colors"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        {cs.prevCase.title.length > 38 ? cs.prevCase.title.slice(0, 38) + "…" : cs.prevCase.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                        {cs.prevCase && cs.nextCase && <div className="w-px bg-gray-200 mx-6 self-stretch" />}
                        <div className="flex-1 text-right">
                            {cs.nextCase && (
                                <Link href={`/case-studies/${cs.nextCase.slug}`} className="group block">
                                    <span className="flex items-center justify-end gap-1.5 text-[#0f1117] text-[0.78rem] mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        NEXT
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                    </span>
                                    <span className="text-[#777] text-[0.8rem] leading-snug group-hover:text-[#0f1117] transition-colors"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        {cs.nextCase.title.length > 38 ? cs.nextCase.title.slice(0, 38) + "…" : cs.nextCase.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mt-10 mb-12" />

                    {/* Related Case Studies */}
                    {cs.relatedCases && cs.relatedCases.length > 0 && (
                        <section>
                            <Reveal>
                                <h2
                                    className="text-[#0f1117] text-[1.2rem] mb-7"
                                    style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                                >
                                    Related Case Studies
                                </h2>
                            </Reveal>
                            {/* 💻 Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-2 gap-6">
  {cs.relatedCases.map((rc, i) => (
    <Reveal key={rc.slug} delay={i * 80}>
      <Link href={`/case-studies/${rc.slug}`} className="group block">
        <div className="w-full overflow-hidden rounded-md mb-3 h-[155px]">
          <img
            src={rc.img}
            alt={rc.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <span className="text-[0.9rem] text-[#aaa] uppercase tracking-wider">
          {rc.category}
        </span>
        <h3 className="text-[#0f1117] font-normal text-[1rem] mt-0.5 mb-1 group-hover:underline">
          {rc.title}
        </h3>
        <p className="text-[#999] text-[0.76rem]">{rc.result}</p>
      </Link>
    </Reveal>
  ))}
</div>

{/* 📱 Mobile (1 rotating card) */}
{/* 📱 Ultra smooth vertical reveal */}
<div className="md:hidden overflow-hidden">
  <div className="relative h-[340px]">

    {/* CURRENT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        animating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Card rc={cs.relatedCases[index]} />
    </div>

    {/* NEXT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        animating ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Card rc={cs.relatedCases[nextIndex]} />
    </div>

  </div>
  
</div>
                        </section>
                    )}
                    
                </article>
            </main>
            

            <CTASection />
        </>
    );
}