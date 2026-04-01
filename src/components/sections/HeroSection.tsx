"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const stats = [
  { value: "14.1k", label: "Følgere" },
  { value: "78", label: "Google 5★" },
  { value: "3.", label: "Plass VM OMC" },
  { value: "Oslo", label: "Premium Salong" },
];

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setLoaded(true);

    // Fallback: if video doesn't fire canplay within 1.5s, reveal it anyway
    const fallback = setTimeout(() => setVideoReady(true), 1500);

    const vid = videoRef.current;
    if (vid) {
      // Try multiple events — .mov / H.264 varies by browser
      const onReady = () => {
        clearTimeout(fallback);
        setVideoReady(true);
      };
      vid.addEventListener("canplay", onReady, { once: true });
      vid.addEventListener("loadeddata", onReady, { once: true });
      // If already loaded (cached), fire immediately
      if (vid.readyState >= 2) onReady();
      return () => {
        clearTimeout(fallback);
        vid.removeEventListener("canplay", onReady);
        vid.removeEventListener("loadeddata", onReady);
      };
    }
    return () => clearTimeout(fallback);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hjem" className="relative h-screen min-h-[600px] overflow-hidden bg-[#0B0B0D]">

      {/* VIDEO */}
      {/* Dark base — always visible as fallback */}
      <div className="absolute inset-0 bg-[#0B0B0D]" />

      <video
        ref={videoRef}
        src="/BACKROUND.mov"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1200ms] ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto w-full pt-20 sm:pt-24 lg:pt-36">

          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="inline-flex items-center gap-2 w-fit mb-5 sm:mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9A27E]/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <Star className="w-3 h-3 text-[#E2C89A] fill-[#E2C89A] flex-shrink-0" />
              <span className="font-sans font-medium text-[#E2C89A] text-[9px] sm:text-[10px] tracking-[0.18em] uppercase">
                3. Plass Verdensmester OMC
              </span>
              <Star className="w-3 h-3 text-[#E2C89A] fill-[#E2C89A] flex-shrink-0" />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="font-serif text-white"
              style={{
                fontSize: "clamp(2.4rem, 9vw, 6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Luksus skjønnhet,
              <br />
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(90deg, #E2C89A 0%, #C9A27E 50%, #E2C89A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Perfeksjonert.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="mt-4 sm:mt-6 text-white/75 font-sans font-light leading-relaxed text-sm sm:text-base max-w-lg"
            >
              Oslos mest eksklusive destinasjon for PMU, brows, lashes og negler.
              Prisbelønnet skjønnhetsekspert med verdensklasse-standard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.15, duration: 0.7 }}
              className="mt-7 sm:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => scrollTo("#booking")}
                className="group relative overflow-hidden bg-[#B76E79] text-white font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] transition-all duration-300 hover:shadow-xl hover:shadow-[#B76E79]/40 active:scale-[0.97] touch-manipulation"
              >
                <span className="relative z-10">Book Nå</span>
                <div className="absolute inset-0 bg-[#9B5560] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollTo("#tjenester")}
                className="text-white font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/50 transition-all duration-300 touch-manipulation"
              >
                Se Tjenester
              </button>
            </motion.div>
          </div>
        </div>

        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="border-t border-white/10 bg-black/30 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-4 divide-x divide-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="py-4 px-2 sm:py-5 sm:px-5 text-center">
                  <div className="font-serif text-lg sm:text-2xl text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="font-sans font-medium text-[#C9A27E]/80 text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR — hidden on very small screens */}
      <motion.button
        onClick={() => scrollTo("#tjenester")}
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors duration-300 touch-manipulation"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
