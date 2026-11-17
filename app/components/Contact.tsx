"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ashwinisk2208@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto scroll-mt-20 border-t border-white/10"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-vibe-pink text-white rounded">
            03 // TRANSMISSION
          </span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            // OPEN FREQUENCY
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
          WANNA BUILD{" "}
          <span className="text-outline-white hover:text-outline-pink transition-colors">
            SOMETHING
          </span>{" "}
          <span className="inline-block px-3 py-0.5 rounded bg-vibe-lime text-black transform -rotate-1 shadow-brutal-white">
            WEIRD?
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal max-w-2xl leading-relaxed">
          Or just want to chat about code, music, guitar chords, or student projects? Drop a transmission below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Direct Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F1A] border-2 border-white/15 shadow-brutal-white group hover:border-vibe-cyan transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                DIRECT INBOX //
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-white/5 hover:bg-vibe-lime hover:text-black border border-white/15 transition-all"
              >
                {copied ? "COPIED! ✓" : "COPY"}
              </button>
            </div>

            <p className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-vibe-cyan transition-colors mb-3">
              ashwinisk2208@gmail.com
            </p>

            <a
              href="mailto:ashwinisk2208@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-vibe-lime hover:underline"
            >
              <span>Launch mail app</span>
              <span>↳</span>
            </a>
          </div>

          {/* GitHub / Social Profile Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F1A] border-2 border-white/15 shadow-brutal-white group hover:border-vibe-purple transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                GITHUB REPO &amp; CODE //
              </span>
              <span className="text-xs font-mono text-vibe-purple">● PUBLIC</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-vibe-purple transition-colors">
                  ashwinisk2208-dot
                </p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  @ashwinisk2208-dot
                </p>
              </div>

              <a
                href="https://github.com/ashwinisk2208-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-vibe-purple text-white font-mono text-xs font-bold transition-all shadow-sm"
              >
                VISIT ↗
              </a>
            </div>
          </div>

          {/* Response Time & Location Stamp */}
          <div className="p-4 rounded-xl bg-surface-dark border border-dashed border-white/15 font-mono text-xs text-slate-400 space-y-1">
            <div className="flex items-center justify-between">
              <span>LOCATION: BENGALURU</span>
              <span className="text-vibe-lime">TIMEZONE: IST (UTC+5:30)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              *Response time: usually between classes, lab sessions, or late at night.
            </p>
          </div>
        </div>

        {/* Right Column: Vibe-Coded Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#0D0F1A] border-2 border-white/20 shadow-brutal-white relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                SEND A MESSAGE // QUICK PING
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                FRONTEND DEMO
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  01. What should I call you?
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name or Nickname"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border-2 border-white/10 text-white font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-vibe-lime transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  02. Where can I reach you back?
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border-2 border-white/10 text-white font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-vibe-pink transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-300 mb-2"
                >
                  03. What&apos;s on your mind?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hey Ashwini, saw your projects Hermione & Career OS / let's jam on an idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border-2 border-white/10 text-white font-mono text-sm placeholder-slate-600 focus:outline-none focus:border-vibe-cyan transition-all resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-vibe-lime/10 border border-vibe-lime text-vibe-lime font-mono text-xs flex items-center gap-2">
                  <span>✓</span>
                  <span>Signal transmitted! (Frontend interface demo)</span>
                </div>
              )}

              {/* Prominent Vibe-Coded Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-vibe-lime text-black font-mono font-black text-base uppercase tracking-wider shadow-brutal-white hover:shadow-brutal-pink hover:bg-white transition-all duration-150 transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none flex items-center justify-center gap-2"
              >
                <span>LET&apos;S TALK</span>
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
