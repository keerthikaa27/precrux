"use client";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const services = [
    { name: "Traction Accelerator", slug: "traction-accelerator" },
    { name: "Authority Builder", slug: "authority-builder" },
    { name: "Revenue Engine", slug: "revenue-engine" },
    { name: "Modular Growth Systems", slug: "modular-growth" },
  ];

  return (
    <Reveal>
      <footer className="bg-[#f4f4f4] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* TOP GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12">

            {/* Brand */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="mb-4">
                <img
                  src="/download.png"
                  alt="PreCrux"
                  className="h-7 w-auto"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              <p className="text-sm text-gray-600 leading-relaxed max-w-[260px] md:max-w-[150px]">
                The Growth Execution Accelerator for Ambitious Founders Worldwide.
              </p>

              <div className="flex items-center gap-3 mt-5 justify-center md:justify-start">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0f1117] flex items-center justify-center text-white hover:bg-[#C8F135] hover:text-black transition-colors"
                >
                  <Linkedin size={16} />
                </a>

                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0f1117] flex items-center justify-center text-white hover:bg-[#C8F135] hover:text-black transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2H21.5l-7.59 8.67L23 22h-6.828l-5.35-6.993L4.5 22H1.24l8.122-9.27L1 2h6.914l4.84 6.38L18.244 2Zm-1.2 18h1.88L7.02 4H5.02l12.024 16Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 md:contents">

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[#0f1117] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Home", "About", "Blog", "Case-Studies", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="hover:text-[#0f1117] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[#0f1117] mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-[#0f1117] transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            {/* Newsletter */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[#0f1117] mb-4">
                Get the Latest Inspiration
              </h4>

              <div className="flex flex-col gap-3 max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email *"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f1117] placeholder-gray-400"
                />

                <button className="bg-[#0f1117] text-white font-semibold py-3 rounded-lg text-sm hover:bg-[#C8F135] hover:text-[#0f1117] transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500">

  <div className="relative md:flex md:items-center md:justify-center">

    {/* Center - Copyright */}
    <span className="block text-center">
      Copyright © 2026 Agency All rights reserved
    </span>

    {/* Right - Partner */}
    <div className="flex items-center gap-2 justify-center mt-3 md:mt-0 md:absolute md:right-0">
      <span>Our Partner</span>
      <a
        href="https://webedigital.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/webedigital.png"
          alt="WebeDigital"
          className="h-6 w-auto object-contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </a>
    </div>

  </div>
</div>
        </div>
      </footer>
    </Reveal>
  );
}