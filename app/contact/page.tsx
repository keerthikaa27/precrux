"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Precrux. Tell us your growth goals and we’ll build a clear, actionable strategy to scale your brand.",
};
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Controlled form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");


  const handleSendMessage = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, company, service, message }),
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please email us at info@precrux.com");
      setIsSubmitting(false);
      return;
    } 
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 400, behavior: "smooth" });
    
  };

  return (
    <>
      {/* Hero */}
      
      <section className="pt-[100px] relative" style={{ background: "#0f1117", paddingBottom: "100px" }}>
        <div className="max-w-7xl mx-auto px-6 pt-20 pd-12 text-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <img
              src="/bgimage.png"
              alt=""
              style={{
                position: "absolute",
                width: "4300px",
                height: "auto",
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-18deg)",
                objectFit: "contain",
                opacity: 0.18,
                filter: "brightness(0.4)",
                maxWidth: "none",
              }}
            />
          </div>
          <Reveal>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 " style = {{fontSize: "clamp(3rem, 6vw, 5rem)"}}>
            Let&apos;s Build<br />Your Growth Engine

          </h1>
          <p className="text-white/80 text-sm md:text-base leading-[1.6] md:leading-[1.8] max-w-[90%] md:max-w-2xl mx-auto px-4 md:px-0">
  Tell us where your growth feels stuck — traffic, conversions, or scaling.  
  We’ll break it down and come back with a clear, actionable plan tailored to your brand.
</p>
</Reveal>
        </div>
      </section>
      

      <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[700px]">
         <div className="block lg:hidden h-full  flex-col">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-fade-in">
                  <div className="flex justify-center mb-10">
                    <div className="checkmark-wrapper">
                      <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-[#0f1117] mb-4">Message Received!</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
                    Thanks for reaching out. We&apos;ve grabbed your message and our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold uppercase tracking-widest text-[#0f1117] border-b-2 border-[#C8F135] pb-1 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <Reveal>
                <div className="space-y-6 flex flex-col h-full bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-[#0f1117] mb-4 md:mb-8">Send Us a Message</h2>
                  {error && (
    <p className="text-red-500 text-sm">{error}</p>
  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Your company name"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                  />

                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>Traction Accelerator</option>
                    <option>Authority Builder</option>
                    <option>Revenue Engine</option>
                    <option>Modular Growth Systems</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none"
                  />

                  <div className="mt-auto">
                    <button
                      onClick={handleSendMessage}
                      disabled={isSubmitting}
                      className={`btn-primary w-full text-center text-base ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
                </Reveal>
              )}
            </div>
            <Reveal>
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f1117] mb-8">Get In Touch</h2>
              <div className="space-y-14">
                {[
                  { icon: Mail, label: "Email", value: "info@precrux.com" },
                  { icon: Phone, label: "Phone", value: "+91 9376091963" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#0f1117]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest">{label}</p>
                      <p className="font-medium text-[#0f1117]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-5 bg-[#0f1117] rounded-2xl mb-12 max-w-md">
                <div className="w-10 h-10 rounded-full overflow-hidden mb-10">
                  <img
                    src="/team/vaibhav.png"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-black text-xl mb-2">Meet the Minds Behind the Magic</h3>
                <p className="text-white/70 text-sm mb-6">Get a free 30-minute Growth Diagnostic call with our lead strategist.</p>
                <button
                  onClick={() => setShowBooking(true)}
                  className="btn-primary text-sm cursor-pointer"
                >
                  Book Your Free Growth Diagnostic

                </button>
              </div>
            </div>
            </Reveal>
<Reveal>
            {/* Form Column */}
            <div className="hidden lg:flex h-full flex-col">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-fade-in">
                  <div className="flex justify-center mb-10">
                    <div className="checkmark-wrapper">
                      <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-[#0f1117] mb-4">Message Received!</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
                    Thanks for reaching out. We&apos;ve grabbed your message and our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold uppercase tracking-widest text-[#0f1117] border-b-2 border-[#C8F135] pb-1 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-9 flex flex-col h-full">
                  <h2 className="text-3xl font-bold text-[#0f1117] mb-8">Send Us a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Your company name"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                  />

                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>Traction Accelerator</option>
                    <option>Authority Builder</option>
                    <option>Revenue Engine</option>
                    <option>Modular Growth Systems</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none"
                  />

                  <div className="mt-auto">
                    <button
                      onClick={handleSendMessage}
                      disabled={isSubmitting}
                      className={`btn-primary w-46 text-center text-base ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              )}
            </div>
            </Reveal>

          </div>
        </div>
      </section>

      {showBooking && (
        <BookingModal onClose={() => setShowBooking(false)} />
      )}
    </>
  );
}