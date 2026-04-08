"use client";
import Reveal from "./Reveal";

export default function WhyChoose() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14">
          <polygon points="32,6 38,22 56,22 42,33 47,50 32,40 17,50 22,33 8,22 26,22" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
          <line x1="32" y1="40" x2="32" y2="52" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
      title: "Execution-first Approach",
      desc: "We don't just audit or advise. We build and implement complete growth systems end-to-end so you see real results fast.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14">
          <polyline points="8,48 22,30 34,36 48,16 56,20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="56" cy="16" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <line x1="8" y1="52" x2="56" y2="52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="8" y1="48" x2="8" y2="52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      title: "Systems that compound",
      desc: "We create technical infrastructure and processes that keep driving revenue and traffic long after the main project ends.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14">
          <circle cx="26" cy="20" r="10" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M6 54 C6 40 46 40 46 54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <line x1="44" y1="24" x2="58" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="51" y1="17" x2="51" y2="31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      title: "Founder-first Partnership",
      desc: "We think and operate like founders. You get a true growth partner who understands your challenges and owns the outcome with you.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14">
          <rect x="8" y="38" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <rect x="27" y="26" width="10" height="28" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <rect x="46" y="14" width="10" height="40" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <polyline points="13,30 32,18 51,10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="51" cy="10" r="3" fill="currentColor" />
        </svg>
      ),
      title: "Focused On Real Revenue",
      desc: "Every system we build is tied directly to revenue, ROAS, conversions, and predictable growth — never vanity metrics.",
    },
  ];

  return (
    <Reveal>
    <section className="w-full bg-white py-24 px-6">
      <style>{`
        @keyframes wc-fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wc-heading { animation: wc-fadeUp 0.5s ease both; }
        .wc-item { animation: wc-fadeUp 0.55s ease both; }
        .wc-item:nth-child(1) { animation-delay: 0.05s; }
        .wc-item:nth-child(2) { animation-delay: 0.15s; }
        .wc-item:nth-child(3) { animation-delay: 0.25s; }
        .wc-item:nth-child(4) { animation-delay: 0.35s; }
        .wc-item { transition: transform 0.3s ease; }
        .wc-item:hover { transform: translateY(-4px); }
        .wc-item .wc-icon { transition: transform 0.3s ease, color 0.3s ease; color: #1a1a1a; }
        .wc-item:hover .wc-icon { transform: scale(1.12); color: #caf105; }
        .wc-item .wc-bar { transition: width 0.3s ease; }
        .wc-item:hover .wc-bar { width: 48px !important; }
        .wc-item .wc-title { transition: color 0.3s ease; }
        .wc-item:hover .wc-title { color: #caf105 !important; }
      `}</style>

      {/* Section Heading */}
      <h2
  className="wc-heading text-center text-3xl md:text-5xl font-medium text-[#0f1117] mb-20"
>
        Why Choose Precrux
      </h2>

      {/* Grid */}
      <Reveal>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {features.map((item, i) => (
          <div key={i} className="wc-item flex items-start gap-8 cursor-default">
            {/* Icon */}
            <div className="wc-icon flex-shrink-0 mt-1">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3
  className="wc-title text-2xl font-semibold text-[#0f1117] mb-3"
>
                {item.title}
              </h3>
              <div className="wc-bar w-8 h-[2px] bg-[#caf105] mb-5" style={{ width: "32px" }} />
              <p
                className="text-[15px] text-[#484747] leading-relaxed"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
    </Reveal>
  );
}