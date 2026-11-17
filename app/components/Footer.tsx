export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#07080D] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vibe-lime" />
          <span className="font-bold text-slate-200">© 2026 Ashwini SK</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-400">Bangalore Institute of Technology</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-center sm:text-right">
          <span>made with curiosity + questionable amounts of caffeine ☕</span>
        </div>
      </div>
    </footer>
  );
}
