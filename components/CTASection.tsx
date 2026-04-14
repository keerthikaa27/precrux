"use client";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  return (
    <Reveal>
      {/* 1. Ensure section is relative */}
      <section className="diagonal-bg py-24 relative overflow-hidden" style={{ background: "#12141D" }}>

        {/* 2. Background Image moved outside the content div */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <img
            src="/bgimage.png"
            alt=""
            style={{
              position: "absolute",

              /* 🚀 go BIG but controlled */
              width: "3550px",   // 🔥 fixed large size (NOT %)
              height: "auto",

              /* perfect centering */
              top: "100%",
              left: "53%",
              transform: "translate(-50%, -50%) rotate(-18deg)",

              /* important */
              objectFit: "contain",

              /* subtle bg feel */
              opacity: 0.04,
              filter: "brightness(0.9)",

              /* prevent shrinking */
              maxWidth: "none",
            }}
          />
        </div>

        {/* 3. Content stays in its restricted-width container */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6">
              <img
                src="/team/vaibhav.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-5xl md:text-5x2 font-semibold text-white mb-4">
              Meet the Minds Behind the Magic
            </h2>
            <p className="text-white/100 mb-10 text-lg">
              Get a free 30-minute Growth Diagnostic call with our lead strategist. 
            </p>
          </Reveal>

          <Reveal>
            <button
  onClick={() => router.push("/#hero")}
  className="btn-primary text-base cursor-pointer px-10 py-4 min-w-[260px] text-center"
>
  Get Your Free Growth Diagnostic
</button>
          </Reveal>

          <div className="mt-10">
            <p className="text-white/100 text-sm mb-2">Prefer Email?</p>
            <a
              href="mailto:info@precrux.com"
              className="text-white font-semibold underline underline-offset-4 hover:text-[#C8F135] transition-colors"
            >
              info@precrux.com
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

