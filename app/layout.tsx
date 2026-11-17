import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090E",
};

export const metadata: Metadata = {
  title: "Ashwini SK | Creative CS Student & Builder",
  description:
    "Personal portfolio of Ashwini SK — 1st-year CSE student at Bangalore Institute of Technology. Exploring coding, experimenting with new tech, and building creative software.",
  keywords: [
    "Ashwini SK",
    "Portfolio",
    "Computer Science",
    "Bangalore Institute of Technology",
    "Developer",
    "Java",
    "Python",
    "C",
  ],
  authors: [{ name: "Ashwini SK" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-slate-100 antialiased selection:bg-purple-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
