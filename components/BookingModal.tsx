"use client";
import { useState } from "react";

const SERVICES = [
  { label: "Traction Accelerator", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=100&q=80" },
  { label: "Authority Builder", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&q=80" },
  { label: "Revenue Engine", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=100&q=80" },
  { label: "Modular Growth Systems", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80" },
];

const TIME_SLOTS = [
  "08:00 am","08:30 am","09:00 am","09:30 am",
  "10:00 am","10:30 am","11:00 am","11:30 am",
  "12:00 pm","12:30 pm","01:00 pm","01:30 pm",
  "02:00 pm","02:30 pm","03:00 pm","03:30 pm",
  "04:00 pm","04:30 pm",
];

const DAYS = ["M","T","W","T","F","S","S"];
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

type Step = "service" | "datetime" | "info" | "verify" | "confirm" | "success";

interface Booking {
  service: string[];
  date: Date | null;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comments: string;
}

/* ── Professional SVG icons for sidebar ── */
function SidebarIcon({ step }: { step: string }) {
  if (step === "service") return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="32" height="40" rx="4" stroke="#0f1117" strokeWidth="2" fill="none"/>
      <path d="M16 16h16M16 24h16M16 32h10" stroke="#0f1117" strokeWidth="2" strokeLinecap="round"/>
      <rect x="18" y="1" width="12" height="6" rx="2" fill="#0f1117"/>
    </svg>
  );
  if (step === "datetime") return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="40" height="34" rx="4" stroke="#0f1117" strokeWidth="2" fill="none"/>
      <path d="M4 20h40" stroke="#0f1117" strokeWidth="2"/>
      <path d="M16 6v8M32 6v8" stroke="#0f1117" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="30" r="2" fill="#0f1117"/>
      <circle cx="24" cy="30" r="2" fill="#0f1117"/>
      <circle cx="32" cy="30" r="2" fill="#0f1117"/>
      <circle cx="16" cy="38" r="2" fill="#0f1117"/>
      <circle cx="24" cy="38" r="2" fill="#0f1117"/>
    </svg>
  );
  if (step === "info" || step === "verify") return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="#0f1117" strokeWidth="2" fill="none"/>
      <path d="M14 18h20M14 26h20M14 34h12" stroke="#0f1117" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 32l8 8" stroke="#0f1117" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (step === "confirm") return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#0f1117" strokeWidth="2" fill="none"/>
      <path d="M14 24l7 7 13-14" stroke="#0f1117" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return null;
}

export default function BookingModal({
  onClose,
  preselectedService,
}: {
  onClose: () => void;
  preselectedService?: string;
}) {
  const [step, setStep] = useState<Step>(preselectedService ? "datetime" : "service");

  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  const [booking, setBooking] = useState<Booking>({
    service: preselectedService ? [preselectedService] : [],
    date: null,
    time: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [codeInput, setCodeInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const selectedDateStr = booking.date
    ? `${MONTHS[booking.date.getMonth()]} ${booking.date.getDate()}, ${booking.date.getFullYear()}`
    : "";
  const selectedDayStr = booking.date ? WEEKDAYS[booking.date.getDay()] : "";

  const sidebarContent: Record<string, { title: string; desc: string }> = {
    service: { title: "Service Selection", desc: "Please select a service for which you want to schedule an appointment" },
    datetime: { title: "Select Date & Time", desc: "Please select date and time for your appointment" },
    info: { title: "Enter Your Information", desc: "Please enter your contact information" },
    verify: { title: "Enter Your Information", desc: "Please enter your contact information" },
    confirm: { title: "Verify Order Details", desc: "Double check your reservation details and click submit" },
    success: { title: "Booking Confirmed", desc: "Your appointment has been successfully scheduled" },
  };
  const sidebar = sidebarContent[step];

  // ── Send booking email then show success ──
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...booking,
          date: selectedDateStr,
        }),
      });
    } catch (err) {
      console.error("Booking submission error:", err);
    } finally {
      setIsSubmitting(false);
      setStep("success");
    }
  };

  return (
    <div
      className="
  fixed inset-0 z-[100] flex 
  items-end md:items-center 
  justify-center 
  p-0 md:p-4 
"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
    >
      <div
        
  className="
    bg-white shadow-2xl w-full flex 
    rounded-none md:rounded-2xl
    flex-col md:flex-row
    h-[100vh] md:h-[620px]
    max-h-[100vh] md:max-h-[calc(100vh-100px)]
  "
  style={{
    maxWidth: "900px",
    overflow: "hidden",
    animation: "modalSlideIn 0.3s ease",
  }}
>

        <style>{`
          @keyframes modalSlideIn {
            from { opacity: 0; transform: translateY(20px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes successPop {
            0%   { transform: scale(0); opacity: 0; }
            60%  { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .success-icon { animation: successPop 0.5s ease 0.2s both; }
          .success-text { animation: modalSlideIn 0.4s ease 0.5s both; }
        `}</style>

        {/* ── Left sidebar ── */}
        <div
          className="hidden md:flex w-[240px] shrink-0  flex-col items-center justify-between py-10 px-6 text-center border-r border-gray-100"
          style={{ background: "#fafafa" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="mb-1">
              {step !== "success" && <SidebarIcon step={step} />}
              {step === "success" && (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" fill="#22c55e" opacity="0.15"/>
                  <circle cx="24" cy="24" r="16" stroke="#22c55e" strokeWidth="2" fill="none"/>
                  <path d="M14 24l7 7 13-14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <h3 className="font-semibold text-[#0f1117] text-base leading-snug">{sidebar.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{sidebar.desc}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[#0f1117] text-xs">Questions?</p>
            <p className="text-xs text-blue-500 mt-1">Call (858) 939-3746 for help</p>
          </div>
        </div>

        {/* ── Right content ── */}
        <div className="flex-1 flex flex-col min-h-0">

          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 shrink-0">
            <h2 className="font-semibold text-[#0f1117] text-lg">
              {step === "service" && "Available Services"}
              {step === "datetime" && "Date & Time Selection"}
              {(step === "info" || step === "verify") && "Customer Information"}
              {step === "confirm" && "Verify Order Details"}
              {step === "success" && "Booking Confirmed"}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all text-xl leading-none"
            >×</button>
          </div>

          {/* Body + Summary */}
          <div className="flex flex-1 min-h-0">
            <div
              className="flex-1 px-5 md:px-8 py-5 md:py-6 overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#e5e7eb #fafafa" }}
            >

              {/* STEP 1 — Service */}
              {step === "service" && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 mb-4">Select one or more services</p>
                  {SERVICES.map((s) => {
                    const isSelected = booking.service.includes(s.label);
                    return (
                      <button
                        key={s.label}
                        onClick={() => setBooking(b => ({
                          ...b,
                          service: isSelected
                            ? b.service.filter(x => x !== s.label)
                            : [...b.service, s.label]
                        }))}
                        className="w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all"
                        style={{
                          borderColor: isSelected ? "#3b82f6" : "#e5e7eb",
                          background: isSelected ? "#eff6ff" : "white",
                          transform: "translateX(0)",
                        }}
                        onMouseEnter={e => { if (!isSelected) { const el = e.currentTarget; el.style.borderColor = "#93c5fd"; el.style.transform = "translateX(4px)"; }}}
                        onMouseLeave={e => { if (!isSelected) { const el = e.currentTarget; el.style.borderColor = "#e5e7eb"; el.style.transform = "translateX(0)"; }}}
                      >
                        <img src={s.img} alt={s.label} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                        <span className="font-medium text-[#0f1117] text-sm flex-1">{s.label}</span>
                        <div
                          className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all"
                          style={{ borderColor: isSelected ? "#3b82f6" : "#d1d5db", background: isSelected ? "#3b82f6" : "white" }}
                        >
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                  {booking.service.length > 0 && (
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => setStep("datetime")}
                        className="bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                        onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "0 4px 12px rgba(59,130,246,0.4)"; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                      >
                        Continue ({booking.service.length} selected) →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2 — Date & Time */}
              {step === "datetime" && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl font-bold text-[#0f1117]">{MONTHS[calMonth]}</span>
                    <span className="text-2xl text-gray-400">{calYear}</span>
                    <div className="ml-auto flex gap-1">
                      <button
                        onClick={() => { if (calMonth === 0) { setCalMonth(11); setCalYear(y => y-1); } else setCalMonth(m => m-1); }}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-all"
                      >‹</button>
                      <button
                        onClick={() => { if (calMonth === 11) { setCalMonth(0); setCalYear(y => y+1); } else setCalMonth(m => m+1); }}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-all"
                      >›</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 mb-2">
                    {DAYS.map((d, i) => <div key={i} className="text-center text-xs text-gray-400 font-semibold py-1">{d}</div>)}
                  </div>

                  <div className="grid grid-cols-7 gap-y-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                      const dateObj = new Date(calYear, calMonth, day);
                      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      const isToday = day === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
                      const isSelected = booking.date?.getDate() === day && booking.date?.getMonth() === calMonth && booking.date?.getFullYear() === calYear;
                      return (
                        <div key={day} className="flex flex-col items-center py-0.5">
                          <button
                            disabled={isPast}
                            onClick={() => setBooking(b => ({ ...b, date: new Date(calYear, calMonth, day), time: "" }))}
                            className="w-9 h-9 rounded-lg text-sm font-medium transition-all"
                            style={{
                              background: isSelected ? "#3b82f6" : isToday ? "#fef9c3" : "transparent",
                              color: isSelected ? "white" : isPast ? "#d1d5db" : isToday ? "#92400e" : "#0f1117",
                              cursor: isPast ? "not-allowed" : "pointer",
                            }}
                            onMouseEnter={e => { if (!isPast && !isSelected) (e.currentTarget as HTMLButtonElement).style.background = "#f3f4f6"; }}
                            onMouseLeave={e => { if (!isPast && !isSelected) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                          >{day}</button>
                          {!isPast && <div className="w-4 h-0.5 rounded-full mt-0.5" style={{ background: "#22c55e" }} />}
                        </div>
                      );
                    })}
                  </div>

                  {booking.date && (
                    <div className="mt-6">
                      <p className="text-sm text-center mb-4 text-gray-500">
                        Pick a slot for <span className="text-blue-500 font-semibold">{selectedDateStr}</span>
                      </p>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            onClick={() => setBooking(b => ({ ...b, time: t }))}
                            className="py-2 px-3 rounded-lg text-xs font-medium border transition-all"
                            style={{
                              background: booking.time === t ? "#3b82f6" : "#f0fdf4",
                              color: booking.time === t ? "white" : "#166534",
                              borderColor: booking.time === t ? "#3b82f6" : "#bbf7d0",
                              transform: booking.time === t ? "scale(1.04)" : "scale(1)",
                            }}
                            onMouseEnter={e => { if (booking.time !== t) (e.currentTarget as HTMLButtonElement).style.borderColor = "#3b82f6"; }}
                            onMouseLeave={e => { if (booking.time !== t) (e.currentTarget as HTMLButtonElement).style.borderColor = "#bbf7d0"; }}
                          >{t}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    {preselectedService ? (
                      <div />
                    ) : (
                      <button
                        onClick={() => setStep("service")}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        ← Back
                      </button>
                    )}
                    {booking.date && booking.time && (
                      <button
                        onClick={() => setStep("info")}
                        className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all"
                        style={{ transition: "all 0.2s ease" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(59,130,246,0.4)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
                      >Next →</button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3 — Customer Info */}
              {step === "info" && (
                <div>
                  <div className="flex gap-4 border-b border-gray-200 mb-6">
                    <button className="pb-2 text-sm font-semibold text-[#0f1117] border-b-2 border-[#0f1117]">Enter your details</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input value={booking.firstName} onChange={e => setBooking(b => ({ ...b, firstName: e.target.value }))} placeholder="First Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                    <input value={booking.lastName} onChange={e => setBooking(b => ({ ...b, lastName: e.target.value }))} placeholder="Last Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input value={booking.phone} onChange={e => setBooking(b => ({ ...b, phone: e.target.value }))} placeholder="+1 201-555-0123" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                    <input value={booking.email} onChange={e => setBooking(b => ({ ...b, email: e.target.value }))} placeholder="Email Address" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                  <textarea value={booking.comments} onChange={e => setBooking(b => ({ ...b, comments: e.target.value }))} placeholder="Add Comments (optional)" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none mb-6" />
                  <div className="flex justify-between">
                    <button onClick={() => setStep("datetime")} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← Back</button>
                    <button
                      // replace the info step Next button onClick:
onClick={async () => {
  if (booking.firstName && booking.email) {
    await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: booking.email }),
    });
    setStep("verify");
  }
}}
                      className="bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(59,130,246,0.4)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
                    >Next →</button>
                  </div>
                </div>
              )}

              {/* STEP 4 — Verify */}
              {step === "verify" && (
                <div>
                  <div className="border border-gray-200 rounded-xl p-6 max-w-md mx-auto mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-[#0f1117]">Verify your email</h3>
                      <button onClick={() => setStep("info")} className="text-gray-400 hover:text-gray-700 transition-colors text-xl">×</button>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Enter the code we sent to <span className="text-blue-500 font-medium">{booking.email}</span>
                    </p>
                    <input
                      value={codeInput}
                      onChange={e => setCodeInput(e.target.value)}
                      placeholder="Enter verification code"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:border-blue-400 transition-colors text-center text-lg tracking-widest font-semibold"
                    />
                    <button
                      onClick={() => { if (codeInput.length >= 1) setStep("confirm"); }}
                      className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold mb-3 transition-all"
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2563eb"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#3b82f6"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                    >Verify</button>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>The code will expire in 10 minutes</span>
                      <button className="text-blue-500 hover:underline transition-colors">Resend code</button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button onClick={() => setStep("info")} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← Back</button>
                    <button
        onClick={async () => {
          if (codeInput.length >= 1) {
            const res = await fetch("/api/verify-otp", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: booking.email, code: codeInput }),
            });
            if (res.ok) {
              setStep("confirm");
            } else {
              alert("Invalid code. Please try again.");
            }
          }
        }}
        className="flex-1 py-3 px-6 rounded-xl font-medium bg-[#0f1117] text-white hover:bg-black transition-colors"
      >
        Next
      </button>
                  </div>
                </div>
              )}

              {/* STEP 5 — Confirm */}
              {step === "confirm" && (
                <div>
                  <div className="space-y-1 mb-6">
                    {[
                      { label: "Services", value: booking.service.join(", ") },
                      { label: "Date", value: selectedDateStr },
                      { label: "Day", value: selectedDayStr },
                      { label: "Time", value: booking.time },
                      { label: "Name", value: `${booking.firstName} ${booking.lastName}` },
                      { label: "Email", value: booking.email },
                      { label: "Phone", value: booking.phone },
                    ].map(({ label, value }) => value ? (
                      <div key={label} className="flex justify-between py-2.5 border-b border-gray-100 text-sm">
                        <span className="text-gray-400">{label}</span>
                        <span className="font-medium text-[#0f1117]">{value}</span>
                      </div>
                    ) : null)}
                  </div>
                  <div className="flex justify-between mt-6">
                    <button onClick={() => setStep("verify")} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← Back</button>
                    {/* ── Email is sent here on Submit ── */}
                    <button
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      onMouseEnter={e => { if (!isSubmitting) { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(59,130,246,0.4)"; }}}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit →"}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 6 — Success */}
              {step === "success" && (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="success-icon mb-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: "#dcfce7", border: "3px solid #22c55e" }}
                    >
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M8 18l7 7 13-14" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="success-text max-w-sm">
                    <h3 className="text-xl font-semibold text-[#0f1117] mb-4">
                      Booking Confirmed!
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Thank you. Your booking on{" "}
                      <span className="font-semibold text-[#0f1117]">{selectedDateStr}</span>,{" "}
                      <span className="font-semibold text-[#0f1117]">{selectedDayStr}</span> at the{" "}
                      <span className="font-semibold text-[#0f1117]">{booking.time}</span> slot is successful.
                      We have received your details. You&apos;ll soon receive a mail from{" "}
                      <span className="font-semibold text-blue-500">precrux@gmail.com</span> regarding further details.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-[#0f1117] text-white px-8 py-3 rounded-full text-sm font-medium transition-all"
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#C8F135"; (e.currentTarget as HTMLButtonElement).style.color = "#0f1117"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0f1117"; (e.currentTarget as HTMLButtonElement).style.color = "white"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Summary panel */}
            {step !== "service" && step !== "success" && (
              <div className="hidden md:flex w-44 shrink-0 border-l border-gray-100 px-5 py-6  flex-col justify-between" style={{ background: "#fafafa" }}>
                <div>
                  <h4 className="font-semibold text-[#0f1117] text-sm mb-4 uppercase tracking-wider">Summary</h4>
                  {booking.service.length > 0 && (
                    <div className="mb-2">
                      {booking.service.map(s => (
                        <p key={s} className="text-xs text-[#0f1117] font-medium leading-snug mb-1">{s}</p>
                      ))}
                    </div>
                  )}
                  {booking.date && (
                    <p className="text-xs text-gray-500 mb-1">{selectedDateStr}</p>
                  )}
                  {booking.time && (
                    <p className="text-xs text-gray-500">{booking.time}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}