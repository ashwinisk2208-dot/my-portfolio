import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090A0F",
        canvas: "#0D0E15",
        surface: "#12141F",
        "surface-dark": "#0A0B12",
        "surface-border": "#212538",
        vibe: {
          lime: "#CCFF00",
          pink: "#FF2A85",
          cyan: "#00F0FF",
          orange: "#FF6B00",
          purple: "#A855F7",
          yellow: "#FFE600",
        },
      },
      boxShadow: {
        "brutal-lime": "4px 4px 0px #CCFF00",
        "brutal-pink": "4px 4px 0px #FF2A85",
        "brutal-cyan": "4px 4px 0px #00F0FF",
        "brutal-orange": "4px 4px 0px #FF6B00",
        "brutal-purple": "4px 4px 0px #A855F7",
        "brutal-white": "4px 4px 0px #FFFFFF",
        "brutal-lg-lime": "6px 6px 0px #CCFF00",
        "brutal-lg-pink": "6px 6px 0px #FF2A85",
        "brutal-lg-cyan": "6px 6px 0px #00F0FF",
      },
      animation: {
        "float-slow": "floatSlow 5s ease-in-out infinite",
        "float-tilt": "floatTilt 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 22s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatTilt: {
          "0%, 100%": { transform: "translateY(0px) rotate(2deg)" },
          "50%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
