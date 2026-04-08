"use client";

import { useState } from "react";

export default function DetailsModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/details", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);

      setTimeout(() => {
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn">

      {/* CARD */}
      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] animate-scaleIn">

        {/* CLOSE */}
        {!success && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-black transition"
          >
            ✕
          </button>
        )}

        {/* SUCCESS STATE */}
        {success ? (
          <div className="flex flex-col items-center justify-center text-center py-10">

            {/* Animated Tick */}
            <div className="w-20 h-20 rounded-full bg-[#C8F135] flex items-center justify-center mb-6 animate-pop">
              <svg
                className="w-10 h-10 text-black animate-draw"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-[#0f1117]">
              You're all set
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Thank you for sharing your details.  
              We’ve received everything and will reach out to you very shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-[#0f1117]">
              Your Details
            </h2>

            {/* INPUTS */}
            <div className="space-y-4">

              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="input"
              />

              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="input"
              />

              <input
                name="company"
                placeholder="Company / Project Name"
                onChange={handleChange}
                className="input"
              />

              <textarea
                name="description"
                placeholder="Brief project description..."
                rows={4}
                onChange={handleChange}
                className="input resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full btn-primary"
            >
              {loading ? "Submitting..." : "Continue →"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}