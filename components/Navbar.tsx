"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";


const services = [
  { label: "Traction Accelerator", href: "/services/traction-accelerator" },
  { label: "Authority Builder", href: "/services/authority-builder" },
  { label: "Revenue Engine", href: "/services/revenue-engine" },
  { label: "Modular Growth Systems", href: "/services/modular-growth" },

];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blog/");
  const isCaseStudyPage = pathname.startsWith("/case-studies/");
  const isDetailPage = isBlogPost || isCaseStudyPage;
  const [showModal, setShowModal] = useState(false);



  const handleScheduleClick = () => {
  setMobileOpen(false);
  setShowModal(true);
};

  return (
    <header
      className={`${isBlogPost || isCaseStudyPage ? "fixed" : "absolute"} top-0 left-0 right-0 z-50`}
      style={{
        background: isBlogPost || isCaseStudyPage ? "#ffffff" : "transparent",
      }}

    >      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {isBlogPost || isCaseStudyPage ? (
            <img
              src="/download.png"
              alt="PreCrux"
              className="h-8 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
          ) : (
            <img src="/logoo.png" alt="Web Rocket" className="h-20 w-auto" />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isBlogPost || isCaseStudyPage ? "text-[#0f1117]" : "text-white"}`}>
          <Link href="/about" className="nav-link hover:text-[#C8F135] transition-colors">
            About
          </Link>

          {/* Services Dropdown Parent */}
          <div
            className="relative h-[72px] flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 hover:text-[#C8F135] transition-colors">
              Services <ChevronDown size={14} />
            </button>

            {/* The White Dropdown Box */}
            <div
              className={`absolute top-[72px] left-0 w-52 bg-white rounded-xl py-2 shadow-2xl transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-5 py-2.5 text-sm text-black hover:bg-black/5 transition-colors font-normal"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="nav-link hover:text-[#C8F135] transition-colors">Blog</Link>
          <Link href="/case-studies" className="nav-link hover:text-[#C8F135] transition-colors">Case Studies</Link>
          <Link href="/get-a-quote" className="nav-link hover:text-[#C8F135] transition-colors">Get a Quote</Link>
          <Link href="/contact" className="nav-link hover:text-[#C8F135] transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <button
          onClick={handleScheduleClick}
className={`hidden lg:inline-flex items-center gap-2 font-normal text-sm px-5 py-2.5 rounded-full transition-colors duration-700 ease-in-out
  ${
    isDetailPage
      ? "bg-[#C8F135] text-[#0f1117]"
      : "bg-white text-[#0f1117] hover:bg-[#C8F135]"
  }
`}        >
          Schedule a Call Now
        </button>

        {/* Mobile toggle */}
        <button className={`lg:hidden ${isBlogPost || isCaseStudyPage ? "text-[#0f1117]" : "text-white"}`} onClick={() => setMobileOpen(!mobileOpen)}>          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f1117] border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4 text-white text-base font-medium">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#C8F135]">About</Link>
          {/* Services Accordion */}
<div>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="flex items-center justify-between w-full py-2"
  >
    <span>Services</span>
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
    />
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      servicesOpen ? "max-h-60 mt-2" : "max-h-0"
    }`}
  >
    <div className="flex flex-col gap-2 pl-3 border-l border-white/10">
      {services.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          onClick={() => setMobileOpen(false)}
          className="text-gray-300 hover:text-white text-sm py-1.5"
        >
          {s.label}
        </Link>
      ))}
    </div>
  </div>
</div>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:text-[#C8F135]">Blog</Link>
          <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="hover:text-[#C8F135]">Case Studies</Link>
          <Link href="/get-a-quote" onClick={() => setMobileOpen(false)} className="hover:text-[#C8F135]">Get a Quote</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#C8F135]">Contact</Link>
          <button onClick={handleScheduleClick} className="mt-2 text-center bg-white text-[#0f1117] font-semibold px-5 py-3 rounded-full hover:bg-[#C8F135] transition-colors">
            Schedule a Call Now
          </button>
        </div>
      )}
      {showModal && <BookingModal onClose={() => setShowModal(false)} />}
    </header>
  );
}
