"use client";

import { useState, useEffect } from "react";

const exploringThoughts = [
  "debugging with print() statements 🐛",
  "pointers in C without losing sanity 🧠",
  "acoustic guitar riffs between compiles 🎸",
  "building weird software just to see if I can ✨",
  "Bangalore filter coffee & terminal tabs ☕",
  "rapid prototyping with AI & code 🚀",
];

export default function Hero() {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % exploringThoughts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[94vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden blueprint-dots">
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-1/4 right-5 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-vibe-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-20 w-72 h-72 bg-vibe-lime/10 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Coordinate Line */}
      <div className="max-w-6xl mx-auto w-full mb-6 sm:mb-8 flex flex-wrap items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 uppercase border-b border-white/10 pb-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vibe-lime animate-pulse" />
          <span>BLR // 12.9716° N, 77.5946° E</span>
        </span>
        <span className="hidden sm:inline-block text-slate-400">
          BANGALORE INSTITUTE OF TECHNOLOGY // 1ST YEAR CSE
        </span>
        <span className="text-vibe-pink font-semibold">[ PERSONAL SPACE ]</span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        {/* Floating Personality Artifacts / Stickers */}
        {/* Sticker 1: Guitar */}
        <div className="absolute -top-10 sm:-top-8 right-2 sm:right-16 z-20 transform rotate-6 hover:rotate-12 hover:scale-110 transition-all duration-200 cursor-default select-none">
          <div className="px-3 py-1.5 rounded-lg bg-surface border-2 border-vibe-pink shadow-brutal-pink text-xs font-mono font-bold text-white flex items-center gap-1.5">
            <span className="text-base">🎸</span>
            <span>RIFF &amp; CODE</span>
          </div>
        </div>

        {/* Sticker 2: Curious by Default */}
        <div className="absolute top-36 sm:top-28 right-0 sm:right-8 z-20 hidden md:block transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default select-none">
          <div className="px-3.5 py-1.5 rounded-md bg-[#13141F] border border-vibe-cyan/60 shadow-brutal-cyan text-[11px] font-mono tracking-wider text-vibe-cyan font-bold">
            ✦ CURIOUS BY DEFAULT
          </div>
        </div>

        {/* Sticker 3: Building Things */}
        <div className="absolute -bottom-6 sm:-bottom-8 right-8 sm:right-32 z-20 hidden sm:block transform rotate-3 hover:-rotate-2 hover:scale-105 transition-all duration-200 cursor-default select-none">
          <div className="px-3 py-1 rounded bg-vibe-lime text-black font-mono text-xs font-black uppercase tracking-wider shadow-brutal-white">
            // BUILDING THINGS //
          </div>
        </div>

        {/* Floating Code Stamp Stickers (Java, Python, C) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all px-2.5 py-1 rounded bg-[#181A26] border border-amber-400/40 text-amber-300 font-mono text-xs font-bold shadow-[2px_2px_0px_#F59E0B]">
            ☕ JAVA
          </div>
          <div className="transform rotate-3 hover:rotate-0 hover:scale-105 transition-all px-2.5 py-1 rounded bg-[#181A26] border border-vibe-cyan/40 text-vibe-cyan font-mono text-xs font-bold shadow-[2px_2px_0px_#00F0FF]">
            🐍 PYTHON
          </div>
          <div className="transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all px-2.5 py-1 rounded bg-[#181A26] border border-vibe-purple/40 text-purple-300 font-mono text-xs font-bold shadow-[2px_2px_0px_#A855F7]">
            ⚙️ C
          </div>
          <span className="text-slate-600 font-mono text-xs hidden sm:inline">
            // core toolkit
          </span>
        </div>

        {/* Massive Typographic Headline */}
        <div className="relative mb-6 select-none">
          <h1 className="font-black tracking-tighter uppercase leading-[0.88] text-[4.2rem] xs:text-[5.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11.5rem]">
            <span className="block text-white hover:text-vibe-lime transition-colors duration-300">
              ASHWINI
            </span>
            <div className="flex items-baseline gap-3 sm:gap-6">
              <span className="text-outline-white hover:text-outline-lime transition-colors duration-300">
                SK
              </span>
              <span className="text-vibe-pink text-3xl sm:text-6xl md:text-8xl font-mono -translate-y-2 sm:-translate-y-4">
                *
              </span>
              <span className="text-xs sm:text-sm font-mono font-normal tracking-normal normal-case text-slate-400 max-w-xs hidden lg:block leading-relaxed">
                ( pronounced ash-wee-nee / making cool software in Bangalore )
              </span>
            </div>
          </h1>
        </div>

        {/* Conversational Vibe-Coded Introduction */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
            <span>A</span>
            <span className="px-2.5 py-0.5 rounded bg-vibe-lime text-black font-black transform -rotate-1 shadow-sm">
              fun-loving CS student
            </span>
            <span>who loves to</span>
            <span className="px-2.5 py-0.5 rounded bg-vibe-pink text-white font-black transform rotate-1 shadow-sm">
              explore
            </span>
            <span>+</span>
            <span className="text-vibe-cyan underline decoration-wavy decoration-vibe-cyan/60 underline-offset-8">
              create!
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
            Tinkering at the intersection of computer science fundamentals, fresh developer tools, and creative side-quests.
          </p>
        </div>

        {/* Interactive "Currently Exploring..." Pill with Cycling Thoughts */}
        <div className="mb-10 inline-flex flex-wrap items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-white/15 shadow-brutal-white max-w-xl">
          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-vibe-lime flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-vibe-lime animate-ping" />
            CURRENTLY EXPLORING ↳
          </span>
          <span className="font-mono text-xs sm:text-sm text-slate-200 transition-all duration-300">
            {exploringThoughts[thoughtIndex]}
          </span>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="group px-6 py-3.5 rounded-lg bg-vibe-lime text-black font-mono font-bold text-sm tracking-wider uppercase transition-all duration-150 shadow-brutal-white hover:shadow-brutal-pink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">↳</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-6 py-3.5 rounded-lg bg-surface border-2 border-white/20 text-white hover:text-vibe-lime hover:border-vibe-lime font-mono font-bold text-sm tracking-wider uppercase transition-all duration-150 shadow-brutal-white hover:shadow-brutal-lime hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none flex items-center gap-2"
          >
            <span>Say Hello</span>
            <span>✉</span>
          </button>
        </div>
      </div>
    </section>
  );
}
