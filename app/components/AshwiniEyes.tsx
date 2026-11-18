"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function AshwiniEyes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const leftSocketRef = useRef<HTMLDivElement>(null);
  const rightSocketRef = useRef<HTMLDivElement>(null);

  const [dialogue, setDialogue] = useState<string | null>(null);
  const [isWinking, setIsWinking] = useState<boolean>(false);
  const dialogueTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerDialogue = useCallback((text: string) => {
    if (dialogueTimerRef.current) clearTimeout(dialogueTimerRef.current);
    setDialogue(text);
    dialogueTimerRef.current = setTimeout(() => {
      setDialogue(null);
    }, 3200);
  }, []);

  const handleFaceClick = () => {
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 380);

    const easterEggs = [
      "Yep, my eyes are following you! 👀",
      "I see what you're doing over there... 🧐",
      "404: Can't look away from this code! ✨",
      "Caught you looking! 🎸",
      "Still watching you scroll... 👀",
    ];
    const pick = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    triggerDialogue(pick);
  };

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Target pupil offsets (in CSS px)
    let targetLeftX = 0;
    let targetLeftY = -1.2; // default subtle upward glance into the webpage
    let targetRightX = 0;
    let targetRightY = -1.2;

    // Current lerped pupil offsets
    let currentLeftX = 0;
    let currentLeftY = -1.2;
    let currentRightX = 0;
    let currentRightY = -1.2;

    let isMouseActive = false;
    let lastMouseMoveTime = Date.now();
    let animId: number;

    // Maximum safe radius so pupils never escape natural eye contour
    const maxRadiusX = 4.2;
    const maxRadiusY = 3.2;

    const handleMouseMove = (e: MouseEvent) => {
      isMouseActive = true;
      lastMouseMoveTime = Date.now();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Track left eye
      if (leftSocketRef.current) {
        const rect = leftSocketRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = mouseX - eyeCenterX;
        const dy = mouseY - eyeCenterY;
        const dist = Math.hypot(dx, dy) || 1;

        // Soft normalization with non-linear distance curve
        const factor = Math.min(1.0, dist / 260);
        targetLeftX = (dx / dist) * maxRadiusX * factor;
        targetLeftY = (dy / dist) * maxRadiusY * factor;
      }

      // Track right eye
      if (rightSocketRef.current) {
        const rect = rightSocketRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = mouseX - eyeCenterX;
        const dy = mouseY - eyeCenterY;
        const dist = Math.hypot(dx, dy) || 1;

        const factor = Math.min(1.0, dist / 260);
        targetRightX = (dx / dist) * maxRadiusX * factor;
        targetRightY = (dy / dist) * maxRadiusY * factor;
      }
    };

    // Touch support for mobile/tablet
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove({
          clientX: touch.clientX,
          clientY: touch.clientY,
        } as MouseEvent);
      }
    };

    const updateFrame = () => {
      const now = Date.now();

      // If mouse has stopped moving for > 1500ms or on mobile, smoothly settle to natural gentle glance
      if (now - lastMouseMoveTime > 1500) {
        isMouseActive = false;
      }

      if (!isMouseActive && !prefersReducedMotion) {
        // Organic idle breathing drift (subtle micro-movements)
        const idleX = Math.sin(now * 0.0012) * 1.5;
        const idleY = Math.cos(now * 0.001) * 1.0 - 1.2;
        targetLeftX = idleX;
        targetLeftY = idleY;
        targetRightX = idleX;
        targetRightY = idleY;
      }

      // Smooth organic lerp (no snapping, 60fps)
      const lerpSpeed = 0.12;
      currentLeftX += (targetLeftX - currentLeftX) * lerpSpeed;
      currentLeftY += (targetLeftY - currentLeftY) * lerpSpeed;
      currentRightX += (targetRightX - currentRightX) * lerpSpeed;
      currentRightY += (targetRightY - currentRightY) * lerpSpeed;

      // Direct DOM style updates (zero React state overhead)
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate3d(calc(-50% + ${currentLeftX.toFixed(
          2
        )}px), calc(-50% + ${currentLeftY.toFixed(2)}px), 0)`;
      }

      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate3d(calc(-50% + ${currentRightX.toFixed(
          2
        )}px), calc(-50% + ${currentRightY.toFixed(2)}px), 0)`;
      }

      animId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    animId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animId);
      if (dialogueTimerRef.current) clearTimeout(dialogueTimerRef.current);
    };
  }, []);

  return (
    <aside
      ref={containerRef}
      aria-label="Interactive eye-tracking portrait"
      className="fixed bottom-[-16px] sm:bottom-[-22px] md:bottom-[-26px] left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none transition-all duration-300"
    >
      <div className="relative flex flex-col items-center">
        {/* Subtle Easter Egg Dialogue Bubble */}
        {dialogue && (
          <div
            role="status"
            className="pointer-events-auto mb-2 px-3 py-1.5 rounded-xl bg-[#0D0F1A]/95 border border-vibe-cyan text-vibe-cyan font-mono text-xs shadow-brutal-cyan animate-fade-in backdrop-blur-md"
          >
            <span>{dialogue}</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0D0F1A] border-r border-b border-vibe-cyan transform rotate-45" />
          </div>
        )}

        {/* Digital Presence Minimal Badge */}
        <div
          onClick={handleFaceClick}
          className="pointer-events-auto cursor-pointer mb-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-dark/90 border border-white/15 text-[10px] font-mono tracking-wider text-slate-300 hover:border-vibe-lime hover:text-vibe-lime transition-all duration-200 shadow-sm"
          title="Click to interact with Ashwini's watching eyes!"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vibe-lime animate-pulse" />
          <span className="font-semibold">DIGITAL_PRESENCE</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-400">ACTIVE</span>
        </div>

        {/* Face Container: Fixed Aspect Ratio Matching ashwini-eyes.png (2134 x 737) */}
        <div
          onClick={handleFaceClick}
          className={`pointer-events-auto relative w-[290px] xs:w-[330px] sm:w-[390px] md:w-[450px] lg:w-[490px] aspect-[2134/737] cursor-pointer group transition-transform duration-300 ${
            isWinking ? "scale-95" : "hover:scale-[1.01]"
          }`}
          title="Ashwini's eyes follow your cursor"
        >
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute -inset-2 bg-gradient-to-t from-vibe-cyan/15 via-transparent to-transparent blur-xl opacity-60 pointer-events-none" />

          {/* === LEFT EYE OVERLAY SOCKET (36.2% X, 88.0% Y, 7.2% W, 8.5% H) === */}
          <div
            ref={leftSocketRef}
            className="absolute left-[36.2%] top-[88.0%] w-[7.2%] h-[8.5%] z-10 pointer-events-none overflow-hidden rounded-[50%/44%]"
            style={{
              clipPath: "ellipse(50% 45% at 50% 50%)",
              background:
                "radial-gradient(ellipse at 50% 50%, #f7efea 25%, #e1d3cb 65%, #b59f93 100%)",
            }}
          >
            {/* Moving Left Pupil/Iris */}
            <div
              ref={leftPupilRef}
              className={`absolute left-1/2 top-1/2 w-[58%] h-[82%] rounded-full shadow-sm transition-opacity duration-150 ${
                isWinking ? "opacity-0" : "opacity-100"
              }`}
              style={{
                transform: "translate3d(-50%, -50%, 0)",
                background:
                  "radial-gradient(circle at 45% 45%, #0d0a0a 0%, #171110 50%, #2a1f1b 88%, #150f0e 100%)",
                boxShadow: "inset 1px 1px 2px rgba(255, 255, 255, 0.35)",
                willChange: "transform",
              }}
            >
              {/* Specular Catchlight Highlight Dot */}
              <span className="absolute top-[22%] right-[24%] w-[20%] h-[20%] rounded-full bg-white/95" />
            </div>

            {/* Upper Eyelid & Eyelash Shadow Layer */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[50%/44%]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(16, 12, 12, 0.9) 0%, rgba(20, 16, 16, 0.55) 28%, transparent 68%)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.7)",
              }}
            />
          </div>

          {/* === RIGHT EYE OVERLAY SOCKET (53.3% X, 88.0% Y, 7.2% W, 8.5% H) === */}
          <div
            ref={rightSocketRef}
            className="absolute left-[53.3%] top-[88.0%] w-[7.2%] h-[8.5%] z-10 pointer-events-none overflow-hidden rounded-[50%/44%]"
            style={{
              clipPath: "ellipse(50% 45% at 50% 50%)",
              background:
                "radial-gradient(ellipse at 50% 50%, #f7efea 25%, #e1d3cb 65%, #b59f93 100%)",
            }}
          >
            {/* Moving Right Pupil/Iris */}
            <div
              ref={rightPupilRef}
              className="absolute left-1/2 top-1/2 w-[58%] h-[82%] rounded-full shadow-sm"
              style={{
                transform: "translate3d(-50%, -50%, 0)",
                background:
                  "radial-gradient(circle at 45% 45%, #0d0a0a 0%, #171110 50%, #2a1f1b 88%, #150f0e 100%)",
                boxShadow: "inset 1px 1px 2px rgba(255, 255, 255, 0.35)",
                willChange: "transform",
              }}
            >
              {/* Specular Catchlight Highlight Dot */}
              <span className="absolute top-[22%] right-[24%] w-[20%] h-[20%] rounded-full bg-white/95" />
            </div>

            {/* Upper Eyelid & Eyelash Shadow Layer */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[50%/44%]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(16, 12, 12, 0.9) 0%, rgba(20, 16, 16, 0.55) 28%, transparent 68%)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.7)",
              }}
            />
          </div>

          {/* Fixed Base Image: /public/ashwini-eyes.png */}
          <Image
            src="/ashwini-eyes.png"
            alt="Ashwini SK watching eyes"
            width={2134}
            height={737}
            priority
            className="w-full h-auto block select-none pointer-events-none relative z-20 drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
          />

          {/* Bottom Edge Fade Mask so bottom boundary blends into canvas */}
          <div className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-[#08090E] z-25 pointer-events-none" />
        </div>
      </div>
    </aside>
  );
}
