"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#hjem", label: "Hjem" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#galleri", label: "Galleri" },
  { href: "#priser", label: "Priser" },
  { href: "#kurs", label: "Kurs" },
  { href: "#om-oss", label: "Om Oss" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F2EE]/95 backdrop-blur-xl border-b border-[#E8D9D2] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-28">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick("#hjem")}
              whileHover={{ scale: 1.04 }}
              className="flex-shrink-0"
            >
              {/* Mobile logo */}
              <Image
                src={scrolled ? "/BANNER.png" : "/LOGO1.png"}
                alt="Beauty Queen Oslo"
                width={70}
                height={70}
                style={{ width: 70, height: 70 }}
                className="object-contain transition-opacity duration-300 block lg:hidden"
                priority
              />
              {/* Desktop logo */}
              <Image
                src={scrolled ? "/BANNER.png" : "/LOGO1.png"}
                alt="Beauty Queen Oslo"
                width={180}
                height={180}
                style={{ width: 180, height: 180 }}
                className="object-contain transition-opacity duration-300 hidden lg:block"
                priority
              />
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`label-luxury text-[10px] tracking-[0.18em] transition-all duration-300 hover:text-[#B76E79] ${
                    scrolled ? "text-[#2A2A2A]" : "text-white/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick("#booking")}
                className={`hidden md:inline-flex ${
                  !scrolled ? "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#0B0B0D]" : ""
                }`}
              >
                Book Nå
              </Button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  scrolled ? "text-[#0B0B0D]" : "text-white"
                }`}
                aria-label="Åpne meny"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 48px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0D] flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-8">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6"
              >
                <div className="flex justify-center">
                  <Image
                    src="/LOGO1.png"
                    alt="Beauty Queen Oslo"
                    width={120}
                    height={120}
                    style={{ width: 120, height: 120 }}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-serif text-3xl text-white hover:text-[#C9A27E] transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-4"
              >
                <Button
                  size="lg"
                  onClick={() => handleNavClick("#booking")}
                  className="bg-[#B76E79] text-white hover:bg-[#9B5560]"
                >
                  Book Luksusopplevelse
                </Button>
              </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pb-12 text-center"
            >
              <p className="label-luxury text-[#C9A27E]/60 text-[10px]">
                PMU · Brows · Lashes · Nails
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile CTA — plain div, no Framer Motion to prevent scroll jitter */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          transform: "translateZ(0)",   /* force GPU layer — stops iOS jitter */
          willChange: "transform",
        }}
      >
        <div className="bg-white border-t border-[#E8D9D2] px-5 pt-3 pb-4 flex gap-3">
          <button
            onClick={() => handleNavClick("#booking")}
            className="flex-1 bg-[#B76E79] text-white font-sans font-medium text-xs tracking-[0.2em] uppercase py-4 min-h-[52px] transition-colors touch-manipulation active:bg-[#9B5560]"
          >
            Book Nå
          </button>
          <a
            href="tel:+4794447080"
            className="flex items-center justify-center border border-[#E8D9D2] bg-white text-[#0B0B0D] font-sans font-medium text-xs tracking-[0.15em] uppercase px-5 min-h-[52px] transition-colors touch-manipulation active:border-[#B76E79] active:text-[#B76E79]"
          >
            Ring
          </a>
        </div>
      </div>
    </>
  );
}
