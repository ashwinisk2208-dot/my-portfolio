"use client";

export default function CurrentlyInto() {
  const interests = [
    {
      emoji: "🎸",
      title: "Guitar",
      description: "Strumming acoustic melodies, figuring out riffs by ear, and using music to decompress from screen time.",
      tag: "HOBBY",
      accent: "border-vibe-pink text-vibe-pink shadow-brutal-pink",
      tilt: "hover:-rotate-2",
    },
    {
      emoji: "💻",
      title: "Coding",
      description: "Breaking down complex logic, mastering OOP fundamentals, and the sheer joy of seeing tests pass.",
      tag: "PASSION",
      accent: "border-vibe-lime text-vibe-lime shadow-brutal-lime",
      tilt: "hover:rotate-2",
    },
    {
      emoji: "🧠",
      title: "Learning random tech",
      description: "Diving down midnight rabbit holes about compilers, AI interfaces, and how systems really work.",
      tag: "CURIOSITY",
      accent: "border-vibe-cyan text-vibe-cyan shadow-brutal-cyan",
      tilt: "hover:-rotate-1",
    },
    {
      emoji: "✨",
      title: "Building things just to see if I can",
      description: "Because making cool, quirky, or genuinely helpful tools is a hundred times more fun than just reading theory.",
      tag: "EXPERIMENT",
      accent: "border-vibe-purple text-purple-300 shadow-brutal-purple",
      tilt: "hover:rotate-1",
    },
  ];

  return (
    <section id="currently-into" className="relative py-20 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto border-t border-white/10 scroll-mt-20">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-vibe-cyan text-black rounded">
            CURRENTLY INTO
          </span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            // PERSONALITY SNAPSHOT
          </span>
        </div>

        <span className="font-mono text-xs text-slate-500">
          ( no boring bullet points allowed )
        </span>
      </div>

      {/* Grid of Playful Personality Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item) => (
          <div
            key={item.title}
            className={`p-6 rounded-2xl bg-[#0F111D] border-2 ${item.accent} ${item.tilt} hover:scale-105 transition-all duration-200 cursor-default select-none flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.emoji}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-slate-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-mono font-black text-lg text-white mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>● ACTIVE VIBE</span>
              <span>100% GENUINE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
