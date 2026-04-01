"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Trophy, Sparkles, Heart, Star } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Prisbelønnet ekspertise",
    description: "Anerkjent på verdensscenen som en av de beste beauty-artistene.",
  },
  {
    icon: Sparkles,
    title: "Premium behandlinger",
    description: "Kun de beste produktene og teknikkene brukes i vår salong.",
  },
  {
    icon: Heart,
    title: "Personlig omsorg",
    description: "Hvert klient behandles individuelt – din skjønnhet er unik.",
  },
  {
    icon: Star,
    title: "Kontinuerlig læring",
    description: "Vi er alltid oppdatert på de nyeste trendene og teknikkene.",
  },
];

export function AboutSection() {
  return (
    <section id="om-oss" className="bg-[#FAF6F2] section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* ── IMAGE COLUMN ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Accent thumbnail – top-left, inside the image so no overflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-4 left-4 z-20 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden border-4 border-[#FAF6F2] shadow-xl"
            >
              <Image
                src="/brows-1.jpg"
                alt="Beauty detalj"
                fill
                className="object-cover"
                sizes="128px"
              />
            </motion.div>

            {/* Main image */}
            <div className="relative h-[380px] sm:h-[460px] lg:h-[580px] overflow-hidden">
              <Image
                src="/salon-1.jpg"
                alt="Beauty Queen Oslo – Salongen"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF6F2]/20" />
            </div>

            {/* Award badge – anchored inside bottom-right of image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-br from-[#0B0B0D] to-[#1a1a1f] p-4 sm:p-6 shadow-2xl z-20"
            >
              <div className="text-center">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#C9A27E] mx-auto mb-1.5" />
                <div className="font-serif text-xl sm:text-2xl text-white leading-none mb-0.5">3.</div>
                <div className="font-sans font-medium text-[8px] text-[#C9A27E] tracking-[0.2em] uppercase">Plass VM OMC</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── TEXT COLUMN ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="pt-4 lg:pt-0"
          >
            <SectionLabel className="mb-5 sm:mb-6">Om Oss</SectionLabel>
            <h2 className="heading-md text-[#0B0B0D] mb-5">
              Kunstnerskap møter
              <br />
              <em className="font-serif italic text-[#B76E79]">luksus</em>
            </h2>

            <p className="text-[#666] text-sm sm:text-base leading-relaxed mb-5">
              Beauty Queen Oslo ble skapt med én visjon: å gi Oslos kvinner tilgang til
              verdens beste beauty-behandlinger i et trygt, luksuriøst og personlig
              miljø. Vi kombinerer internasjonal ekspertise med et ekte engasjement
              for din individuelle skjønnhet.
            </p>

            <p className="text-[#666] text-sm sm:text-base leading-relaxed mb-7">
              Vår grunnlegger er tredjeplass verdensmester i OMC – en prestasjon som
              underbygger det høye faglige nivået i alle behandlinger vi tilbyr.
              Hvert penselstrøk, hver linje og hvert negldesign er skapt med
              en artists øye og en ekspert hånd.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#C9A27E] pl-5 mb-7">
              <p className="font-serif text-base sm:text-lg italic text-[#0B0B0D] mb-2 leading-snug">
                "Skjønnhet handler ikke om å forandre hvem du er –
                det handler om å fremheve din beste versjon."
              </p>
              <cite className="font-sans font-medium text-[9px] tracking-[0.2em] text-[#C9A27E] not-italic uppercase">
                — Beauty Queen Oslo
              </cite>
            </blockquote>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    className="flex gap-2.5 sm:gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F3E6E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B76E79]" />
                    </div>
                    <div>
                      <h4 className="text-[#0B0B0D] text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">{value.title}</h4>
                      <p className="text-[#999] text-[11px] sm:text-xs leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-[#0B0B0D] text-[#F7F2EE] font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] hover:bg-[#2A2A2A] transition-colors touch-manipulation"
            >
              Book Din Opplevelse
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
