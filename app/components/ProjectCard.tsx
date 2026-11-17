"use client";

export interface ProjectCardProps {
  experimentNum: string;
  title: string;
  description: string;
  tools: string[];
  status: string;
  githubUrl?: string;
  accent: "lime" | "pink" | "cyan";
  tiltClass?: string;
  noteBadge?: string;
}

export default function ProjectCard({
  experimentNum,
  title,
  description,
  tools,
  status,
  githubUrl,
  accent,
  tiltClass = "",
  noteBadge,
}: ProjectCardProps) {
  const accentConfigs = {
    lime: {
      border: "border-vibe-lime",
      shadow: "shadow-brutal-lime",
      hoverShadow: "hover:shadow-brutal-lg-lime",
      badgeBg: "bg-vibe-lime text-black",
      toolTag: "bg-vibe-lime/10 text-vibe-lime border-vibe-lime/30",
      accentText: "text-vibe-lime",
      tagLabel: "BUILD TOOL",
    },
    pink: {
      border: "border-vibe-pink",
      shadow: "shadow-brutal-pink",
      hoverShadow: "hover:shadow-brutal-lg-pink",
      badgeBg: "bg-vibe-pink text-white",
      toolTag: "bg-vibe-pink/10 text-vibe-pink border-vibe-pink/30",
      accentText: "text-vibe-pink",
      tagLabel: "AI ASSIST",
    },
    cyan: {
      border: "border-vibe-cyan",
      shadow: "shadow-brutal-cyan",
      hoverShadow: "hover:shadow-brutal-lg-cyan",
      badgeBg: "bg-vibe-cyan text-black",
      toolTag: "bg-vibe-cyan/10 text-vibe-cyan border-vibe-cyan/30",
      accentText: "text-vibe-cyan",
      tagLabel: "CONCEPT",
    },
  }[accent];

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl bg-[#0D0F1A] border-2 ${accentConfigs.border} ${accentConfigs.shadow} ${accentConfigs.hoverShadow} ${tiltClass} hover:rotate-0 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
    >
      {/* Visual Tape Strip Accent on Top Right */}
      <div className="w-20 h-4 tape-strip -top-2 right-8 -rotate-6 rounded-sm opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Card Header: Experiment Label & Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black tracking-widest text-slate-400 uppercase">
            {experimentNum}
          </span>
          {noteBadge && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white/5 border border-white/15 text-slate-300">
              {noteBadge}
            </span>
          )}
        </div>

        {/* Intentional & Stylish "Still Cooking" Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-white/20 text-xs font-mono font-bold text-amber-300">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{status}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-4 mb-8">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-vibe-lime transition-colors">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {description}
        </p>

        {/* Tools Section */}
        <div className="pt-2">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
            Built with //
          </span>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold border ${accentConfigs.toolTag}`}
              >
                <span>⚡</span>
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action / Status Footer */}
      <div className="relative z-10 pt-5 border-t border-dashed border-white/10 flex flex-wrap items-center justify-between gap-3">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-vibe-lime transition-colors shadow-brutal-white"
          >
            View on GitHub ↗
          </a>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-base">🧪</span>
            <span>Unreleased Concept • Private Lab Build</span>
          </div>
        )}

        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
          status: in progress
        </span>
      </div>
    </div>
  );
}
