"use client";

export default function About() {
  const skills = [
    {
      name: "JAVA",
      role: "Object-Oriented & Logic",
      snippet: "class Mindset { boolean curious = true; }",
      stampColor: "border-amber-400/80 text-amber-300 bg-amber-400/5",
      shadowColor: "hover:shadow-[4px_4px_0px_#F59E0B]",
      accentBadge: "bg-amber-400 text-black",
      icon: "☕",
      tilt: "-rotate-2",
      stampNum: "01",
    },
    {
      name: "PYTHON",
      role: "Scripts & Fast Experiments",
      snippet: "def create(): return 'something_cool'",
      stampColor: "border-vibe-cyan/80 text-vibe-cyan bg-vibe-cyan/5",
      shadowColor: "hover:shadow-[4px_4px_0px_#00F0FF]",
      accentBadge: "bg-vibe-cyan text-black",
      icon: "🐍",
      tilt: "rotate-2",
      stampNum: "02",
    },
    {
      name: "C",
      role: "Memory & Low-Level Foundations",
      snippet: "int main() { char *path = 'explore'; }",
      stampColor: "border-vibe-purple/80 text-purple-300 bg-vibe-purple/5",
      shadowColor: "hover:shadow-[4px_4px_0px_#A855F7]",
      accentBadge: "bg-vibe-purple text-white",
      icon: "⚙️",
      tilt: "-rotate-1",
      stampNum: "03",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto scroll-mt-20 border-t border-white/10"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-vibe-pink text-white rounded">
          01 // ABOUT
        </span>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          // WHO AM I OUTSIDE OF CODE?
        </span>
      </div>

      {/* Large Manifesto Statement */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
          “I like figuring out{" "}
          <span className="text-outline-white hover:text-outline-pink transition-colors">
            how things work
          </span>{" "}
          and then making{" "}
          <span className="relative inline-block text-black bg-vibe-lime px-2 sm:px-3 py-0.5 rounded transform -rotate-1 shadow-brutal-white">
            my own version.
          </span>”
        </h2>
      </div>

      {/* Bio Presentation - Asymmetric, not a boring card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="lg:col-span-7 space-y-6">
          {/* Exact Bio Quote */}
          <div className="relative pl-6 border-l-4 border-vibe-cyan py-2">
            <p className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
              “1st-year CSE student at Bangalore Institute of Technology. I love coding, exploring new technologies, and playing guitar.”
            </p>
          </div>

          <div className="space-y-4 text-base text-slate-400 leading-relaxed font-normal">
            <p>
              I believe computer science isn&apos;t just about memorizing syntax or passing lab exams — it&apos;s about having the superpower to turn curiosity into working software. Whether it&apos;s writing clean logic in Java, automating quick ideas in Python, or dissecting memory in C, I love being in the builder&apos;s seat.
            </p>
            <p className="text-sm font-mono text-slate-400 flex items-center gap-2">
              <span className="text-vibe-lime">↳</span>
              <span>Based in Bengaluru, India. Fueled by tea, tech rabbit holes &amp; music.</span>
            </p>
          </div>
        </div>

        {/* Right Accent Widget - Tape & Snapshot Note */}
        <div className="lg:col-span-5 relative">
          <div className="relative p-6 sm:p-7 rounded-2xl bg-[#0F111D] border-2 border-white/10 shadow-brutal-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Visual Tape Strip */}
            <div className="w-24 h-5 tape-strip -top-3 left-1/2 -translate-x-1/2 -rotate-3 rounded-sm" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono text-xs">
              <span className="text-vibe-lime font-bold">BIT_BANGALORE // CSE</span>
              <span className="text-slate-500">CLASS OF &apos;28</span>
            </div>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-vibe-pink font-bold">01.</span>
                <span>Writing code that actually solves student headaches.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-vibe-cyan font-bold">02.</span>
                <span>Fiddling with acoustic &amp; electric guitar chords.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-vibe-lime font-bold">03.</span>
                <span>Exploring what happens when you feed crazy ideas to AI tools.</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-dashed border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>STATUS: LEARNING &amp; BUILDING</span>
              <span className="text-emerald-400">● ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Area: Postal / Sticker Stamp Elements */}
      <div id="skills" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase flex items-center gap-2 font-mono">
              <span className="text-vibe-lime">&gt;</span>
              <span>TECH_STAMPS</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Interactive sticker-stamps of the core languages I code in:
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500">
            (hover to inspect)
          </span>
        </div>

        {/* Visual Stamp Collection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative p-5 sm:p-6 rounded-xl border-2 border-dashed ${skill.stampColor} ${skill.shadowColor} ${skill.tilt} hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default select-none overflow-hidden bg-surface-dark`}
            >
              {/* Serrated Stamp Pattern Background */}
              <div className="absolute top-2 right-2 font-mono text-[10px] text-slate-500">
                № {skill.stampNum}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-150">
                  {skill.icon}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase ${skill.accentBadge}`}>
                  ACTIVE
                </span>
              </div>

              <h4 className="text-2xl font-black tracking-tight text-white mb-1 group-hover:text-vibe-lime transition-colors font-mono">
                {skill.name}
              </h4>

              <p className="text-xs font-mono text-slate-400 mb-3">
                {skill.role}
              </p>

              {/* Mini Code Snippet in Stamp */}
              <div className="p-2 rounded bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-hidden text-ellipsis whitespace-nowrap">
                <code>{skill.snippet}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
