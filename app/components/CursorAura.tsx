"use client";

import { useEffect, useRef } from "react";

export default function CursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || "ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isVisible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && auraRef.current) {
        isVisible = true;
        auraRef.current.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (auraRef.current) {
        auraRef.current.style.opacity = "0";
      }
    };

    const animate = () => {
      // Smooth organic lerp
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX - 160}px, ${currentY - 160}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none z-10 transition-opacity duration-500 opacity-0 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(204, 255, 0, 0.04) 40%, transparent 70%)",
        filter: "blur(40px)",
        willChange: "transform",
      }}
    />
  );
}
