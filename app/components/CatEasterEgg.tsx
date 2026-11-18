"use client";

import { useState, useRef, useEffect } from "react";

const catQuotes = [
  "meow.",
  "you found me. (=^･ω･^=)",
  "cat.exe has stopped working",
  "bro what are you doing",
  "404: productivity not found",
  "compiling catnip.c... ☕",
  "watching you write code 🐾",
];

export default function CatEasterEgg() {
  const [isPeeking, setIsPeeking] = useState(false);
  const [dialogue, setDialogue] = useState<string>("meow.");
  const [hasInteracted, setHasInteracted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerPeek = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const randomQuote = catQuotes[Math.floor(Math.random() * catQuotes.length)];
    setDialogue(randomQuote);
    setIsPeeking(true);
    setHasInteracted(true);

    timeoutRef.current = setTimeout(() => {
      setIsPeeking(false);
    }, 3800);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <aside
      aria-label="Cat easter egg discovery"
      className="fixed right-0 top-[60%] -translate-y-1/2 z-30 select-none"
    >
      <div className="relative flex items-center">
        {/* Floating Cat Dialogue Bubble */}
        {isPeeking && (
          <div
            role="status"
            className="mr-3 px-3 py-1.5 rounded-xl bg-[#0D0F1A] border border-vibe-lime text-vibe-lime font-mono text-xs shadow-brutal-white transition-all duration-300 animate-fade-in whitespace-nowrap"
          >
            <span>{dialogue}</span>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0D0F1A] border-t border-r border-vibe-lime transform rotate-45" />
          </div>
        )}

        {/* Peeking Cute Vector Cat Graphic */}
        <button
          type="button"
          onClick={triggerPeek}
          onMouseEnter={triggerPeek}
          aria-label="Secret cat easter egg"
          className={`group flex items-center bg-transparent border-0 p-0 focus:outline-none transition-transform duration-300 ease-out cursor-pointer ${
            isPeeking ? "translate-x-0" : "translate-x-9 hover:translate-x-6"
          }`}
          title="Click to peek!"
        >
          {/* Subtle tab flag */}
          {!hasInteracted && (
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-l bg-surface border-y border-l border-white/15 text-[9px] font-mono text-slate-500 group-hover:text-vibe-lime transition-colors">
              🐾
            </span>
          )}

          {/* Handcrafted Original Vector Cat Illustration */}
          <svg
            className="w-12 h-14 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            viewBox="0 0 60 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Ear */}
            <path
              d="M12 28 L18 8 L30 20 Z"
              fill="#181B2C"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M16 23 L20 13 L27 19 Z" fill="#FF2A85" fillOpacity="0.5" />

            {/* Right Ear */}
            <path
              d="M48 28 L42 8 L30 20 Z"
              fill="#181B2C"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M44 23 L40 13 L33 19 Z" fill="#FF2A85" fillOpacity="0.5" />

            {/* Head Silhouette */}
            <ellipse
              cx="30"
              cy="34"
              rx="24"
              ry="20"
              fill="#121422"
              stroke="#CCFF00"
              strokeWidth="2.5"
            />

            {/* Cute Cat Eyes */}
            <ellipse cx="21" cy="32" rx="3.5" ry="4.5" fill="#CCFF00" />
            <circle cx="20.5" cy="31" r="1.3" fill="#0A0B10" />
            <circle cx="22" cy="30" r="0.7" fill="#FFFFFF" />

            <ellipse cx="39" cy="32" rx="3.5" ry="4.5" fill="#CCFF00" />
            <circle cx="39.5" cy="31" r="1.3" fill="#0A0B10" />
            <circle cx="40" cy="30" r="0.7" fill="#FFFFFF" />

            {/* Tiny Pink Nose & Whisker Mouth */}
            <polygon points="30,37 28,39 32,39" fill="#FF2A85" />
            <path
              d="M27 41 Q30 43 33 41"
              stroke="#CCFF00"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Whiskers */}
            <line x1="14" y1="36" x2="4" y2="34" stroke="#CCFF00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="14" y1="39" x2="5" y2="41" stroke="#CCFF00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="46" y1="36" x2="56" y2="34" stroke="#CCFF00" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="46" y1="39" x2="55" y2="41" stroke="#CCFF00" strokeWidth="1.2" strokeLinecap="round" />

            {/* Cute Paws resting on the edge */}
            <ellipse cx="14" cy="50" rx="6" ry="4" fill="#181B2C" stroke="#CCFF00" strokeWidth="1.8" />
            <ellipse cx="46" cy="50" rx="6" ry="4" fill="#181B2C" stroke="#CCFF00" strokeWidth="1.8" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
