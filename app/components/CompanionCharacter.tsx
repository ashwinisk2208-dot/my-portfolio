"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Predefined section dialogues
const sectionDialogues: Record<string, string[]> = {
  hero: [
    "Hmmm... who are you? 👀",
    "Welcome to Ashwini's corner of the web! 🚀",
    "Scroll down, there's cool stuff ahead!",
  ],
  about: [
    "Ohhh, so THIS is Ashwini.",
    "First-year at BIT Bangalore, not bad!",
    "Wait till you see the guitar skills 🎸",
  ],
  skills: [
    "Java... Python... C... okay okay, hacker madam 😭",
    "Pointers in C? Brave soul...",
  ],
  projects: [
    "You actually built these??",
    "Hermione & Career OS... still cooking! 🍳",
    "I helped test these (mostly just watched) 👀",
  ],
  "currently-into": [
    "Guitar AND coding? suspiciously talented 👀",
    "Music riffs count as code breaks, right?",
    "Building random tech at 2 AM is a lifestyle.",
  ],
  contact: [
    "Are you gonna say hi or what?",
    "Wanna build something weird? Do it! ✍️",
    "Don't be shy, send a transmission!",
  ],
  footer: [
    "Okayyy bye! Don't forget to visit again!",
    "Powered by curiosity & caffeine ☕",
    "You scrolled all the way! Achievement unlocked 🏆",
  ],
};

const pokeEasterEggs = [
  "Hey! Don't poke me, go check out Ashwini's projects! 😤",
  "Java... Python... C... okay okay, hacker madam 😭",
  "I'm the unofficial mascot here, nice to meet ya! 🧸",
  "Did you know Ashwini plays guitar? Ask for a solo! 🎸",
  "Look at me doing 60fps animations 💅",
  "I'm watching you scroll... 👀",
  "10/10 portfolio, would recommend to other anime kids ⭐",
  "Psst... you should totally click 'LET'S TALK'!",
  "Coffee count today: questionable ☕",
];

export default function CompanionCharacter() {
  const [currentSection, setCurrentSection] = useState<string>("hero");
  const [speechText, setSpeechText] = useState<string | null>("Hmmm... who are you? 👀");
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(true);
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [isSleeping, setIsSleeping] = useState<boolean>(false);
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [pokeIndex, setPokeIndex] = useState<number>(0);
  const [wanderOffset, setWanderOffset] = useState<number>(0);

  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSectionRef = useRef<string>("hero");
  const cooldownRef = useRef<boolean>(false);

  // Show dialogue with automatic auto-dismiss
  const triggerSpeech = useCallback((text: string, duration = 4200) => {
    if (isSleeping) return;

    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }

    setSpeechText(text);
    setIsBubbleVisible(true);

    bubbleTimeoutRef.current = setTimeout(() => {
      setIsBubbleVisible(false);
    }, duration);
  }, [isSleeping]);

  // Initial welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerSpeech("Hmmm... who are you? 👀", 3800);
    }, 1200);
    return () => clearTimeout(timer);
  }, [triggerSpeech]);

  // Track sections as user scrolls
  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "currently-into", "contact", "footer"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || "hero";
            setCurrentSection(id);

            // If section changed and not on cooldown
            if (id !== lastSectionRef.current && !cooldownRef.current && !isSleeping) {
              lastSectionRef.current = id;
              cooldownRef.current = true;

              // Small walking/shifting animation
              setIsWalking(true);
              setWanderOffset((prev) => (prev === 0 ? (Math.random() > 0.5 ? 18 : -18) : 0));

              setTimeout(() => {
                setIsWalking(false);
              }, 600);

              // Pick dialogue for this section
              const dialogues = sectionDialogues[id] || sectionDialogues.hero;
              const randomPick = dialogues[Math.floor(Math.random() * dialogues.length)];

              setTimeout(() => {
                triggerSpeech(randomPick, 4000);
              }, 400);

              // Set 5-second cooldown to avoid conversational overload
              setTimeout(() => {
                cooldownRef.current = false;
              }, 5000);
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    // Observe all targets
    const heroEl = document.querySelector("section"); // hero is first section
    if (heroEl) {
      if (!heroEl.id) heroEl.id = "hero";
      observer.observe(heroEl);
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const footerEl = document.querySelector("footer");
    if (footerEl) {
      if (!footerEl.id) footerEl.id = "footer";
      observer.observe(footerEl);
    }

    return () => observer.disconnect();
  }, [triggerSpeech, isSleeping]);

  // Handle character click / poke interaction
  const handleCharacterClick = () => {
    if (isSleeping) {
      setIsSleeping(false);
      triggerSpeech("I'm awake! What did I miss? 👀", 3000);
      return;
    }

    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 900);

    const nextLine = pokeEasterEggs[pokeIndex % pokeEasterEggs.length];
    setPokeIndex((prev) => prev + 1);
    triggerSpeech(nextLine, 4500);
  };

  const toggleSleep = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSleeping) {
      setIsSleeping(false);
      triggerSpeech("Back in action! ⚡", 2500);
    } else {
      setIsSleeping(true);
      setIsBubbleVisible(false);
    }
  };

  return (
    <aside
      aria-label="Interactive portfolio companion"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-7 z-40 select-none transition-transform duration-500 ease-out pointer-events-none"
      style={{
        transform: `translateX(${wanderOffset}px)`,
      }}
    >
      <div className="relative flex flex-col items-end">
        {/* Speech Bubble */}
        <div
          role="status"
          aria-live="polite"
          className={`pointer-events-auto max-w-[210px] sm:max-w-[250px] mb-2 px-3.5 py-2.5 rounded-2xl bg-[#0D0F1A] border-2 border-vibe-lime text-slate-100 font-mono text-xs shadow-brutal-white transition-all duration-300 origin-bottom-right ${
            isBubbleVisible && !isSleeping
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-3 pointer-events-none"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <p className="leading-snug font-medium text-slate-200">
              {speechText}
            </p>
            <button
              type="button"
              onClick={() => setIsBubbleVisible(false)}
              className="text-[10px] text-slate-500 hover:text-white transition-colors"
              title="Close bubble"
            >
              ✕
            </button>
          </div>

          {/* Speech bubble tail pointer */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-[#0D0F1A] border-r-2 border-b-2 border-vibe-lime transform rotate-45" />
        </div>

        {/* Character Card & Controls Container */}
        <div className="relative flex items-center gap-1.5 pointer-events-auto">
          {/* Sleep / Wake Minimal Toggle Button */}
          <button
            type="button"
            onClick={toggleSleep}
            className="p-1 rounded-full bg-surface border border-white/20 text-[11px] text-slate-400 hover:text-vibe-lime hover:border-vibe-lime transition-colors shadow-sm"
            title={isSleeping ? "Wake up companion" : "Mute companion"}
          >
            {isSleeping ? "💤" : "👁️"}
          </button>

          {/* Original Cartoon Character (Anime-Kid Inspired, 100% Original Vector Art) */}
          <div
            onClick={handleCharacterClick}
            className={`group relative cursor-pointer transform transition-all duration-300 active:scale-95 ${
              isWalking ? "animate-bounce" : ""
            } ${isWaving ? "scale-110 -rotate-6" : "hover:scale-105"}`}
            title="Click to interact with Ashwini's companion!"
          >
            {/* Subtle glow underneath */}
            <div className="absolute inset-0 rounded-full bg-vibe-lime/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Character SVG Avatar */}
            <svg
              className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* === BODY & OVERSIZED HOODIE === */}
              {/* Hoodie base in electric lime with black trim */}
              <path
                d="M26 68 C22 74, 18 84, 16 96 C24 97, 76 97, 84 96 C82 84, 78 74, 74 68 Z"
                fill="#CCFF00"
                stroke="#08090E"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              {/* Hoodie collar & dark shirt neckline */}
              <path
                d="M36 68 C42 76, 58 76, 64 68 C58 72, 42 72, 36 68 Z"
                fill="#0A0B12"
                stroke="#08090E"
                strokeWidth="2.5"
              />

              {/* Little Pink Guitar/Tech Pin on hoodie */}
              <circle cx="34" cy="80" r="4" fill="#FF2A85" stroke="#08090E" strokeWidth="1.5" />
              <path d="M33 78 L35 82 M35 78 L33 82" stroke="#FFFFFF" strokeWidth="1" />

              {/* Tiny Code Badge on hoodie `>_` */}
              <text
                x="56"
                y="83"
                fill="#08090E"
                fontSize="7"
                fontFamily="monospace"
                fontWeight="900"
              >
                &gt;_
              </text>

              {/* Waving Left Hand / Arm */}
              <g
                className={`origin-[26px_74px] transition-transform duration-300 ${
                  isWaving ? "animate-pulse" : ""
                }`}
              >
                <path
                  d="M26 74 C20 72, 14 66, 12 58 C16 57, 20 62, 24 67 Z"
                  fill="#CCFF00"
                  stroke="#08090E"
                  strokeWidth="3"
                />
                {/* Hand / Mitt */}
                <circle
                  cx="12"
                  cy="58"
                  r="4.5"
                  fill="#FFDFC4"
                  stroke="#08090E"
                  strokeWidth="2"
                />
              </g>

              {/* Right Hand resting */}
              <path
                d="M74 74 C80 75, 84 80, 86 86 C82 87, 78 84, 75 79 Z"
                fill="#CCFF00"
                stroke="#08090E"
                strokeWidth="3"
              />
              <circle cx="86" cy="86" r="4.5" fill="#FFDFC4" stroke="#08090E" strokeWidth="2" />

              {/* === HEAD & FACE === */}
              {/* Ears */}
              <circle cx="27" cy="46" r="5" fill="#FFDFC4" stroke="#08090E" strokeWidth="2.5" />
              <circle cx="73" cy="46" r="5" fill="#FFDFC4" stroke="#08090E" strokeWidth="2.5" />

              {/* Chubby Cute Head */}
              <ellipse
                cx="50"
                cy="46"
                rx="23"
                ry="21"
                fill="#FFDFC4"
                stroke="#08090E"
                strokeWidth="3.5"
              />

              {/* Cute Cheek Blushes (Hot Pink) */}
              <ellipse cx="35" cy="51" rx="4" ry="2.5" fill="#FF2A85" fillOpacity="0.45" />
              <ellipse cx="65" cy="51" rx="4" ry="2.5" fill="#FF2A85" fillOpacity="0.45" />

              {/* === EYES & EXPRESSION === */}
              {isSleeping ? (
                /* Sleeping Eyes (curved lines ^ _ ^) */
                <g stroke="#08090E" strokeWidth="3" strokeLinecap="round">
                  <path d="M36 44 Q42 41 46 44" />
                  <path d="M54 44 Q58 41 64 44" />
                  {/* Zzz floating */}
                  <text x="68" y="32" fill="#00F0FF" fontSize="10" fontWeight="bold">
                    zZ
                  </text>
                </g>
              ) : (
                /* Mischievous Anime Big Eyes */
                <g>
                  {/* Eyebrows (Cheeky, angled) */}
                  <path
                    d="M36 35 Q41 33 46 36"
                    stroke="#08090E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M54 36 Q59 33 64 35"
                    stroke="#08090E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Left Eye */}
                  <ellipse cx="41" cy="43" rx="4.5" ry="6" fill="#08090E" />
                  {/* Sparkle highlights */}
                  <circle cx="39.5" cy="41" r="1.8" fill="#FFFFFF" />
                  <circle cx="42.5" cy="45" r="0.9" fill="#00F0FF" />

                  {/* Right Eye */}
                  <ellipse cx="59" cy="43" rx="4.5" ry="6" fill="#08090E" />
                  {/* Sparkle highlights */}
                  <circle cx="57.5" cy="41" r="1.8" fill="#FFFFFF" />
                  <circle cx="60.5" cy="45" r="0.9" fill="#00F0FF" />

                  {/* Mischievous Anime Grin (w-smile or smirking curve) */}
                  <path
                    d="M45 51 Q50 55 55 51"
                    stroke="#08090E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
              )}

              {/* === HAIR: MESSY ANIME SPIKES === */}
              <path
                d="M26 41 C24 30, 31 19, 44 17 C50 16, 59 17, 68 21 C76 25, 78 35, 74 42 C71 34, 66 30, 58 29 C52 28, 48 30, 43 33 C37 36, 32 38, 26 41 Z"
                fill="#161928"
                stroke="#08090E"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              {/* Front hair tufts / bangs with a playful cyan/purple hair streak */}
              <path
                d="M38 24 L42 32 L47 25 L53 33 L58 24"
                stroke="#08090E"
                strokeWidth="3"
                fill="#161928"
                strokeLinejoin="round"
              />
              <path d="M46 22 Q51 20 54 24" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Online Status Pill on Companion */}
            <span className="absolute -bottom-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibe-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-vibe-lime border-2 border-[#0D0F1A]"></span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
