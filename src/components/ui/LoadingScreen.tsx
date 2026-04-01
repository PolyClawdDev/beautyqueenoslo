"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("bq-intro-shown");
    if (!shown) {
      setVisible(true);
      sessionStorage.setItem("bq-intro-shown", "1");

      // Hold for 4 seconds then fade out over 1.2s
      const startExit = setTimeout(() => setLeaving(true), 4000);
      const remove   = setTimeout(() => setVisible(false), 5200);

      return () => {
        clearTimeout(startExit);
        clearTimeout(remove);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0D] overflow-hidden"
        >
          {/* Ambient radial glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(201,162,126,0.13) 0%, transparent 70%)",
            }}
          />

          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.78, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Halo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="absolute pointer-events-none"
              style={{
                width: 340,
                height: 340,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(201,162,126,0.2) 0%, transparent 68%)",
                filter: "blur(32px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <Image
              src="/LOGO.png"
              alt="Beauty Queen Oslo"
              width={260}
              height={260}
              style={{ width: 260, height: 260 }}
              className="object-contain relative z-10"
              priority
            />

            {/* Tagline only — no brand name text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-6 font-sans font-medium text-[#C9A27E] text-[10px] tracking-[0.5em] uppercase"
            >
              PMU · Brows · Lashes · Nails
            </motion.p>
          </motion.div>

          {/* Gold sweep line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 h-px w-40 origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A27E, #E2C89A, #C9A27E, transparent)",
            }}
          />

          {/* Pulsing dot */}
          <motion.div
            className="mt-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-1 h-1 rounded-full bg-[#C9A27E]"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
