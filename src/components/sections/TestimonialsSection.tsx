"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data/testimonials";

const VISIBLE_CARDS = 3; // how many cards in the sliding strip
const AUTOPLAY_MS = 4500;

// Avatar gradient pairs keyed by first letter
const avatarColors: Record<string, [string, string]> = {
  A: ["#D8B7A6", "#C9A27E"],
  B: ["#E8D9D2", "#D8B7A6"],
  C: ["#C9A27E", "#B76E79"],
  D: ["#D8B7A6", "#B76E79"],
  E: ["#F3E6E8", "#D8B7A6"],
  F: ["#C9A27E", "#B76E79"],
  G: ["#E8D9D2", "#C9A27E"],
  H: ["#D8B7A6", "#B76E79"],
  I: ["#F3E6E8", "#C9A27E"],
  J: ["#C9A27E", "#B76E79"],
  K: ["#E8D9D2", "#D8B7A6"],
  L: ["#D8B7A6", "#C9A27E"],
  M: ["#F3E6E8", "#B76E79"],
  N: ["#C9A27E", "#D8B7A6"],
  O: ["#E8D9D2", "#B76E79"],
  P: ["#D8B7A6", "#C9A27E"],
  R: ["#F3E6E8", "#D8B7A6"],
  S: ["#C9A27E", "#B76E79"],
  T: ["#E8D9D2", "#C9A27E"],
  U: ["#D8B7A6", "#B76E79"],
  V: ["#C9A27E", "#D8B7A6"],
  W: ["#F3E6E8", "#C9A27E"],
  Z: ["#D8B7A6", "#B76E79"],
  Å: ["#C9A27E", "#B76E79"],
  Æ: ["#E8D9D2", "#D8B7A6"],
  Ø: ["#D8B7A6", "#C9A27E"],
};

function getAvatarGradient(name: string): [string, string] {
  const first = name.charAt(0).toUpperCase();
  return avatarColors[first] ?? ["#E8D9D2", "#C9A27E"];
}

// Google G icon
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const advance = useCallback((d: number) => {
    setDir(d);
    setCurrent((prev) => (prev + d + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => advance(1), AUTOPLAY_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, advance]);

  const prev = () => { setPaused(true); advance(-1); };
  const next = () => { setPaused(true); advance(1); };
  const goTo = (i: number) => { setPaused(true); setDir(i > current ? 1 : -1); setCurrent(i); };

  // Build the 3-card window: [prev, current, next]
  const indices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  const featured = testimonials[current];

  return (
    <section className="bg-[#F7F2EE] section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <SectionLabel className="mb-5">Google Anmeldelser</SectionLabel>
            <h2 className="heading-lg text-[#0B0B0D]">
              Hva Oslo sier om oss
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-4 bg-white border border-[#E8D9D2] px-6 py-4 shadow-sm">
            <GoogleIcon />
            <div className="w-px h-8 bg-[#E8D9D2]" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-[#F5B800] fill-[#F5B800]" />
                ))}
                <span className="font-serif text-xl text-[#0B0B0D] ml-1">5,0</span>
              </div>
              <span className="label-luxury text-[9px] text-[#999] tracking-[0.18em]">
                78 GOOGLE ANMELDELSER
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── FEATURED CARD ─────────────────────────────────── */}
        <div className="relative mb-10">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={featured.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E8D9D2] p-5 sm:p-8 lg:p-12 relative overflow-hidden"
              style={{ boxShadow: "0 8px 60px rgba(11,11,13,0.07)" }}
            >
              {/* Background quote mark */}
              <span
                className="absolute top-2 right-4 font-serif text-[6rem] sm:text-[8rem] leading-none text-[#F3E6E8] select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* Avatar + meta row on mobile */}
                <div className="flex sm:block items-center gap-3">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif text-base sm:text-xl font-medium shadow-md"
                    style={{ background: `linear-gradient(135deg, ${getAvatarGradient(featured.name)[0]}, ${getAvatarGradient(featured.name)[1]})` }}
                  >
                    {featured.initials}
                  </div>
                  {/* Mobile name inline */}
                  <div className="sm:hidden">
                    <p className="font-medium text-[#0B0B0D] text-sm">{featured.name}</p>
                    <p className="text-[#999] text-xs">{featured.date}</p>
                  </div>
                </div>

                <div>
                  {/* Stars + source */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5B800] fill-[#F5B800]" />)}
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FAF6F2] border border-[#E8D9D2] rounded-full px-2.5 py-1">
                      <GoogleIcon />
                      <span className="font-sans font-medium text-[8px] tracking-[0.15em] uppercase text-[#999]">Google</span>
                    </div>
                    <span className="hidden sm:inline text-[#999] text-xs">{featured.date}</span>
                  </div>
                  {/* Desktop name */}
                  <p className="hidden sm:block font-medium text-[#0B0B0D] mb-3">{featured.name}</p>
                  <blockquote className="font-serif text-base sm:text-lg lg:text-xl italic text-[#2A2A2A] leading-relaxed">
                    &ldquo;{featured.text}&rdquo;
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow nav — inside the padding so no horizontal overflow */}
          <div className="flex justify-between mt-4 gap-3">
            <button
              onClick={prev}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 sm:py-0 sm:w-11 sm:h-11 sm:rounded-full bg-white border border-[#E8D9D2] text-[#2A2A2A] hover:border-[#B76E79] hover:text-[#B76E79] transition-all duration-200 shadow-sm touch-manipulation"
              aria-label="Forrige"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sm:hidden font-sans text-xs tracking-wide">Forrige</span>
            </button>
            <button
              onClick={next}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 sm:py-0 sm:w-11 sm:h-11 sm:rounded-full bg-white border border-[#E8D9D2] text-[#2A2A2A] hover:border-[#B76E79] hover:text-[#B76E79] transition-all duration-200 shadow-sm touch-manipulation"
              aria-label="Neste"
            >
              <span className="sm:hidden font-sans text-xs tracking-wide">Neste</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── MINI CARD STRIP ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-10"
        >
          {indices.map((idx, pos) => {
            const t = testimonials[idx];
            const isActive = pos === 1;
            return (
              <button
                key={`${t.id}-${pos}`}
                onClick={() => goTo(idx)}
                className={`text-left p-4 lg:p-5 border transition-all duration-300 group ${
                  isActive
                    ? "border-[#B76E79] bg-white shadow-md"
                    : "border-[#E8D9D2] bg-white/70 hover:bg-white hover:border-[#D8B7A6]"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-serif font-medium text-white"
                    style={{
                      background: `linear-gradient(135deg, ${getAvatarGradient(t.name)[0]}, ${getAvatarGradient(t.name)[1]})`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-medium text-xs truncate transition-colors ${isActive ? "text-[#0B0B0D]" : "text-[#555]"}`}>
                      {t.name}
                    </p>
                    <p className="text-[#999] text-[10px]">{t.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-2.5 h-2.5 fill-current ${isActive ? "text-[#C9A27E]" : "text-[#D8B7A6]"}`} />
                  ))}
                </div>
                <p className={`text-xs leading-relaxed line-clamp-2 transition-colors ${isActive ? "text-[#2A2A2A]" : "text-[#888]"}`}>
                  {t.text}
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* ── INFINITE SCROLL STRIP ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #F7F2EE, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #F7F2EE, transparent)" }} />

          {/* Scrolling row */}
          <div
            className="flex gap-3"
            style={{
              animation: "scroll-left 50s linear infinite",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <button
                key={`${t.id}-scroll-${i}`}
                onClick={() => goTo(i % total)}
                className="flex-shrink-0 w-64 bg-white border border-[#E8D9D2] p-4 text-left hover:border-[#C9A27E] transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-serif font-medium text-white"
                    style={{
                      background: `linear-gradient(135deg, ${getAvatarGradient(t.name)[0]}, ${getAvatarGradient(t.name)[1]})`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <span className="text-[#0B0B0D] text-xs font-medium truncate">{t.name}</span>
                  <div className="ml-auto flex-shrink-0">
                    <GoogleIcon />
                  </div>
                </div>
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-2.5 h-2.5 text-[#F5B800] fill-[#F5B800]" />
                  ))}
                </div>
                <p className="text-[#666] text-[11px] leading-relaxed line-clamp-2">
                  {t.text}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── PROGRESS + DOTS ───────────────────────────────── */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-[#E8D9D2] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#B76E79] rounded-full"
              animate={{ width: `${((current + 1) / total) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Counter */}
          <p className="label-luxury text-[9px] tracking-[0.2em] text-[#999]">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* CSS for the infinite scroll animation */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
