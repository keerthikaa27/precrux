"use client"
import Reveal from "@/components/Reveal";
import { useEffect, useState } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 20 20"
          fill={s <= Math.floor(rating) ? "#F59E0B" : "#E5E7EB"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    rating: 4.7,
    text: "We were struggling to rank for our core keywords despite working with multiple agencies. Precrux delivered #1 rankings across almost all of them within months. Their technical SEO systems completely changed our visibility in the fashion startup accelerator space.",
    name: "Dr. Debasis Chakraborty",
    role: "Founder & CEO, Dariaan",
    img: "reviews/daarian.png",
  },
  {
    rating: 4.9,
    text: "We started from zero organic presence. Precrux took us from nothing to strong, consistent growth in just a few months. Their content systems and SEO strategy gave us compounding results that are still working today.",
    name: "Manisha Maheshwari",
    role: "Founder, Moh by Meera",
    img: "reviews/moh.webp",
  },
  {
    rating: 4.8,
    text: "We had worked with another agency before and saw zero results. Within weeks of joining Precrux our organic traffic and leads started growing exponentially. Their systems delivered instant momentum and have been compounding ever since.",
    name: "Praveen Yadav",
    role: "Founder, BOXnMOVE",
    img: "reviews/boxnmove.jpg",
  },
  {
    rating: 5.0,
    text: "Precrux took our messy website and gave it a complete professional revamp. They introduced us to proper SEO, built strong content and blog systems from scratch, and our social media presence grew significantly. The results were fast and very noticeable.",
    name: "Madhu Kargunda",
    role: "Founder, Tengin",
    img: "reviews/tengin.webp",
  },
];

function ReviewCard({ review, animating, direction }: {
  review: typeof reviews[0];
  animating: boolean;
  direction: "in" | "out";
}) {
  return (
    <div
      className="flex flex-col px-6 pt-8 pb-0 rounded-2xl overflow-hidden"
      style={{
        background: "#ffffff",
        border: "1.5px solid #e5e7eb",
        minHeight: "420px",
        transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
        transform: animating
          ? direction === "out"
            ? "translateY(-30px)"
            : "translateY(30px)"
          : "translateY(0)",
        opacity: animating ? 0 : 1,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#0f1117]" style={{ fontSize: "1.7rem", fontWeight: 800 }}>
          {review.rating}
        </span>
        <StarRating rating={review.rating} />
      </div>

      <p
        className="text-black-600 text-sm leading-relaxed flex-1 mb-6"
        style={{ fontWeight: 300, fontSize: "0.9rem" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      <div
        className="flex items-center gap-3 px-5 py-4 -mx-6"
        style={{
          background: "#f3f4f6",
          borderTop: "1px solid #e5e7eb",
          marginTop: "auto",
        }}
      >
        <img
          src={review.img}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-[#0f1117] text-sm" style={{ fontWeight: 600 }}>
            {review.name}
          </p>
          <p className="text-black-500 text-xs mt-0.5" style={{ fontWeight: 300 }}>
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  // Index of the first visible review (slot 2), slot 3 is always index+1
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setAnimating(true);

      // After exit, swap content, then enter
      setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % reviews.length);
        setAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const review1 = reviews[startIndex % reviews.length];
  const review2 = reviews[(startIndex + 1) % reviews.length];

  return (
    <Reveal>
      <style>{`
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
        .review-enter {
          animation: slideInUp 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl text-[#0f1117] text-center mb-16"
            style={{ fontWeight: 400 }}
          >
            What Clients Say About Us
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* 💻 Desktop (UNCHANGED) */}
<div className="hidden md:grid grid-cols-3 gap-6 items-stretch">

  {/* Static Card */}
  <div
    className="flex flex-col items-center text-center px-6 pt-10 pb-8 rounded-2xl overflow-hidden"
    style={{
      background: "#f3f4f6",
      border: "1.5px solid #e5e7eb",
      minHeight: "420px",
    }}
  >
    {/* your existing static content */}
    <div className="flex flex-col items-center gap-3 flex-1">
      <p className="text-[#0f1117]" style={{ fontSize: "3.5rem", fontWeight: 300 }}>
        4.9
      </p>
      <StarRating rating={4.9} />
      <p className="text-black-1000 text-sm mt-1">(50+ Reviews)</p>

      <p className="text-[#0f1117] leading-snug mt-4" style={{ fontWeight: 500, fontSize: "1.3rem" }}>
        Where Execution Meets Real Compounding Growth
      </p>

      <p className="text-[#4f4a4a] mt-5 text-sm leading-relaxed">
        Trusted by founders in<br />US • UK • UAE • IN • AU
      </p>
    </div>
  </div>

  {/* Desktop rotating reviews */}
  <ReviewCard
    key={`r1-${startIndex}`}
    review={review1}
    animating={animating}
    direction={animating ? "out" : "in"}
  />
  <ReviewCard
    key={`r2-${startIndex}`}
    review={review2}
    animating={animating}
    direction={animating ? "out" : "in"}
  />
</div>


{/* 📱 Mobile layout */}
<div className="md:hidden flex flex-col gap-6 items-center">

  {/* Static Card */}
  <div
    className="w-full max-w-md flex flex-col items-center text-center px-6 pt-10 pb-8 rounded-2xl overflow-hidden"
    style={{
      background: "#f3f4f6",
      border: "1.5px solid #e5e7eb",
    }}
  >
    <div className="flex flex-col items-center gap-3">
      <p className="text-[#0f1117]" style={{ fontSize: "3rem", fontWeight: 300 }}>
        4.9
      </p>
      <StarRating rating={4.9} />
      <p className="text-sm">(50+ Reviews)</p>

      <p className="text-[#0f1117] mt-3 text-lg">
        Where Execution Meets Real Compounding Growth
      </p>

      <p className="text-[#4f4a4a] mt-3 text-xs">
        Trusted by founders in<br />US • UK • UAE • IN • AU
      </p>
    </div>
  </div>

  {/* 🔥 ONLY ONE rotating review */}
  <div className="w-full max-w-md">
    <ReviewCard
      key={`mobile-${startIndex}`}
      review={reviews[startIndex]}
      animating={animating}
      direction={animating ? "out" : "in"}
    />
  </div>

</div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}