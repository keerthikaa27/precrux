"use client";
import { useEffect, useRef, useState } from "react";
import DetailsModal from "./DetailsModel";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate = 1; // 0.5 = half speed, 0.75 = 75%, 1 = normal
  }
}, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => {
      el.querySelectorAll(".fade-up").forEach((node, i) => {
        setTimeout(() => node.classList.add("visible"), i * 120);
      });
    }, 100);
  }, []);

  return (
    <>
      <section id="hero"
        ref={ref}
        className="min-h-screen flex items-center justify-center pt-[72px] relative overflow-hidden"
        style={{ background: "#12141D" }}
      >
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
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-18deg)",

              /* important */
              objectFit: "contain",

              /* subtle bg feel */
              opacity: 0.18,
              filter: "brightness(0.4)",

              /* prevent shrinking */
              maxWidth: "none",
            }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(15,17,23,0.55)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="fade-up flex items-center gap-3 mb-8 flex-wrap justify-center">
            <div className="relative inline-flex items-center justify-center">
              <span style={{ fontFamily: "var(--font-urbanist)", fontWeight: 900, fontSize: "1.3rem", color: "white", lineHeight: 1 }}>C</span>
              <span className="absolute" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8341C", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            </div>
            <span className="text-white text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-poppins)" }}>
              TOP GROWTH EXECUTION ACCELERATOR FOR AMBITIOUS FOUNDERS

            </span>
          </div>

          <h1 className="fade-up text-white mb-8" style={{ fontFamily: "var(--font-urbanist)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, lineHeight: "1.2", letterSpacing: "-0.03em", maxWidth: "900px" }}>
            Where Business Growth Becomes  Predictable and Compounding

          </h1>

          <p className="fade-up text-white/100 mb-12" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", fontWeight: 400, lineHeight: "1.75", maxWidth: "720px" }}>
We build self-sustaining growth infrastructure for founder-led startups and brands — technical systems that compound revenue without endless agency dependency.
          </p>
          <div className="fade-up mb-16">
            <button
              ref={btnRef}
              onClick={() => setShowModal(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={blinking ? "book-btn-blink" : ""}
              style={{
                background: isHovered ? "#A6D21E" : "#C8F135",
                color: "#0f1117",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "14px 40px",
                borderRadius: "9999px",
                display: "inline-block",
                letterSpacing: "0.01em",
                cursor: "pointer",
                border: "none",
                transition: "all 0.3s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered ? "0 0 25px rgba(200, 241, 53, 0.4)" : "none",
                fontFamily: "var(--font-poppins)",
                outline: blinking ? "3px solid #C8F135" : "none",
                outlineOffset: "5px",
              }}
            >
              Free Growth Diagnostic 
            </button>
          </div>

          {/* NEW VIDEO SECTION */}
          <div className="fade-up w-[100%] lg:w-[100%] mt-4"> {/* Increased max-w to 7xl for more width */}
            <div
              className="relative group overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#12141D]"
              style={{
                border: "clamp(4px, 1.5vw, 15px) solid #2a2d36", // ADJUST WIDTH (12px) AND COLOR (#2a2d36) HERE
                padding: "2px", // Tiny gap to separate video from border for extra detail
              }}
            >
              <video
  key="hero-video"
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full aspect-video object-cover opacity-90 rounded-2xl"
>
  <source src="/herovideo.mp4" type="video/mp4" />
</video>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]" />
            </div>
          </div>



        </div>
      </section>

      {showModal && <DetailsModal onClose={() => setShowModal(false)} />}
    </>
  );
}
