"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { Urbanist, Poppins } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";
import { posts } from "@/lib/posts";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });


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

function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = posts.find(p => p.slug === slug);
    const [saveInfo, setSaveInfo] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
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
}, [post]);

 

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    useEffect(() => {
  if (!post?.relatedPosts) return;


  const interval = setInterval(() => {
    setNextIndex((index + 1) % post.relatedPosts.length);
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % post.relatedPosts.length);
      setAnimating(false);
    }, 1800);
  }, 4000);

  return () => clearInterval(interval);
}, [index, post?.relatedPosts]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Post not found.{" "}
                <Link href="/blog" className="ml-2 underline text-black">
                    Back to Blog
                </Link>
            </div>
        );
    }

    
  const blogSchema = post && {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.seoTitle || post.title,
  description: post.seoDescription || "Read this growth breakdown from Precrux.",
  image: `https://precrux.com${post.img}`,
  author: {
    "@type": "Person",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Precrux",
    logo: {
      "@type": "ImageObject",
      url: "https://precrux.com/logoo.png", 
    },
  },
  datePublished: new Date(post.date).toISOString(),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://precrux.com/blog/${post.slug}`,
  },
  keywords: post.keywords?.join(", "),
};

    return (
        <>
        {blogSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
  />
)}
            <main className="bg-[#f4f4f4] min-h-screen pt-[110px]">
                
                <article ref={articleRef} className="max-w-[680px] mx-auto px-8 py-2 md:py-20 bg-white mb-16 relative">
                    <FloatingCTA top={ctaTop} />

                    {/* TITLE */}
                    <Reveal>
                        <h1
                            className="text-[2rem] md:text-[2.4rem] leading-[1.2] text-[#0f1117] mb-4"
                            style={{ fontWeight: 600, fontFamily: urbanist.style.fontFamily }}
                        >
                            {post.title}
                        </h1>
                    </Reveal>

                    {/* META */}
                    <Reveal delay={80}>
                        <p
                            className="text-[#555] text-[0.85rem] mb-10"
                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                        >

                            <span
                                className="text-[#0f1117]"
                                style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                            >
                                By{" "}
                                {post.author}
                                {" "}
                                / <time>{post.date}</time>
                            </span>
                        </p>
                    </Reveal>

                    {/* IMAGE */}
                    <Reveal delay={120}>
                        <div className="w-full rounded-lg overflow-hidden mb-12" style={{ aspectRatio: "16/9" }}>
                            <img src={post.img} alt={post.title} className="w-full h-full object-contain" />
                        </div>
                    </Reveal>

                    {/* CONTENT */}
                    <div className="post-body">
                        {post.content.map((block, idx) => {
                            if (block.type === "image") {
  return (
    <Reveal key={idx} delay={idx * 40}>
      <div className="my-10 text-center">
        <img
          src={block.src}
          alt={block.alt || "Blog image"}
          className="w-full rounded-lg object-contain"
        />

        {block.caption && (
          <p
            className="text-[0.85rem] text-gray-600 mt-2 italic"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            {block.caption}
          </p>
        )}
      </div>
    </Reveal>
  );
}

if (block.type === "list") {
  return (
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="text-[#333] text-[1.05rem] leading-[1.8]"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            {item}
          </li>
        ))}
      </ul>
  );
}

if (block.type === "subheading") {
  return (
      <h3
        className="text-[#0f1117] text-[1.1rem] md:text-[1.2rem] mt-8 mb-3"
        style={{
          fontWeight: 600,
          fontFamily: urbanist.style.fontFamily,
        }}
      >
        {block.text}
      </h3>
  );
}

if (block.type === "feature-list") {
  return (
      <ul className="list-disc pl-6 mb-8 space-y-5">
        {block.items.map((item, i) => (
          <li key={i}>
            {/* Bold heading */}
            <span
              className="font-semibold text-[#0f1117]"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {item.title}
            </span>

            {/* Description */}
            <p
              className="text-[#333] text-[1.05rem] leading-[1.8] mt-1"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
  );
}
                            if (block.type === "paragraph") {
                                return (
                                        <p
                                            className="text-[#333] text-[1.0625rem] leading-[1.85] mb-6"
                                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                                        >
                                            {block.text}
                                        </p>
                                );
                            }
                            if (block.type === "link-paragraph") {
  return (
    <p className="mb-4 text-[#333] leading-relaxed">
      {block.before}
      <a
        href={block.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline underline-offset-2 hover:text-blue-500"
      >
        {block.linkText}
      </a>
      {block.after}
    </p>
  );
}

                            if (block.type === "heading") {
                                return (
                                        <h2
                                            className="text-[#0f1117] text-[1.375rem] leading-[1.3] mt-12 mb-4"
                                            style={{
                                                fontWeight: 700,
                                                fontFamily: urbanist.style.fontFamily,
                                            }}
                                        >
                                            {block.text}
                                        </h2>
                                );
                            }

                            if (block.type === "blockquote") {
                                return (
                                        <blockquote
                                            className="my-8 pl-6 text-[#333] text-[1.05rem] leading-[1.75] italic"
                                            style={{
                                                borderLeft: "3px solid #d1d5db",
                                                fontWeight: 400,
                                                fontFamily: poppins.style.fontFamily,
                                            }}
                                        >
                                            {block.text}
                                        </blockquote>
                                );
                            }

                            if (block.type === "table") {
  return (
    <div className="overflow-x-auto my-10">
      <table className="w-full border border-gray-300 text-left text-sm">
        <thead>
          <tr>
            {block.headers.map((header, i) => (
              <th key={i} className="border px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

                            return null;
                        })}
                    </div>

                    <div
  ref={contentEndRef}
  className="border-t border-gray-200 mt-16 mb-10"
/>

                    {/* NAV */}
                    <nav className="flex justify-between gap-6">
                        {/* Previous */}
                        <div className="flex-1">
                            {post.prevPost && (
                                <Link href={`/blog/${post.prevPost.slug}`} className="group block">
                                    <span
                                        className="block text-[#888] text-[0.75rem] uppercase tracking-widest mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                    >
                                        ← Previous
                                    </span>
                                    <span
                                        className="block text-[#0f1117] text-[0.9rem] leading-snug group-hover:underline"
                                        style={{ fontWeight: 500, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {post.prevPost.title}
                                    </span>
                                </Link>
                            )}
                        </div>

                        {/* Next */}
                        <div className="flex-1 text-right">
                            {post.nextPost && (
                                <Link href={`/blog/${post.nextPost.slug}`} className="group block">
                                    <span
                                        className="block text-[#888] text-[0.75rem] uppercase tracking-widest mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                    >
                                        Next →
                                    </span>
                                    <span
                                        className="block text-[#0f1117] text-[0.8rem] leading-snug group-hover:underline"
                                        style={{ fontWeight: 500, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {post.nextPost.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>

                    <div className="border-t border-gray-200 mt-10 mb-14" />

                    {/* ── Related Posts ── */}
                    {post.relatedPosts && post.relatedPosts.length > 0 && (
                        <section>
                            <Reveal>
                                <h2
                                    className="text-[#0f1117] text-[1.5rem] mb-8"
                                    style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                >
                                    Related Posts
                                </h2>
                            </Reveal>

                            {/* 💻 Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-2 gap-6">
  {post.relatedPosts.map((rp, i) => (
    <Reveal key={rp.slug} delay={i * 80}>
      <Link href={`/blog/${rp.slug}`} className="group block">
        <div className="w-full overflow-hidden rounded-md mb-4 h-[180px]">
          <img
            src={rp.img}
            alt={rp.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-[#0f1117] text-[1rem] leading-snug mb-2 group-hover:underline">
          {rp.title}
        </h3>
        <p className="text-[#0f1117] text-[0.85rem]">{rp.date}</p>
      </Link>
    </Reveal>
  ))}
</div>

{/* 📱 Mobile (smooth vertical reveal) */}
<div className="md:hidden overflow-hidden rounded-xl mt-4">
  <div className="relative h-[320px]">

    {/* CURRENT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link href={`/blog/${post.relatedPosts[index].slug}`} className="block">
        <div className="bg-white rounded-xl p-3 shadow-sm">

          <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
            <img
              src={post.relatedPosts[index].img}
              alt={post.relatedPosts[index].title}
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-[#0f1117] text-[1rem] font-semibold leading-snug mb-1">
            {post.relatedPosts[index].title}
          </h3>

          <p className="text-[#777] text-sm">
            {post.relatedPosts[index].date}
          </p>
        </div>
      </Link>
    </div>

    {/* NEXT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animating ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href={`/blog/${post.relatedPosts[nextIndex].slug}`} className="block">
        <div className="bg-white rounded-xl p-3 shadow-sm">

          <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
            <img
              src={post.relatedPosts[nextIndex].img}
              alt={post.relatedPosts[nextIndex].title}
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-[#0f1117] text-[1rem] font-semibold leading-snug mb-1">
            {post.relatedPosts[nextIndex].title}
          </h3>

          <p className="text-[#777] text-sm">
            {post.relatedPosts[nextIndex].date}
          </p>
        </div>
      </Link>
    </div>

  </div>
</div>
                        </section>
                    )}

                    {/* ── Divider ── */}
                    <div className="border-t border-gray-200 mt-14 mb-0.01" />

                </article>
            </main>

            <CTASection />
        </>
    );
}
