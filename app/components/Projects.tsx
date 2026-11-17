"use client";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    experimentNum: "EXP_001 // PRODUCTIVITY",
    title: "Hermione — Your Study Mate",
    description:
      "A study-focused project designed to help students with their learning and productivity.",
    tools: ["Lovable"],
    status: "STILL COOKING... 🍳",
    accent: "lime",
    tiltClass: "lg:-rotate-1",
    noteBadge: "STUDY ASSISTANT",
  },
  {
    experimentNum: "EXP_002 // CAREER TECH",
    title: "Career OS — Personal Career Roadmap Builder",
    description:
      "A personal career-planning concept designed to help students create and follow a structured career roadmap.",
    tools: ["ChatGPT"],
    status: "COMING SOON ↗",
    accent: "cyan",
    tiltClass: "lg:rotate-1",
    noteBadge: "ROADMAP CONCEPT",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto scroll-mt-20 border-t border-white/10"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-vibe-lime text-black rounded">
              02 // LAB
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              // COLLECTED EXPERIMENTS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            THINGS I&apos;VE{" "}
            <span className="text-outline-white hover:text-outline-lime transition-colors">
              MADE
            </span>{" "}
            <span className="text-vibe-lime inline-block transform hover:translate-x-2 transition-transform">
              →
            </span>
          </h2>
        </div>

        <p className="font-mono text-xs text-slate-400 max-w-xs leading-relaxed">
          Unconventional concepts and productivity tools built to solve actual student problems.
        </p>
      </div>

      {/* Varied Project Layout (Not a boring grid) */}
      <div className="space-y-10 sm:space-y-12">
        {projects.map((project, idx) => (
          <div key={project.title} className="relative">
            {/* Editorial numbering marker on the side */}
            <div className="hidden lg:flex items-center gap-3 mb-2 font-mono text-xs text-slate-500">
              <span className="text-vibe-pink font-bold">↳ [0{idx + 1}]</span>
              <span>EXPERIMENTAL BUILD // PROTOTYPE IN PROGRESS</span>
            </div>

            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Playful Laboratory Annotation Note */}
      <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-[#0F111D] border border-dashed border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-mono font-bold text-sm text-white uppercase tracking-wide">
              The Philosophy Behind My Builds:
            </h4>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              I experiment with modern AI builder platforms like Lovable and ChatGPT to flesh out UX concepts quickly, while building core programming depth with Java, Python, and C.
            </p>
          </div>
        </div>

        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs font-bold text-vibe-lime shrink-0">
          More brewing in Bangalore ☕
        </span>
      </div>
    </section>
  );
}
