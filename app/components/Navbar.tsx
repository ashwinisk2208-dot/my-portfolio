"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", number: "01", href: "#about" },
    { label: "Projects", number: "02", href: "#projects" },
    { label: "Contact", number: "03", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase font-mono group-hover:text-vibe-lime transition-colors">
              ASHWINI<span className="text-vibe-pink ml-1">SK</span>
            </span>

            {/* Playful mini status badge */}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/15 rounded text-slate-300 group-hover:border-vibe-lime/40 group-hover:text-vibe-lime transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-vibe-lime animate-ping" />
              <span className="hidden sm:inline">in the lab</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white transition-all"
              >
                <span className="text-slate-500 mr-1 text-[10px] group-hover:text-vibe-cyan transition-colors">
                  {item.number}
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-vibe-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </span>
              </a>
            ))}

            {/* Playful CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="ml-3 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-black bg-vibe-lime hover:bg-white rounded transition-all duration-200 shadow-brutal-white hover:shadow-brutal-cyan hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              let&apos;s talk ↳
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 rounded bg-surface border border-white/15 text-slate-200 hover:text-vibe-lime hover:border-vibe-lime transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="font-mono text-xs font-bold tracking-wider uppercase">
              {mobileMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 ${
          mobileMenuOpen
            ? "max-h-72 opacity-100 bg-[#0A0B12]/95 backdrop-blur-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 space-y-3 font-mono text-sm">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="flex items-center justify-between p-2 rounded hover:bg-white/5 border border-transparent hover:border-white/10 text-slate-200 hover:text-vibe-lime transition-colors"
            >
              <span>{item.label}</span>
              <span className="text-xs text-slate-500">↳ {item.number}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="block text-center mt-3 py-2 text-xs font-bold uppercase tracking-wider text-black bg-vibe-lime hover:bg-white rounded shadow-brutal-white transition-all"
          >
            let&apos;s talk ↳
          </a>
        </div>
      </div>
    </header>
  );
}
